import styled from "styled-components";

const StyledDiv = styled.div`
  
  margin: 0 auto;
  padding: 0 20px;
  margin-left: 20px;

    @media (max-width: 768px) {
    max-width: 100%; 
    padding: 0 10px; 
    align-items: center;
    margin-left: 0;
   
 
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}