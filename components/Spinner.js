
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerStyled = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${spin} 1s linear infinite;
  // margin: 20px auto;
`;

export default function Spinner() {
  return <SpinnerStyled />;
}
