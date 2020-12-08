import styled, { keyframes } from 'styled-components';

const lineAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fillLogo = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: #84A59D;
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  #logo {
    animation: ${fillLogo} 0.5s ease forwards 3s;
  }

  #path-1 {
    stroke-dasharray: 544.7811889648438;
    stroke-dashoffset: 544.7811889648438;
    animation: ${lineAnim} 2s ease forwards;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  #path-2 {
    stroke-dasharray: 393.38055419921875;
    stroke-dashoffset: 393.38055419921875;
    animation: ${lineAnim} 2s ease forwards 0.3s;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  #path-3 {
    stroke-dasharray: 395.8287658691406;
    stroke-dashoffset: 395.8287658691406;
    animation: ${lineAnim} 2s ease forwards 0.6s;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  #path-4 {
    stroke-dasharray: 569.0725708007812;
    stroke-dashoffset: 569.0725708007812;
    animation: ${lineAnim} 2s ease forwards 0.9s;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  #path-5 {
    stroke-dasharray: 232.69810485839844;
    stroke-dashoffset: 232.69810485839844;
    animation: ${lineAnim} 2s ease forwards 1.2s;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  #path-6 {
    stroke-dasharray: 404.77593994140625;
    stroke-dashoffset: 404.77593994140625;
    animation: ${lineAnim} 2s ease forwards 1.5s;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  #path-7 {
    stroke-dasharray: 321.5423583984375;
    stroke-dashoffset: 321.5423583984375;
    animation: ${lineAnim} 2s ease forwards 1.8s;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledSubmit = styled.input`
  width: 100%;
  color: white;
  cursor: pointer;
  background: #84a59d;
  border: none;
  padding: 12px 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 24px;
`;

export const StyledForm = styled.form`
  width: 50%;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const HomepageWrapper = styled.div`
  margin: 0 16px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
`;
