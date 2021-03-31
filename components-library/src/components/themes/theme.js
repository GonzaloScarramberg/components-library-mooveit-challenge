import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import DefaultTheme from './defaultTheme';

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        main: PropTypes.string,
        dark: PropTypes.string,
      }),
      secondary: PropTypes.shape({
        main: PropTypes.string,
        dark: PropTypes.string,
      }),
      info: PropTypes.shape({
        main: PropTypes.string,
        dark: PropTypes.string,
      }),
      warning: PropTypes.shape({
        main: PropTypes.string,
        dark: PropTypes.string,
      }),
      danger: PropTypes.shape({
        main: PropTypes.string,
        dark: PropTypes.string,
      }),
    }),
    typography: PropTypes.shape({
      fontFamily: PropTypes.string,
    }),
  }),
};

Theme.defaultProps = {
  theme: DefaultTheme,
};

export default Theme;
