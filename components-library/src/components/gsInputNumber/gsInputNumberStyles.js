import styled, { css } from 'styled-components';

const InputNumberDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const InputNumberField = styled.input`
  width: 100%;
  flex: 2 1 90%;
  opacity: ${(props) => props.disabled && css`0.5`};
`;

const InputNumberButtonsDiv = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 20%;
  position: absolute;
  right: 1px;
`;

const InputNumberButton = styled.button`
  height: 50%;
  color: #ffffff;
  background: ${(props) => props.theme.palette.primary.main};
  outline: none;
  border: none;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.palette.primary.dark};
  }
  border-radius: 2px;
`;

export {
  InputNumberDiv,
  InputNumberButtonsDiv,
  InputNumberButton,
  InputNumberField,
};
