import React from 'react';
import './gsSelectInput.css';
import PropTypes from 'prop-types';
import GSSelectInputItem from './gsSelectInputItem';

const GSSelectInput = ({ isMultiSelect, isStyledItem, placeholder }) => {
  const [isItemListVisible, setIsItemListVisible] = React.useState(false);
  const [itemsSelected, setItemsSelected] = React.useState([]);

  React.useEffect(() => {
    setItemsSelected([]);
  }, [isMultiSelect]);

  const itemsList = [
    { id: 1, name: 'New york' },
    { id: 2, name: 'London' },
    { id: 3, name: 'Buenos Aires' },
    { id: 4, name: 'Madrid' },
  ];

  const updateCheckStatus = (itemId) => (e) => {
    let newItemsSelected = [...itemsSelected];

    if (isMultiSelect) {
      if (e.Checked) {
        newItemsSelected.push({ id: itemId, name: e.Name });
      } else {
        newItemsSelected = newItemsSelected.filter((x) => x.id !== itemId);
      }
    } else {
      newItemsSelected = [];
      newItemsSelected.push({ id: itemId, name: e.Name });
    }
    setItemsSelected(newItemsSelected);
  };

  const handleItemStyle = () => {
    if (!isStyledItem) {
      return itemsSelected.map((x) => x.name).toString();
    }
    return itemsSelected.map((x) => (
      <div className={`gsSelectInputItemsSelected`}>{x.name}</div>
    ));
  };

  return (
    <div className={`gsSelectInput`}>
      <div
        className={`gsSelectInputField`}
        onClick={() => setIsItemListVisible(!isItemListVisible)}
        aria-hidden='true'
      >
        <div className={`gsSelectInputValues`}>
          {itemsSelected.length !== 0 ? handleItemStyle() : `${placeholder}`}
        </div>
        <div className={`gsSelectInputIcon`}>+</div>
      </div>
      <div
        className={`${
          isItemListVisible ? 'gsSelectInputItemsList ' : 'gsHidden'
        }`}
      >
        {itemsList.map((item) => (
          <GSSelectInputItem
            key={item.id}
            name={item.name}
            isMultiSelect={isMultiSelect}
            updateCheckStatus={updateCheckStatus(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

GSSelectInput.propTypes = {
  isMultiSelect: PropTypes.bool,
  isStyledItem: PropTypes.bool,
  placeholder: PropTypes.string,
};

GSSelectInput.defaultProps = {
  isMultiSelect: true,
  isStyledItem: false,
  placeholder: 'Select an option',
};

export default GSSelectInput;
