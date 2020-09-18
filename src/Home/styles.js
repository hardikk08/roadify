import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/core';

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${animate} infinite 20s linear;
  }
`;