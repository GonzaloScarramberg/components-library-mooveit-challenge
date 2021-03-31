import React from 'react';
import GSInputText from './gsInputText';

export default {
  title: 'Input Text',
  component: GSInputText,
  argTypes: {
    style: {
      options: ['Bottom-Lined', 'Filled', 'Outlined'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <GSInputText {...args} value={value} onChangeValue={setValue} />;
};

export const InputTextComponent = Template.bind({});
