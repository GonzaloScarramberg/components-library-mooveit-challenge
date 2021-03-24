import React from 'react';
import './gsInputText.css';
import PropTypes from 'prop-types';

const GSInputText = ({
  style,
  placeholder,
  maxLength,
  hasResetButton,
  fieldName,
  disabled,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleLabelFocus = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={`gsInputText`}
      onFocus={() => setIsFocused(true)}
      onBlur={handleLabelFocus}
    >
      <div>
        <input
          disabled={disabled}
          placeholder={isFocused ? placeholder : ''}
          maxLength={maxLength}
          value={inputValue}
          type='text'
          name='gsInput'
          id='gsInputText'
          className={`gsInputTextField ${style}`}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {hasResetButton && inputValue !== '' && !disabled && (
          <span
            className={`gsInputTextResetButton`}
            aria-hidden='true'
            onClick={() => {
              setInputValue('');
              setIsFocused(false);
            }}
          >
            X
          </span>
        )}
      </div>
      <label
        htmlFor='gsInputText'
        className={`gsInputTextLabel ${style} ${isFocused ? 'focused' : ''}`}
      >
        {fieldName}
      </label>
    </div>
  );
};

GSInputText.propTypes = {
  style: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  hasResetButton: PropTypes.bool,
  fieldName: PropTypes.string,
  disabled: PropTypes.bool,
};

GSInputText.defaultProps = {
  style: 'Bottom-Lined',
  placeholder: 'Placeholder',
  maxLength: 0,
  hasResetButton: false,
  fieldName: 'Field',
  disabled: false,
};

export default GSInputText;
