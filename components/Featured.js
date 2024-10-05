import Center from "@/components/Center";
import styled, { keyframes, css } from "styled-components";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  overflow: hidden; /* Ukrycie obrazów poza ekranem */
  position: relative;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const moveImages = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200%;
  animation: ${props => props.menuOpen ? "none" : css`${moveImages} 8s linear infinite`}; /* Animacja tylko, gdy menu jest zamknięte */
`;

const ImgWrapper = styled.div`
  width: 50%;
  padding: 0 10px;
  img {
    max-width: 100%;
    max-height: 320px;
    display: block;
    margin: 0 auto;
  }
`;

export default function Featured({ product, menuOpen }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column menuOpen={menuOpen}>
            <ImgWrapper>
              <img
                src="https://auto-dily.s3.amazonaws.com/dfdeb168-c6a0-43a0-b5ca-1490255fcaca_merc-parts.png"
                alt="auto-dily-Feature"
              />
            </ImgWrapper>
            <ImgWrapper>
              <img
                src="https://auto-dily.s3.amazonaws.com/326a5212-f9a2-4d8f-9322-21ba475e7a6a_247 gla.webp"
                alt="auto-dily-Feature"
              />
            </ImgWrapper>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}



//   return (
//     <Bg>
//       <Center>
//         <ColumnsWrapper>
//           <Column>
//             <ImgWrapper>
//               <img
//                 src="https://auto-dily.s3.amazonaws.com/dfdeb168-c6a0-43a0-b5ca-1490255fcaca_merc-parts.png"
//                 alt="auto-dily-Feature"
//               />
//             </ImgWrapper>
//             <ImgWrapper>
//               <img
//                 src="https://auto-dily.s3.amazonaws.com/326a5212-f9a2-4d8f-9322-21ba475e7a6a_247 gla.webp"
//                 alt="auto-dily-Feature"
//               />
//             </ImgWrapper>
//             <ImgWrapper>
//               <img
//                 src="https://auto-dily.s3.amazonaws.com/8c774139-f3ba-4ee6-89a8-b9d1f42ef8dd_mb1.jpg"
//                 alt="auto-dily-Feature"
//               />
//             </ImgWrapper>
//             <ImgWrapper>
//               <img
//                 src="https://auto-dily.s3.amazonaws.com/e1f25212-7b77-47b3-9a1b-eb0e18f7367e_mb2.jpg"
//                 alt="auto-dily-Feature"
//               />
//             </ImgWrapper>
//             <ImgWrapper>
//               <img
//                 src="https://auto-dily.s3.amazonaws.com/3efc9b5b-d6fa-466a-b333-e2d869eb07cc_1j.webp"
//                 alt="auto-dily-Feature"
//               />
//             </ImgWrapper>
//           </Column>
//         </ColumnsWrapper>
//       </Center>
//     </Bg>
//   );
// }
