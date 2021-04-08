/* eslint-disable react/style-prop-object */
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

test('Check default button colors', () => {
  const { container, rerender } = render(<GSButton color='Primary' />);

  const button = container.querySelector('button');

  expect(button).toHaveStyle('background-color:#2196f3');

  rerender(<GSButton color='Secondary' />);

  expect(button).toHaveStyle('background-color:#797c7e');

  rerender(<GSButton color='Info' />);

  expect(button).toHaveStyle('background-color:#0288d1');

  rerender(<GSButton color='Warning' />);

  expect(button).toHaveStyle('background-color:#d1a102');

  rerender(<GSButton color='Danger' />);

  expect(button).toHaveStyle('background-color:#dd0101');
});

test('Check button style', () => {
  const { container, rerender } = render(<GSButton variant='Rounded' />);

  const button = container.querySelector('button');

  expect(button).toHaveStyle(`border-radius: 2rem;`);

  rerender(<GSButton variant='Raised' />);

  expect(button).toHaveStyle(
    `box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),0 1px 5px 0 rgb(0 0 0 / 12%);`,
  );

  rerender(<GSButton variant='Text' color='Primary' />);

  expect(button).toHaveStyle('background: none');
  expect(button).toHaveStyle('color:#2196f3');
});

test('Check button size', () => {
  const { container, rerender } = render(<GSButton size='Small' />);

  const button = container.querySelector('button');

  expect(button).toHaveStyle(`font-size: 0.75rem`);

  rerender(<GSButton size='Medium' />);

  expect(button).toHaveStyle(`font-size: 1rem`);

  rerender(<GSButton size='Large' />);

  expect(button).toHaveStyle(`font-size: 1.25rem`);
});
