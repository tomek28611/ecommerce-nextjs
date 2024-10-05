import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 0 20px;

    @media (max-width: 768px) {
    max-width: 100%; 
    padding: 0 10px; 
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}