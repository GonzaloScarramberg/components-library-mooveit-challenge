import React from 'react';
import GSInputNumber from '../../components/gsInputNumber/gsInputNumber';
import InputNumberCommands from './input-number-commands';

const InputNumberImplementation = () => {
  const [style, setStyle] = React.useState('');
  const [hasDecimals, setHasDecimals] = React.useState(false);
  const [numberOfDecimals, setNumberOfDecimals] = React.useState('');
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
            <GSInputNumber
              style={style}
              hasDecimals={hasDecimals}
              numberOfDecimals={numberOfDecimals}
            />
          </div>
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexFlow: 'wrap',
              rowGap: '10px',
            }}
          >
            <InputNumberCommands
              setStyle={setStyle}
              setHasDecimals={setHasDecimals}
              setNumberOfDecimals={setNumberOfDecimals}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNumberImplementation;
