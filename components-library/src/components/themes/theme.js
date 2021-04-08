import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import DefaultTheme from './defaultTheme';

const Theme = ({ theme, children }) => {
  const themeOverride = {
    ...DefaultTheme,
    palette: {
      ...DefaultTheme.palette,
      primary: {
        ...DefaultTheme.palette.primary,
        main:
          theme.palette?.primary?.main !== undefined
            ? theme.palette.primary.main
            : DefaultTheme.palette.primary.main,
        dark:
          theme.palette?.primary?.dark !== undefined
            ? theme.palette.primary.dark
            : DefaultTheme.palette.primary.dark,
      },
      secondary: {
        ...DefaultTheme.palette.secondary,
        main:
          theme.palette?.secondary?.main !== undefined
            ? theme.palette.secondary.main
            : DefaultTheme.palette.secondary.main,
        dark:
          theme.palette?.secondary?.dark !== undefined
            ? theme.palette.secondary.dark
            : DefaultTheme.palette.secondary.dark,
      },
      info: {
        ...DefaultTheme.palette.info,
        main:
          theme.palette?.info?.main !== undefined
            ? theme.palette.info.main
            : DefaultTheme.palette.info.main,
        dark:
          theme.palette?.info?.dark !== undefined
            ? theme.palette.info.dark
            : DefaultTheme.palette.info.dark,
      },
      warning: {
        ...DefaultTheme.palette.warning,
        main:
          theme.palette?.warning?.main !== undefined
            ? theme.palette.warning.main
            : DefaultTheme.palette.warning.main,
        dark:
          theme.palette?.warning?.dark !== undefined
            ? theme.palette.warning.dark
            : DefaultTheme.palette.warning.dark,
      },
      danger: {
        ...DefaultTheme.palette.danger,
        main:
          theme.palette?.danger?.main !== undefined
            ? theme.palette.danger.main
            : DefaultTheme.palette.danger.main,
        dark:
          theme.palette?.danger?.dark !== undefined
            ? theme.palette.danger.dark
            : DefaultTheme.palette.danger.dark,
      },
    },
    typography: {
      ...DefaultTheme.typography,
      ...theme.typography,
    },
  };

  return <ThemeProvider theme={themeOverride}>{children}</ThemeProvider>;
};

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
