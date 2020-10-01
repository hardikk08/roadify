import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/core';


const gradientAnimation = keyframes`
  0%   { background-position: 0% 30%, 0 0;}
	50%  { background-position: 100% 70%, 0 0;}
	100% { background-position: 0% 30%, 0 0;}
`;


export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
	background: linear-gradient(45deg, rgba(255,175,189,.7), rgba(100,216,243,.7), rgba(234,236,198,.7), rgba(245,146,176,.7), rgba(52,219,216,.7)) 0 0 / 1000% no-repeat, url(https://images.unsplash.com/photo-1498857127156-d2943a73f456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) 0 0 / cover no-repeat;
  animation-name: ${gradientAnimation};
  animation-duration: 40s;
`;

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 80px;
`;

export const HeaderOne = styled.h1`
  font-size: 85px;
  align-self: flex-start;
`;

export const HeaderTwo = styled.h1`
  font-size: 85px;
  align-self: flex-end;
  margin-top: -20px;
`;

export const HeroSubHeader = styled.div`
  font-size: 25px;
  margin: 10px;
`;