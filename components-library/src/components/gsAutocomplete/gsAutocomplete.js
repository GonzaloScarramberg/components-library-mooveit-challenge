import React from 'react';
import './gsAutocomplete.css';
import PropTypes from 'prop-types';
import GSAutocompleteItem from './gsAutocompleteItem';

const GSAutocomplete = ({
  noResultsMessage,
  placeholder,
  disabled,
  maxHeight,
}) => {
  const [isItemListVisible, setIsItemListVisible] = React.useState(false);
  const [itemsFiltered, setItemsFiltered] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const items = [
    { name: 'Argentina', id: 1 },
    { name: 'Brasil', id: 2 },
    { name: 'Chile', id: 3 },
    { name: 'Uruguay', id: 4 },
    { name: 'Colombia', id: 5 },
    { name: 'China', id: 6 },
    { name: 'Italia', id: 7 },
    { name: 'Grecia', id: 8 },
    { name: 'Peru', id: 9 },
    { name: 'Ecuador', id: 10 },
  ];

  const handleAutocomplete = (e) => {
    const filter = items.filter((item) =>
      item.name.toUpperCase().startsWith(e.toUpperCase()),
    );

    setItemsFiltered(filter);
    setIsItemListVisible(true);
    setInputValue(e);
  };

  const updateValue = (e) => {
    setInputValue(e);
    handleAutocomplete(e);
    setIsItemListVisible(!isItemListVisible);
  };

  const FilterResults = () => {
    if (itemsFiltered.length === 0) {
      return <div className={`gsAutocompleteItem`}>{noResultsMessage}</div>;
    }
    return itemsFiltered.map((item) => (
      <GSAutocompleteItem
        key={item.id}
        name={item.name}
        optionSelected={updateValue}
      />
    ));
  };

  return (
    <div className={`gsAutocomplete`}>
      <div
        className={`gsAutocompleteField`}
        aria-hidden='true'
        onClick={() => !disabled && setIsItemListVisible(!isItemListVisible)}
      >
        <div className={`gsAutocompleteInputField`}>
          <input
            placeholder={placeholder}
            disabled={disabled}
            value={inputValue}
            type='text'
            name='gsAutocompleteInputField'
            id='gsAutocompleteInputField'
            className={`gsAutocompleteValue`}
            onChange={(e) => handleAutocomplete(e.target.value)}
          />
        </div>
      </div>
      <div
        className={`${
          isItemListVisible ? 'gsAutocompleteItemsList' : 'gsHidden'
        }`}
      >
        {inputValue !== '' ? (
          <FilterResults />
        ) : (
          items.map((item) => (
            <GSAutocompleteItem
              key={item.id}
              name={item.name}
              optionSelected={updateValue}
            />
          ))
        )}
      </div>
      <div id='prueba'>{maxHeight}</div>
    </div>
  );
};

GSAutocomplete.propTypes = {
  noResultsMessage: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maxHeight: PropTypes.string,
};

GSAutocomplete.defaultProps = {
  noResultsMessage: 'No results',
  placeholder: 'choose an option',
  disabled: false,
  maxHeight: '200',
};

export default GSAutocomplete;
