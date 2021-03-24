import React from 'react';
import PropTypes from 'prop-types';
import './gsSelectInput.css';

const GSSelectInputItem = ({ name, isMultiSelect, updateCheckStatus }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (!isMultiSelect) {
      setIsChecked(false);
    }
  });

  return (
    <div
      className={`gsSelectInputItem`}
      aria-hidden='true'
      onClick={() => {
        updateCheckStatus({ Name: name, Checked: !isChecked });
        setIsChecked(!isChecked);
      }}
    >
      <div
        className={`${
          isMultiSelect ? 'gsSelectInputItemCheckbox' : 'gsHidden'
        }`}
      >
        <input type='checkbox' checked={isChecked && isMultiSelect} />
      </div>
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
};

GSSelectInputItem.propTypes = {
  name: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool.isRequired,
  updateCheckStatus: PropTypes.func.isRequired,
};

export default GSSelectInputItem;
