import styled, { css } from 'styled-components';

const primaryColors = (props) =>
  `${
    (props.color === 'Primary' && props.theme.palette.primary.main) ||
    (props.color === 'Secondary' && props.theme.palette.secondary.main) ||
    (props.color === 'Info' && props.theme.palette.info.main) ||
    (props.color === 'Warning' && props.theme.palette.warning.main) ||
    (props.color === 'Danger' && props.theme.palette.danger.main)
  }`;

const secondaryColors = (props) =>
  `${
    (props.color === 'Primary' && props.theme.palette.primary.dark) ||
    (props.color === 'Secondary' && props.theme.palette.secondary.dark) ||
    (props.color === 'Info' && props.theme.palette.info.dark) ||
    (props.color === 'Warning' && props.theme.palette.warning.dark) ||
    (props.color === 'Danger' && props.theme.palette.danger.dark)
  }`;

const Button = styled.button`
  font-family: ${(props) => props.theme.typography.fontFamily};
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;
  font-size: ${(props) =>
    (props.size === 'Small' && css`0.75rem`) ||
    (props.size === 'Medium' && css`1rem`) ||
    (props.size === 'Large' && css`1.25rem`)};
  background-color: ${(props) => primaryColors(props)};
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => secondaryColors(props)};
    color: ${(props) => props.buttonStyle === 'Text' && css`white`};
  }

  ${(props) =>
    (props.buttonStyle === 'Raised' &&
      css`
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
          0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
      `) ||
    (props.buttonStyle === 'Rounded' &&
      css`
        border-radius: 2rem;
      `) ||
    (props.buttonStyle === 'Text' &&
      css`
        background: none;
        color: ${primaryColors(props)};
        border: ${primaryColors(props)} 1px solid;
      `)}
`;

export default Button;
