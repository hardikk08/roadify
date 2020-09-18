import React from 'react';
import {
  Link
} from "react-router-dom";
import { Header, Content, Title, NavLinks, Spacer } from './styles';

const Nav: React.FunctionComponent = () => (
  <div>
    <Header>
      <Content>
        <Title>
          Navigation Bar
        </Title>
        <NavLinks>
          <Link to="/" style={{margin: `${5}px`}}>Home</Link>
          <Link to="/about" style={{margin: `${5}px`}}>About</Link>
        </NavLinks>
      </Content>
    </Header>
    <Spacer />
  </div>
);

export default Nav;