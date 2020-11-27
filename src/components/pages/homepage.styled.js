import styled, { keyframes } from 'styled-components';

const lineAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fillLogo = keyframes`
  from {
    fill: white;
  }
  to {
    fill: black;
  }
`;

export const SvgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    animation: ${fillLogo} 0.5s ease forwards 3s;
  }

  #path-1 {
    stroke-dasharray: 544.7811889648438;
    stroke-dashoffset: 544.7811889648438;
    animation: ${lineAnim} 2s ease forwards;
  }

  #path-2 {
    stroke-dasharray: 393.38055419921875;
    stroke-dashoffset: 393.38055419921875;
    animation: ${lineAnim} 2s ease forwards 0.3s;
  }

  #path-3 {
    stroke-dasharray: 395.8287658691406;
    stroke-dashoffset: 395.8287658691406;
    animation: ${lineAnim} 2s ease forwards 0.6s;
  }
  #path-4 {
    stroke-dasharray: 569.0725708007812;
    stroke-dashoffset: 569.0725708007812;
    animation: ${lineAnim} 2s ease forwards 0.9s;
  }
  #path-5 {
    stroke-dasharray: 232.69810485839844;
    stroke-dashoffset: 232.69810485839844;
    animation: ${lineAnim} 2s ease forwards 1.2s;
  }
  #path-6 {
    stroke-dasharray: 404.77593994140625;
    stroke-dashoffset: 404.77593994140625;
    animation: ${lineAnim} 2s ease forwards 1.5s;
  }
  #path-7 {
    stroke-dasharray: 321.5423583984375;
    stroke-dashoffset: 321.5423583984375;
    animation: ${lineAnim} 2s ease forwards 1.8s;
  }
`;
