import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GSInputNumber from './gsInputNumber';

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
