import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import '../shared/globalStyles.css';
import Button from './gsButtonStyles';
import Theme from '../themes/theme';

const GSButton = ({ color, placeholder, size, variant, disabled, onClick }) => (
  <Theme theme={useContext(ThemeContext)}>
    <Button
      type='button'
      color={color}
      size={size}
      buttonStyle={variant}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {placeholder === '' ? 'Add custom text' : placeholder}
    </Button>
  </Theme>
);

GSButton.propTypes = {
  color: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

GSButton.defaultProps = {
  color: 'Primary',
  placeholder: 'Default button',
  size: 'Small',
  variant: 'Standard',
  disabled: false,
  onClick: () => {},
};

export default GSButton;
