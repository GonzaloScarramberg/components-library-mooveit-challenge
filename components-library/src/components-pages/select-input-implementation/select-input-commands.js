import React from 'react';
import PropTypes from 'prop-types';

const SelectInputCommands = ({
  setIsMultiSelect,
  setIsStyledItem,
  setPlaceholder,
}) => (
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
      <span>
        <input
          type='checkbox'
          name=''
          id=''
          onChange={(e) => setIsMultiSelect(e.target.checked)}
        />
        MultiSelect
      </span>
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <span>
        <input
          type='checkbox'
          name=''
          id=''
          onChange={(e) => setIsStyledItem(e.target.checked)}
        />
        Styled Item
      </span>
    </div>
  </>
);

SelectInputCommands.propTypes = {
  setIsMultiSelect: PropTypes.func.isRequired,
  setIsStyledItem: PropTypes.func.isRequired,
  setPlaceholder: PropTypes.func.isRequired,
};

export default SelectInputCommands;
