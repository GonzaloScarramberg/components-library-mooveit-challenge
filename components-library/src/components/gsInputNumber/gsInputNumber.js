import React from 'react';
import PropTypes from 'prop-types';

const GSInputNumber = ({ style }) => {
  const [inputValue, setInputValue] = React.useState(0);

  React.useEffect(() => {
    setInputValue('');
  }, [style]);

  const handleInputStyle = (event) => {
    setInputValue(event.target.value.replace(/\D/, ''));

    const regexExpression = /(\d)(?=(\d{3})+$)/g;

    switch (style) {
      case 'grouped-commas':
        setInputValue(
          event.target.value
            .replaceAll(',', '')
            .replace(regexExpression, '$1,'),
        );
        break;
      case 'grouped-dots':
        setInputValue(
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
    <input value={inputValue} onChange={(event) => handleInputStyle(event)} />
  );
};

GSInputNumber.propTypes = {
  style: PropTypes.string,
};

GSInputNumber.defaultProps = {
  style: 'no-grouped',
};

export default GSInputNumber;
