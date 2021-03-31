import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GSButton from './gsbutton';
import '@testing-library/jest-dom/extend-expect';

test('Disable button when disable property is true', () => {
  const { container } = render(<GSButton disabled />);

  expect(container.querySelector('button')).toBeDisabled();
});

test('Add placeholder to button', () => {
  const { container } = render(<GSButton placeholder='Default button' />);

  expect(container.querySelector('button').textContent).toBe('Default button');
});

test('Check onClick method', () => {
  const handleClick = jest.fn();

  const { container } = render(<GSButton onClick={handleClick} />);

  const button = container.querySelector('button');

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
