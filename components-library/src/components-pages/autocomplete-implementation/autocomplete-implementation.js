import React from 'react';
import GSAutocomplete from '../../components/gsAutocomplete/gsAutocomplete';
import AutocompleteCommands from './autocomplete-commands';

const AutocompleteImplementation = () => {
  const [noResultsMessage, setNoResultsMessage] = React.useState();
  const [placeholder, setPlaceholder] = React.useState();
  const [disabled, setDisabled] = React.useState();
  const [maxHeight, setMaxHeight] = React.useState();

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '50%', padding: '1rem' }}>
          <h2>autocomplete implementation</h2>
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
              <GSAutocomplete
                noResultsMessage={noResultsMessage}
                placeholder={placeholder}
                disabled={disabled}
                maxHeight={maxHeight}
              />
            </div>
          </div>
          <div style={{ flex: '1', display: 'flex', flexFlow: 'wrap' }}>
            <AutocompleteCommands
              setNoResultsMessage={setNoResultsMessage}
              setPlaceholder={setPlaceholder}
              setDisabled={setDisabled}
              setMaxHeight={setMaxHeight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutocompleteImplementation;
