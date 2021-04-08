import React from 'react';
import GSButton from './gsbutton';

export default {
  title: 'Button',
  component: GSButton,
  argTypes: {
    color: {
      options: ['Primary', 'Secondary', 'Info', 'Warning', 'Danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['Standard', 'Rounded', 'Raised', 'Text'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState();
  return <GSButton {...args} value={value} onChangeValue={setValue} />;
};

export const ButtonComponent = Template.bind({});
