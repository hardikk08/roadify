import styled from '@emotion/styled/macro';

const HEIGHT = 49;

export const Header = styled.div`
  background-color: black;
  height: ${HEIGHT}px;
  width: 100%;
  box-shadow: 0 1px 0 0 black;
  position: fixed;
  top: 0;
  color: white;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  margin: auto 0;
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;