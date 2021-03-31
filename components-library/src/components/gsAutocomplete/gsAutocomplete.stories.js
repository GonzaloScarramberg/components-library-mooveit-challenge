import React from 'react';
import GSAutocomplete from './gsAutocomplete';

// const items = ['Argentina', 'Brasi', 'Uruguay', 'Chile', 'Colombia'];

export default {
  title: 'Autocomplete',
  component: GSAutocomplete,
};

const Template = (args) => {
  const [value, setValue] = React.useState();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <GSAutocomplete {...args} value={value} onChangeValue={setValue} />;
};

export const AutocompleteComponent = Template.bind({});
