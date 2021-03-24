import React from 'react';
import GSButton from '../../components/gsButton/gsbutton';
import ButtonCommands from './button-commands';

const ButtonImplementation = () => {
  const [color, setColor] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('');
  const [size, setSize] = React.useState('');
  const [style, setStyle] = React.useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '50%', padding: '1rem' }}>
        <h2>Button implementation</h2>
        <p>
          This is an example of the implementation of the GSButton. on one hand
          you have the chance to change the many variants that this component
          has. You can change the color, size, border style and text.
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
          <GSButton
            color={color}
            placeholder={placeholder}
            size={size}
            style={style}
          />
        </div>
        <div style={{ flex: '1', display: 'flex', flexFlow: 'wrap' }}>
          <ButtonCommands
            setColor={setColor}
            setPlaceholder={setPlaceholder}
            setSize={setSize}
            setStyle={setStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonImplementation;
