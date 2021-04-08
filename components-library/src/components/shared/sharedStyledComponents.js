import styled, { css } from 'styled-components';

const ItemsList = styled.div`
  transition: all 0.3s ease-in-out;
  visibility: ${(props) => (props.visible ? css`visible` : css`hidden`)};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  max-height: ${(props) => props.maxHeight}px;
  display: flex;
  z-index: 1;
  flex-direction: column;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  position: absolute;
  top: 49px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 0.5rem 0;
  overflow: auto;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const Item = styled.div`
  cursor: pointer;
  width: 95%;
  padding: 0.5rem;
  display: flex;
  row-gap: 2px;
  font-size: 1rem;
  color: #495057;
  font-weight: lighter;
`;

const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

export { ItemsList, Item, Arrow };
