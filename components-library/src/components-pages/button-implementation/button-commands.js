import React from 'react';
import PropTypes from 'prop-types';

const ButtonCommands = ({ setColor, setPlaceholder, setSize, setStyle }) => (
  <>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Button text</h3>
      <input
        type='text'
        placeholder='insert button text'
        onChange={(e) => setPlaceholder(e.target.value)}
      />
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Style</h3>
      <select
        name='style'
        id='style'
        onChange={(e) => setStyle(e.target.value)}
      >
        <option value='Standard'>Standard</option>
        <option value='Raised'>Raised</option>
        <option value='Text'>Text</option>
        <option value='Rounded'>Rounded</option>
      </select>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Color</h3>
      <select
        name='color'
        id='color'
        onChange={(e) => setColor(e.target.value)}
      >
        <option value='Primary'>Primary</option>
        <option value='Secondary'>Secondary</option>
        <option value='Info'>Info</option>
        <option value='Warning'>Warning</option>
        <option value='Danger'>Danger</option>
      </select>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Size</h3>
      <select name='style' id='style' onChange={(e) => setSize(e.target.value)}>
        <option value='Small'>Small</option>
        <option value='Medium'>Medium</option>
        <option value='Large'>Large</option>
      </select>
    </div>
  </>
);

ButtonCommands.propTypes = {
  setColor: PropTypes.func.isRequired,
  setPlaceholder: PropTypes.func.isRequired,
  setSize: PropTypes.func.isRequired,
  setStyle: PropTypes.func.isRequired,
};

export default ButtonCommands;
