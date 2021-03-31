import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GSSelectInput from './gsSelectInput';

test('Add placeholder', () => {
  const { getByTestId } = render(
    <GSSelectInput placeholder='insert a placeholder' />,
  );

  expect(getByTestId('gsSelectInputValues').textContent).toBe(
    'insert a placeholder',
  );
});

test('Show options list when input is clicked', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];
  const { container, getByText } = render(
    <GSSelectInput options={options} onChangeValue={() => {}} />,
  );

  fireEvent.click(container.querySelector('#gsSelectInputField'));

  expect(getByText('Argentina')).toBeVisible();
});

test('Show checkbox if multiselect feature is enabled', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const { container, getByTestId } = render(
    <GSSelectInput isMultiSelect options={options} onChangeValue={() => {}} />,
  );

  fireEvent.click(container.querySelector('#gsSelectInputField'));

  expect(getByTestId('checkbox-Argentina')).toBeVisible();
});

test('Select one option if select input is single select', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const handleOptionSelection = jest.fn();

  const { container, getByText } = render(
    <GSSelectInput options={options} onChangeValue={handleOptionSelection} />,
  );

  fireEvent.click(container.querySelector('#gsSelectInputField'));

  fireEvent.click(getByText('Argentina'));

  expect(handleOptionSelection).toHaveBeenCalledWith(['Argentina']);

  fireEvent.click(getByText('Brasil'));

  expect(handleOptionSelection).toHaveBeenCalledWith(['Brasil']);
});

test('Select more than one option if select input is multi select', () => {
  const options = ['Argentina', 'Brasil', 'Chile', 'China', 'Uruguay'];

  const handleValuesSelected = jest.fn();

  const { container, getByText } = render(
    <GSSelectInput
      options={options}
      isMultiSelect
      onChangeValue={handleValuesSelected}
    />,
  );

  fireEvent.click(container.querySelector('#gsSelectInputField'));

  fireEvent.click(getByText('Argentina'));

  expect(handleValuesSelected).toHaveBeenCalledTimes(1);

  expect(handleValuesSelected).toHaveBeenCalledWith(['Argentina']);

  fireEvent.click(getByText('Brasil'));

  expect(handleValuesSelected).toHaveBeenCalledWith(['Argentina', 'Brasil']);

  expect(handleValuesSelected).toHaveBeenCalledTimes(2);
});
