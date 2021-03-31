import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import '../shared/globalStyles.css';
import * as Styles from './autocompleteStyles';
import { ItemsList, Item } from '../shared/sharedStyledComponents';
import GSAutocompleteItem from './gsAutocompleteItem';
import Theme from '../themes/theme';

const GSAutocomplete = ({
  noResultsMessage,
  placeholder,
  disabled,
  maxHeight,
  options,
  value,
  onChangeValue,
}) => {
  const [isItemListVisible, setIsItemListVisible] = React.useState(false);
  const [itemsFiltered, setItemsFiltered] = React.useState([]);

  const handleAutocomplete = (e) => {
    const filter = options.filter((item) =>
      item.toUpperCase().startsWith(e.toUpperCase()),
    );
    setItemsFiltered(filter);
  };

  React.useEffect(() => {
    handleAutocomplete(value);
  }, [value]);

  const handleOnChangeInputValue = (e) => {
    setIsItemListVisible(true);
    onChangeValue(e);
  };

  const updateCheckedValue = (e) => {
    onChangeValue(e);
    handleAutocomplete(e);
    setIsItemListVisible(!isItemListVisible);
  };

  const FilterResults = () => {
    if (itemsFiltered.length === 0) {
      return <Item>{noResultsMessage}</Item>;
    }
    return itemsFiltered.map((item) => (
      <GSAutocompleteItem
        key={item}
        description={item}
        optionSelected={updateCheckedValue}
      />
    ));
  };

  const OptionsList = () =>
    value !== '' ? (
      <FilterResults />
    ) : (
      options.map((item) => (
        <GSAutocompleteItem
          key={item}
          description={item}
          optionSelected={updateCheckedValue}
        />
      ))
    );

  return (
    <Theme theme={useContext(ThemeContext)}>
      <Styles.AutocompleteDiv>
        <Styles.AutocompleteField
          data-testid='gsAutocompleteField'
          className={`gsAutocompleteField`}
          aria-hidden='true'
          onClick={() => !disabled && setIsItemListVisible(!isItemListVisible)}
        >
          <div
            css={`
              width: 100%;
              display: flex;
            `}
          >
            <Styles.AutocompleteInput
              css={`
                width: 100%;
              `}
              autoComplete='off'
              data-testid='autocompleteInput'
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              type='text'
              name='gsAutocompleteInputField'
              id='gsAutocompleteInputField'
              className={'input'}
              onChange={(e) => handleOnChangeInputValue(e.target.value)}
            />
          </div>
        </Styles.AutocompleteField>
        <ItemsList
          visibility={isItemListVisible}
          data-testid='gsAutocompleteItemsList'
          maxHeight={maxHeight}
        >
          <OptionsList />
        </ItemsList>
      </Styles.AutocompleteDiv>
    </Theme>
  );
};

GSAutocomplete.propTypes = {
  noResultsMessage: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxHeight: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
};

GSAutocomplete.defaultProps = {
  noResultsMessage: 'No results',
  placeholder: 'choose an option',
  disabled: false,
  maxHeight: '200',
  options: [],
  value: '',
  onChangeValue: () => {},
};

export default GSAutocomplete;
