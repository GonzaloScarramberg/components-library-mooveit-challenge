import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import '../shared/globalStyles.css';
import Theme from '../themes/theme';
import * as Styles from './gsInputNumberStyles';

const GSInputNumber = ({
  format,
  disabled,
  placeholder,
  value,
  onChangeValue,
  buttons,
}) => {
  React.useEffect(() => {
    onChangeValue('');
  }, [format]);

  const handleInputValue = (inputValue) => {
    let valueFormatted = inputValue;

    valueFormatted = valueFormatted.toString().replace(/\D/, '');

    const regexExpression = /(\d)(?=(\d{3})+$)/g;

    switch (format) {
      case 'grouped-commas':
        valueFormatted = valueFormatted
          .replaceAll(',', '')
          .replace(regexExpression, '$1,');
        break;
      case 'grouped-dots':
        valueFormatted = valueFormatted
          .replaceAll('.', '')
          .replace(regexExpression, '$1.');
        break;
      default:
        break;
    }

    onChangeValue(valueFormatted);
  };

  const handleButtonsAction = (inputValue, buttonsValue, operator) => {
    let valueFormatted = inputValue
      .toString()
      .replaceAll(',', '')
      .replaceAll('.', '');

    if (operator === 'sumOperator') {
      valueFormatted = +valueFormatted + +buttonsValue;
    } else if (valueFormatted > 0) {
      valueFormatted -= buttonsValue;
    }

    if (valueFormatted < buttonsValue) {
      valueFormatted = 0;
    }

    handleInputValue(valueFormatted);
  };

  return (
    <Theme theme={useContext(ThemeContext)}>
      <Styles.InputNumberDiv>
        <Styles.InputNumberField
          autoComplete='off'
          className={'input'}
          value={value}
          disabled={disabled}
          onChange={(event) => handleInputValue(event.target.value)}
          placeholder={placeholder}
        />
        {/^\d+$/.test(buttons) && (
          <Styles.InputNumberButtonsDiv>
            <Styles.InputNumberButton
              name='sumOperator'
              onClick={(e) =>
                handleButtonsAction(value, buttons, e.target.name)
              }
              type='button'
            >
              +
            </Styles.InputNumberButton>
            <Styles.InputNumberButton
              name='minusOperator'
              onClick={(e) =>
                handleButtonsAction(value, buttons, e.target.name)
              }
              type='button'
            >
              -
            </Styles.InputNumberButton>
          </Styles.InputNumberButtonsDiv>
        )}
      </Styles.InputNumberDiv>
    </Theme>
  );
};

GSInputNumber.propTypes = {
  format: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
  buttons: PropTypes.string,
};

GSInputNumber.defaultProps = {
  format: 'no-grouped',
  disabled: false,
  placeholder: 'Insert a number',
  value: '',
  onChangeValue: () => {},
  buttons: '',
};

export default GSInputNumber;
