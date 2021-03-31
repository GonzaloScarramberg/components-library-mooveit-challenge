import React from 'react';
import GSInputNumber from './gsInputNumber';

export default {
  title: 'Input Number',
  component: GSInputNumber,
  argTypes: {
    format: {
      options: ['no-grouped', 'grouped-commas', 'grouped-dots'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <GSInputNumber {...args} value={value} onChangeValue={setValue} />;
};

export const InputNumberComponent = Template.bind({});
