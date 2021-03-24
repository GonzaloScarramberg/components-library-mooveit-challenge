import React from 'react';
import PropTypes from 'prop-types';

const GSAutocompleteItem = ({ name, optionSelected }) => (
  <div
    className={`gsAutocompleteItem`}
    onClick={() => optionSelected(name)}
    aria-hidden='true'
  >
    <div>
      <span>{name}</span>
    </div>
  </div>
);

GSAutocompleteItem.propTypes = {
  name: PropTypes.string.isRequired,
  optionSelected: PropTypes.func.isRequired,
};

export default GSAutocompleteItem;
