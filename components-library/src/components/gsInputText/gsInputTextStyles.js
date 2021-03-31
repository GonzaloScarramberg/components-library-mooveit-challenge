import styled, { css } from 'styled-components';

const InputTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  width: 100%;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const InputTextField = styled.input`
  width: 100%;
  &:focus {
    border: ${(props) =>
      props.inputStyle === 'Outlined' &&
      css`
        ${props.theme.palette.primary.main} 1.5px solid
      `};
    border-bottom: ${(props) =>
      (props.inputStyle === 'Bottom-Lined' || props.inputStyle === 'Filled') &&
      css`
        ${props.theme.palette.primary.main} 1.5px solid
      `};
  }

  ${(props) =>
    (props.inputStyle === 'Bottom-Lined' || props.inputStyle === 'Filled') &&
    css`
      border: none;
      border-bottom: 1px solid gray;
      border-radius: 0;
    `}

  ${(props) =>
    props.inputStyle === 'Filled' &&
    css`
      background: #d7d3d3;
    `}
`;

const InputTextLabel = styled.label`
  position: absolute;
  left: 0.5rem;
  top: 0.3rem;
  z-index: 1;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  opacity: ${(props) => (props.isFocused ? 1 : 0.5)};
  font-weight: lighter;
  &:focus {
    opacity: 1;
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.palette.primary.main};
      transform: ${props.inputStyle === 'Bottom-Lined' ||
      props.inputStyle === 'Filled'
        ? css`translateY(-145%)`
        : css`translateY(-90%)`};
      font-size: ${props.inputStyle === 'Bottom-Lined' ||
      props.inputStyle === 'Filled'
        ? css`0.75rem`
        : css`0.7rem`};
    `}

  ${(props) =>
    props.isFocused &&
    props.inputStyle === 'Outlined' &&
    css`
      background: #fafafa;
      padding: 0 0.2rem;
    `};
`;

const InputTextResetButton = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.3rem;
  cursor: pointer;
`;

export { InputTextDiv, InputTextLabel, InputTextResetButton, InputTextField };
