import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../shared/sharedStyledComponents';

const GSAutocompleteItem = ({ description, optionSelected }) => (
  <Item
    data-testid={description}
    onClick={() => optionSelected(description)}
    aria-hidden='true'
  >
    <div>
      <span>{description}</span>
    </div>
  </Item>
);

GSAutocompleteItem.propTypes = {
  description: PropTypes.string.isRequired,
  optionSelected: PropTypes.func.isRequired,
};

export default GSAutocompleteItem;
