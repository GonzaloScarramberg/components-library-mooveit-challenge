import styled from 'styled-components';

const SelectInputDiv = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const SelectInputField = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  border-radius: 4px;
  border: 1.3px solid black;
  cursor: pointer;
  transition: border-color 0.4s;
  &:hover {
    border-color: ${(props) => props.theme.palette.primary.main};
  }
`;

const SelectInputValues = styled.div`
  flex: 0 0 85%;
  font-weight: lighter;
  display: flex;
  column-gap: 3px;
  flex-flow: wrap;
`;

const SelectInputIcon = styled.div`
  display: flex;
  flex: 0 0 15%;
  justify-content: center;
  align-items: center;
`;

const StyledSelectInputItem = styled.div`
  padding: 0.2rem 0.5rem;
  background-color: rgb(12, 10, 62);
  border-radius: 4px;
  font-size: 1rem;
  color: white;
`;

export {
  SelectInputDiv,
  SelectInputField,
  SelectInputValues,
  SelectInputIcon,
  StyledSelectInputItem,
};
