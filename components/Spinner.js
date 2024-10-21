
import styled, { keyframes } from "styled-components";


const SpinnerContainer = styled.div`
  width: 160px; /* Szerokość kontenera */
  height: 160px; /* Wysokość kontenera */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GifImage = styled.img`
  width: 100%; /* Szerokość GIF-a */
  height: 100%; /* Wysokość GIF-a */
  object-fit: contain; /* Dostosowanie wielkości GIF-a do kontenera */
`;

export default function Spinner() {
  return (
    <SpinnerContainer>
      <GifImage src="/wheel1.gif" alt="Loading..." />
    </SpinnerContainer>
  );
}


// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const SpinnerStyled = styled.div`
//   border-radius: 50%;
//   width: 160px;
//   height: 160px; /* Wysokość spinnera */
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   animation: ${spin} 1s linear infinite;
//   overflow: hidden; /* Ukrywa nadmiarowe elementy */
// `;

// const Image = styled.img`
//   width: 100%; /* Ustawia obrazek na 100% szerokości spinnera */
//   height: 100%; /* Ustawia obrazek na 100% wysokości spinnera */
//   object-fit: contain; /* Utrzymuje proporcje obrazka */
// `;

// export default function Spinner() {
//   return (
//     <SpinnerStyled>
//       <Image src="/wheel.jpg" alt="Loading..." />
//     </SpinnerStyled>
//   );
// }
