import React from 'react';
import PropTypes from 'prop-types';

const InputNumberCommands = ({
  setStyle,
  setHasDecimals,
  setNumberOfDecimals,
}) => (
  <>
    <div style={{ flex: '0 0 50%' }}>
      <h3>input placeholder</h3>
      <input type='text' placeholder='insert input placeholder' />
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Style</h3>
      <select
        name='style'
        id='style'
        onChange={(e) => setStyle(e.target.value)}
      >
        <option value='grouped-commas'>Grouped With Commas</option>
        <option value='grouped-dots'>Grouped With Dots</option>
      </select>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <span>
        <input type='checkbox' name='' id='' />
        Disabled
      </span>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <span>
        <input
          type='checkbox'
          name='hasDecimals'
          id='hasDecimals'
          onChange={(e) => setHasDecimals(e.target.checked)}
        />
        Has Decimals
      </span>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Number of decimals</h3>
      <input
        type='text'
        placeholder='insert number of decimals'
        onChange={(e) => setNumberOfDecimals(e.target.value)}
      />
    </div>
  </>
);

InputNumberCommands.propTypes = {
  setStyle: PropTypes.func.isRequired,
  setHasDecimals: PropTypes.func.isRequired,
  setNumberOfDecimals: PropTypes.func.isRequired,
};

export default InputNumberCommands;
