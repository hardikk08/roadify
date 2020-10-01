import styled from '@emotion/styled/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const TextInput = styled.input`
  padding: 15px;
  margin: 5px;
  outline: none;
  border-bottom: 2px solid white;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  background-color: black;
  color: white;
  &:focus {
    border-bottom: 2px solid #90C978;
  }
`;

export const Go = styled.div`
  cursor: pointer;
  margin-top: 30px;
  width: 0;
  align-self: center;
  color: white;
  &:hover {
    color: #90C978;
  }
`;