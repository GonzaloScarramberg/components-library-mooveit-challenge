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
      <input
        className={'input'}
        value={value}
        disabled={disabled}
        onChange={(event) => handleInputValue(event)}
        placeholder={placeholder}
      />
    </Theme>
  );
};

GSInputNumber.propTypes = {
  format: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
};

GSInputNumber.defaultProps = {
  format: 'no-grouped',
  disabled: false,
  placeholder: 'Insert a number',
  value: '',
  onChangeValue: () => {},
};

export default GSInputNumber;
