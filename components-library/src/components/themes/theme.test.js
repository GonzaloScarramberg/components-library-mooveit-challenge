import React from 'react';
import { render } from '@testing-library/react';
import GSButton from '../gsButton/gsbutton';
import Theme from './theme';
import '@testing-library/jest-dom/extend-expect';
import GSInputNumber from '../gsInputNumber/gsInputNumber';

test('check that new theme overrides only chosen values', () => {
  const { container, rerender } = render(<GSButton color='Primary' />);

  const button = container.querySelector('button');

  expect(button).toHaveStyle('background-color:#0C0A3E');

  const newTheme = {
    palette: { primary: { main: '#4F72EC' } },
    typography: {
      fontFamily: ['Roboto'].join(','),
    },
  };

  rerender(
    <div>
      <Theme theme={newTheme}>
        <GSButton color='Primary' />
      </Theme>
    </div>,
  );

  const newThemeButton = container.querySelector('button');

  expect(newThemeButton).toHaveStyle('background-color:#4F72EC');
});

test('theme does not affect component if component is not wrapped inside of it', () => {
  const newTheme = {
    typography: {
      fontFamily: ['Roboto'].join(','),
    },
  };

  const { container } = render(
    <div>
      <Theme theme={newTheme}>
        <GSButton color='Primary' />
      </Theme>
      <GSInputNumber />
    </div>,
  );

  const button = container.querySelector('button');
  const input = container.querySelector('input');

  expect(button).toHaveStyle('font-family: Roboto');
  expect(input).not.toHaveStyle('font-family: Roboto');
});
