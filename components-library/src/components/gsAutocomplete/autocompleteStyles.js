import styled from 'styled-components';

const AutocompleteDiv = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const AutocompleteField = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  transition: border-color 0.4s;
`;

const AutocompleteInput = styled.input`
  width: 100%;
  $:focus {
    border-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export { AutocompleteDiv, AutocompleteField, AutocompleteInput };
