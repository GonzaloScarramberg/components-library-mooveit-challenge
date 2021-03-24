import React from 'react';
import GSInputText from '../../components/gsInputText/gsInputText';
import InputTextCommands from './input-text-commands';

const InputTextImplementation = () => {
  const [style, setStyle] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('');
  const [maxLength, setMaxLength] = React.useState('');
  const [hasResetButton, setHasResetButton] = React.useState(false);
  const [fieldName, setFieldName] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

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
            <div style={{ width: '60%' }}>
              <GSInputText
                style={style}
                placeholder={placeholder}
                maxLength={maxLength}
                hasResetButton={hasResetButton}
                fieldName={fieldName}
                disabled={disabled}
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
            <InputTextCommands
              setStyle={setStyle}
              setPlaceholder={setPlaceholder}
              setMaxLength={setMaxLength}
              setHasResetButton={setHasResetButton}
              setFieldName={setFieldName}
              setDisabled={setDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputTextImplementation;
