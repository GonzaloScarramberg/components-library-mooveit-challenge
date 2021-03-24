import React from 'react';
import PropTypes from 'prop-types';
import './gsButton.css';

const GSButton = ({ color, placeholder, size, style }) => (
  <button
    type='button'
    className={`${color} ${size} ${style} gsbutton gsripple`}
  >
    {placeholder === '' ? 'Add custom text' : placeholder}
  </button>
);

GSButton.propTypes = {
  color: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default GSButton;
