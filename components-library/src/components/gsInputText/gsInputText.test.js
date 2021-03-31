import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GSInputText from './gsInputText';
import '@testing-library/jest-dom/extend-expect';

test('Disable input when disable property is true', () => {
  const { container } = render(<GSInputText disabled />);

  expect(container.querySelector('input')).toBeDisabled();
});

test('Add placeholder when input is focused', () => {
  const { container } = render(
    <GSInputText placeholder='insert a placeholder' />,
  );

  fireEvent.focus(container.querySelector('#gsInputText'));

  expect(container.querySelector('input').placeholder).toBe(
    'insert a placeholder',
  );
});

test('Add max length for input value', () => {
  const { container } = render(<GSInputText maxLength='100' />);

  expect(container.querySelector('input').maxLength).toBe(100);
});

test('Add field name', () => {
  const { container } = render(<GSInputText fieldName='Test field' />);

  expect(container.querySelector('label').textContent).toBe('Test field');
});

test('Input has the value that is set in the value property', () => {
  const { container } = render(
    <GSInputText hasResetButton value='Generic Value' />,
  );

  expect(container.querySelector('input').value).toBe('Generic Value');
});

test('Show reset button when input has value', () => {
  const { getByText } = render(
    <GSInputText hasResetButton value='Generic Value' />,
  );

  const resetButton = getByText('X');

  expect(resetButton).toBeVisible();
});

test('Hide reset button when feature is not selected', () => {
  const { queryByText } = render(<GSInputText value='generic text' />);

  const resetButton = queryByText('X');

  expect(resetButton).toBeNull();
});

test('Empty input value when reset button is clicked', () => {
  const handleInputValue = jest.fn();

  const { getByText } = render(
    <GSInputText
      hasResetButton
      value='generic text'
      onChangeValue={handleInputValue}
    />,
  );

  const resetButton = getByText('X');

  fireEvent.click(resetButton);

  expect(handleInputValue).toHaveBeenCalledWith('');
});
