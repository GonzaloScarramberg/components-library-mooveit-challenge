import styled from 'styled-components';

const ItemsList = styled.div`
  transition: all 0.5s ease-in-out;
  visibility: visible;
  opacity: 1;
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
  margin-left: 0.5rem;
  overflow: auto;
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
  $:hover {
    background: #c2c1c1;
  }
`;

export { ItemsList, Item };
