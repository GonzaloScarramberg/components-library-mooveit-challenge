import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import '../shared/globalStyles.css';
import {
  InputTextDiv,
  InputTextField,
  InputTextLabel,
  InputTextResetButton,
} from './gsInputTextStyles';
import Theme from '../themes/theme';

const GSInputText = ({
  style,
  placeholder,
  maxLength,
  hasResetButton,
  fieldName,
  disabled,
  value,
  onChangeValue,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleLabelFocus = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <Theme theme={useContext(ThemeContext)}>
      <InputTextDiv
        id='gsInputText'
        onFocus={() => setIsFocused(true)}
        onBlur={handleLabelFocus}
      >
        <div
          css={`
            width: 100%;
            display: flex;
          `}
        >
          <InputTextField
            inputStyle={style}
            disabled={disabled}
            placeholder={isFocused ? placeholder : ''}
            maxLength={maxLength !== '0' ? maxLength : ''}
            value={value}
            type='text'
            name='gsInput'
            autoComplete='off'
            className={'input'}
            onChange={(e) => {
              onChangeValue(e.target.value);
            }}
          />
          {hasResetButton && value !== '' && !disabled && (
            <InputTextResetButton
              aria-hidden='true'
              onClick={() => {
                onChangeValue('');
                setIsFocused(false);
              }}
            >
              X
            </InputTextResetButton>
          )}
          <InputTextLabel
            htmlFor='gsInputText'
            isFocused={isFocused}
            inputStyle={style}
          >
            {fieldName}
          </InputTextLabel>
        </div>
      </InputTextDiv>
    </Theme>
  );
};

GSInputText.propTypes = {
  style: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  hasResetButton: PropTypes.bool,
  fieldName: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
};

GSInputText.defaultProps = {
  style: 'Bottom-Lined',
  placeholder: 'Placeholder',
  maxLength: '0',
  hasResetButton: false,
  fieldName: 'Field',
  disabled: false,
  value: '',
  onChangeValue: () => {},
};

export default GSInputText;
