import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GSInputNumber from './gsInputNumber';
import '@testing-library/jest-dom/extend-expect';

test('Disable input when disable property is true', () => {
  const { container } = render(<GSInputNumber disabled />);

  expect(container.querySelector('input')).toBeDisabled();
});

test('Add placeholder to input', () => {
  const { container } = render(
    <GSInputNumber placeholder='insert a placeholder' />,
  );

  expect(container.querySelector('input').placeholder).toBe(
    'insert a placeholder',
  );
});

test('Check correct format - commas', () => {
  const handleInputValue = jest.fn();

  const { container } = render(
    <GSInputNumber format='grouped-commas' onChangeValue={handleInputValue} />,
  );

  const input = container.querySelector('input');

  fireEvent.change(input, {
    target: { value: '202314' },
  });

  expect(handleInputValue).toHaveBeenCalledWith('202,314');

  fireEvent.change(input, {
    target: { value: '2023143' },
  });

  expect(handleInputValue).toHaveBeenCalledWith('2,023,143');
});

test('Check correct format - dots', () => {
  const handleInputValue = jest.fn();

  const { container } = render(
    <GSInputNumber format='grouped-dots' onChangeValue={handleInputValue} />,
  );

  const input = container.querySelector('input');

  fireEvent.change(input, {
    target: { value: '202314' },
  });

  expect(handleInputValue).toHaveBeenCalledWith('202.314');

  fireEvent.change(input, {
    target: { value: '2023143' },
  });

  expect(handleInputValue).toHaveBeenCalledWith('2.023.143');
});

test('Check correct format - no format', () => {
  const handleInputValue = jest.fn();

  const { container } = render(
    <GSInputNumber format='no-grouped' onChangeValue={handleInputValue} />,
  );

  const input = container.querySelector('input');

  fireEvent.change(input, {
    target: { value: '202314' },
  });

  expect(handleInputValue).toHaveBeenCalledWith('202314');

  fireEvent.change(input, {
    target: { value: '2023143' },
  });

  expect(handleInputValue).toHaveBeenCalledWith('2023143');
});

test('Check buttons visibility when buttons property has value', () => {
  const { getByText } = render(<GSInputNumber buttons='2' />);

  expect(getByText('+')).toBeVisible();
  expect(getByText('-')).toBeVisible();
});

test('Check input value after increase button is clicked', () => {
  const handleInputValue = jest.fn();

  const { getByText, rerender } = render(
    <GSInputNumber buttons='2' value='0' onChangeValue={handleInputValue} />,
  );

  const sumButton = getByText('+');

  fireEvent.click(sumButton);

  expect(handleInputValue).toHaveBeenCalledWith('2');

  rerender(
    <GSInputNumber buttons='4' value='4' onChangeValue={handleInputValue} />,
  );

  fireEvent.click(sumButton);

  expect(handleInputValue).toHaveBeenCalledWith('8');
});

test('Check input value after decrease button is clicked', () => {
  const handleInputValue = jest.fn();

  const { getByText, rerender } = render(
    <GSInputNumber buttons='2' value='4' onChangeValue={handleInputValue} />,
  );

  const minusButton = getByText('-');

  fireEvent.click(minusButton);

  expect(handleInputValue).toHaveBeenCalledWith('2');

  rerender(
    <GSInputNumber buttons='2' value='8' onChangeValue={handleInputValue} />,
  );

  fireEvent.click(minusButton);

  expect(handleInputValue).toHaveBeenCalledWith('6');
});
