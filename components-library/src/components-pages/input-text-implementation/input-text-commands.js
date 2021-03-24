import React from 'react';
import PropTypes from 'prop-types';

const InputTextCommands = ({
  setPlaceholder,
  setStyle,
  setMaxLength,
  setHasResetButton,
  setFieldName,
  setDisabled,
}) => (
  <>
    <div style={{ flex: '0 0 50%' }}>
      <h3>Field Name</h3>
      <input
        type='text'
        placeholder='insert Field name'
        onChange={(e) => setFieldName(e.target.value)}
      />
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>input placeholder</h3>
      <input
        type='text'
        placeholder='insert input placeholder'
        onChange={(e) => setPlaceholder(e.target.value)}
      />
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>style</h3>
      <select
        name='style'
        id='style'
        onChange={(e) => setStyle(e.target.value)}
      >
        <option value='Bottom-Lined'>Bottom Lined</option>
        <option value='Outlined'>Outlined</option>
        <option value='Filled'>Filled</option>
      </select>
    </div>
    <div style={{ flex: '0 0 50%', display: 'flex' }}>
      <span>
        <input
          type='checkbox'
          name='disabled'
          id='disabled'
          onChange={(e) => setDisabled(e.target.checked)}
        />
        Disabled
      </span>
    </div>
    <div style={{ flex: '0 0 50%', display: 'flex' }}>
      <span>
        <input
          type='checkbox'
          name='resetButton'
          id='resetButton'
          onChange={(e) => setHasResetButton(e.target.checked)}
        />
        Reset Button
      </span>
    </div>
    <div style={{ flex: '0 0 50%', display: 'flex' }}>
      <span>
        <input
          type='text'
          name=''
          id=''
          onChange={(e) => setMaxLength(e.target.value)}
        />
        Max Length
      </span>
    </div>
  </>
);

InputTextCommands.propTypes = {
  setPlaceholder: PropTypes.func.isRequired,
  setStyle: PropTypes.func.isRequired,
  setMaxLength: PropTypes.func.isRequired,
  setHasResetButton: PropTypes.func.isRequired,
  setFieldName: PropTypes.func.isRequired,
  setDisabled: PropTypes.func.isRequired,
};

export default InputTextCommands;
