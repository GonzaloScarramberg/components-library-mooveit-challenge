import React from 'react';
import GSSelectInput from './gsSelectInput';

export default {
  title: 'Select Input',
  component: GSSelectInput,
};

const Template = (args) => {
  const [value, setValue] = React.useState();
  return <GSSelectInput {...args} value={value} onChangeValue={setValue} />;
};

export const SelectInputComponent = Template.bind({});
