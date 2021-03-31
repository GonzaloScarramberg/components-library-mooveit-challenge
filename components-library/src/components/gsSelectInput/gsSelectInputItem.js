import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { Item } from '../shared/sharedStyledComponents';

const GSSelectInputItem = ({ name, isMultiSelect, updateCheckStatus }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (!isMultiSelect) {
      setIsChecked(false);
    }
  });

  return (
    <Item
      aria-hidden='true'
      onClick={() => {
        updateCheckStatus({ Name: name, Checked: !isChecked });
        setIsChecked(!isChecked);
      }}
    >
      <div
        css={`
          margin-right: ${isMultiSelect && `0.5rem`};
        `}
      >
        {isMultiSelect && (
          <input
            className='checkbox'
            type='checkbox'
            checked={isChecked && isMultiSelect}
            data-testid={`checkbox-${name}`}
          />
        )}
      </div>
      <div>
        <span>{name}</span>
      </div>
    </Item>
  );
};

GSSelectInputItem.propTypes = {
  name: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool.isRequired,
  updateCheckStatus: PropTypes.func.isRequired,
};

export default GSSelectInputItem;
