import styled from '@emotion/styled/macro';

const HEIGHT = 90;

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
  font-size: 30px;
`;

export const NavLinks = styled.div`
  margin: auto 0;
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #90C978;
  }
`;

export const ProfilePicture = styled.img`
  width: 40px;
  heiht: 40px;
  margin: auto 15px auto 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  margin-top: 10px;
  background-color: #282828;
  color: #b3b3b3;
  width: 100%;
  text-align: center;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  :hover {
    color: #90C978;
  }
`;
