import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GSAutocomplete from './gsAutocomplete';

test('Shows item list when clicking input field', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const { getByTestId, getByText } = render(
    <GSAutocomplete options={options} />,
  );

  const inputField = getByTestId('gsAutocompleteField');

  fireEvent.click(inputField);

  expect(getByText('Argentina')).toBeVisible();
});

test('Disable input when disable property is true', () => {
  const { getByTestId } = render(<GSAutocomplete disabled />);

  const inputField = getByTestId('autocompleteInput');

  expect(inputField).toBeDisabled();
});

test('Add placeholder to input', () => {
  const { getByTestId } = render(
    <GSAutocomplete placeholder='Select an option' />,
  );

  const inputField = getByTestId('autocompleteInput');

  expect(inputField.placeholder).toBe('Select an option');
});

test('Handle on change', () => {
  const handleInputValue = jest.fn();

  const { getByTestId } = render(
    <GSAutocomplete onChangeValue={handleInputValue} />,
  );

  fireEvent.change(getByTestId('autocompleteInput'), {
    target: { value: 'china' },
  });

  expect(handleInputValue).toHaveBeenCalledTimes(1);
  expect(handleInputValue).toHaveBeenCalledWith('china');
});

test('Items list is visible when input field is clicked', () => {
  const { queryByTestId } = render(<GSAutocomplete />);

  fireEvent.click(queryByTestId('gsAutocompleteField'));

  expect(queryByTestId('gsAutocompleteItemsList')).toBeVisible();
});

test('Input filters items list', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const { queryByText, queryByTestId } = render(
    <GSAutocomplete options={options} value='chi' />,
  );

  fireEvent.click(queryByTestId('gsAutocompleteField'));

  expect(queryByText('No Results')).toBeNull();
  expect(queryByText('Argentina')).toBeNull();
  expect(queryByText('Chile')).not.toBeNull();
  expect(queryByText('China')).not.toBeNull();
});

test('message shown when filter does not match any option', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const { queryByText, queryByTestId } = render(
    <GSAutocomplete
      options={options}
      noResultsMessage='No Results'
      value='pl'
    />,
  );

  fireEvent.click(queryByTestId('gsAutocompleteField'));

  expect(queryByText('No Results')).not.toBeNull();
  expect(queryByText('Argentina')).toBeNull();
  expect(queryByText('China')).toBeNull();
});

test('option clicked is set to input value', () => {
  const handleInputValue = jest.fn();

  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const { queryByText, queryByTestId } = render(
    <GSAutocomplete options={options} onChangeValue={handleInputValue} />,
  );

  fireEvent.click(queryByTestId('gsAutocompleteField'));

  const option = queryByText('Argentina');

  fireEvent.click(option);

  expect(handleInputValue).toHaveBeenCalledWith('Argentina');
});

test('Obtain values selected', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const handleValueSelected = jest.fn();

  const { getByText, queryByTestId } = render(
    <GSAutocomplete
      options={options}
      onChangeValue={handleValueSelected}
      isMultiSelect
    />,
  );

  fireEvent.click(queryByTestId('gsAutocompleteField'));

  fireEvent.click(getByText('Argentina'));

  expect(handleValueSelected).toHaveBeenCalledTimes(1);

  expect(handleValueSelected).toHaveBeenCalledWith('Argentina');

  fireEvent.click(queryByTestId('gsAutocompleteField'));

  fireEvent.change(queryByTestId('autocompleteInput'), {
    target: { value: '' },
  });

  fireEvent.click(getByText('Uruguay'));

  expect(handleValueSelected).toHaveBeenCalledTimes(2);

  expect(handleValueSelected).toHaveBeenCalledWith('Uruguay');
});
