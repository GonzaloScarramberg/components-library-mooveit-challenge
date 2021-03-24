import React from 'react';
import GSSelectInput from '../../components/gsSelectInput/gsSelectInput';
import SelectInputCommands from './select-input-commands';

const SelectInputImplementation = () => {
  const [isMultiSelect, setIsMultiSelect] = React.useState(false);
  const [isStyledItem, setIsStyledItem] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState('');
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '50%', padding: '1rem' }}>
          <h2>Input number implementation</h2>
          <p>
            This is an example of the implementation of the GSAutocomplete. on
            one hand you have the chance to change the many variants that this
            component has. You can change the color, size, border style and
            text.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '55%' }}>
              <GSSelectInput
                isMultiSelect={isMultiSelect}
                isStyledItem={isStyledItem}
                placeholder={placeholder}
              />
            </div>
          </div>
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexFlow: 'wrap',
              rowGap: '10px',
            }}
          >
            <SelectInputCommands
              setIsMultiSelect={setIsMultiSelect}
              setIsStyledItem={setIsStyledItem}
              setPlaceholder={setPlaceholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInputImplementation;
