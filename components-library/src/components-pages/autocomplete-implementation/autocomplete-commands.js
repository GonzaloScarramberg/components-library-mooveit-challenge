import React from 'react';
import PropTypes from 'prop-types';

const AutocompleteCommands = ({
  setNoResultsMessage,
  setPlaceholder,
  setDisabled,
  setMaxHeight,
}) => (
  <>
    <div style={{ flex: '0 0 50%' }}>
      <h3>placeholder</h3>
      <input
        type='text'
        placeholder='insert placeholder'
        onChange={(e) => setPlaceholder(e.target.value)}
      />
    </div>
    <div style={{ flex: '0 0 50%' }}>
      <h3>No results message</h3>
      <input
        type='text'
        placeholder='insert no results message'
        onChange={(e) => setNoResultsMessage(e.target.value)}
      />
    </div>
    <div style={{ flex: '0 0 50%' }}>
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
    <div style={{ flex: '0 0 50%' }}>
      <h3>Max height</h3>
      <input
        type='text'
        placeholder='insert maxheight'
        onChange={(e) => setMaxHeight(e.target.value)}
      />
    </div>
  </>
);

AutocompleteCommands.propTypes = {
  setNoResultsMessage: PropTypes.func.isRequired,
  setPlaceholder: PropTypes.func.isRequired,
  setDisabled: PropTypes.func.isRequired,
  setMaxHeight: PropTypes.func.isRequired,
};

export default AutocompleteCommands;
