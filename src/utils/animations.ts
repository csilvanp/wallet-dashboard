import { keyframes } from 'styled-components';

export const animateRightToLeft = keyframes`
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const animateLeftToRigth = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const animateDownToUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;