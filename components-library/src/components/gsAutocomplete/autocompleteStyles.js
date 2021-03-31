import styled from 'styled-components';

const AutocompleteDiv = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  row-gap: 5px;
  position: relative;
`;

const AutocompleteField = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  cursor: pointer;
  transition: border-color 0.4s;
`;

export { AutocompleteDiv, AutocompleteField };
