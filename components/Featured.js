import Center from "@/components/Center";
import styled, { keyframes } from "styled-components";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

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
  overflow: hidden; /* Dodane, aby ukryć obrazy poza ekranem */
  position: relative;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const moveImages = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${moveImages} 15s linear infinite; /* Animacja */
  width: 200%; /* Podwajamy szerokość kontenera na obrazy, aby przesuwać oba obrazy */
`;

const ImgWrapper = styled.div`
  width: 50%;
  padding: 0 10px; /* Opcjonalne, dla odstępu między obrazami */
  img {
    max-width: 100%;
    max-height: 320px; /* Powiększone */
    display: block;
    margin: 0 auto;
  }
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
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
            <ImgWrapper>
              <img
                src="https://auto-dily.s3.amazonaws.com/8c774139-f3ba-4ee6-89a8-b9d1f42ef8dd_mb1.jpg"
                alt="auto-dily-Feature"
              />
            </ImgWrapper>
            <ImgWrapper>
              <img
                src="https://auto-dily.s3.amazonaws.com/e1f25212-7b77-47b3-9a1b-eb0e18f7367e_mb2.jpg"
                alt="auto-dily-Feature"
              />
            </ImgWrapper>
            <ImgWrapper>
              <img
                src="https://auto-dily.s3.amazonaws.com/3efc9b5b-d6fa-466a-b333-e2d869eb07cc_1j.webp"
                alt="auto-dily-Feature"
              />
            </ImgWrapper>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
