import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import '../shared/globalStyles.css';
import Theme from '../themes/theme';

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

  const handleInputValue = (event) => {
    onChangeValue(event.target.value.replace(/\D/, ''));

    const regexExpression = /(\d)(?=(\d{3})+$)/g;

    switch (format) {
      case 'grouped-commas':
        onChangeValue(
          event.target.value
            .replaceAll(',', '')
            .replace(regexExpression, '$1,'),
        );
        break;
      case 'grouped-dots':
        onChangeValue(
          event.target.value
            .replaceAll('.', '')
            .replace(regexExpression, '$1.'),
        );
        break;
      default:
        break;
    }
  };

  return (
    <Theme theme={useContext(ThemeContext)}>
      <div
        css={`
          width: 100%;
          display: flex;
          position: relative;
        `}
      >
        <input
          css={`
            width: 100%;
            flex: 2 1 90%;
          `}
          autoComplete='off'
          className={'input'}
          value={value}
          disabled={disabled}
          onChange={(event) => handleInputValue(event)}
          placeholder={placeholder}
        />
        {buttons !== '0' && (
          <div
            css={`
              width: 5%;
              height: 100%;
              display: flex;
              flex-direction: column;
              flex: 1 1 20%;
              position: absolute;
              right: 1px;
            `}
          >
            <button
              onClick={() => onChangeValue(+value + +buttons)}
              type='button'
              css={`
                height: 50%;
              `}
            >
              +
            </button>
            <button
              onClick={() => onChangeValue(value - buttons)}
              type='button'
              css={`
                height: 50%;
              `}
            >
              -
            </button>
          </div>
        )}
      </div>
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
  buttons: '0',
};

export default GSInputNumber;
