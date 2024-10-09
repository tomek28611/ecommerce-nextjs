import Center from "@/components/Center";
import styled, { keyframes, css } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import routera
import Spinner from "@/components/Spinner"; // Import komponentu Spinner

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 20px 0;
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
  overflow: hidden;
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
  animation: ${props => props.menuOpen ? "none" : css`${moveImages} 8s linear infinite`}; 
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

export default function Featured({ product, menuOpen, heroBanner }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // Stan dla spinnera

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  const handleButtonClick = () => {
    setIsLoading(true); // Pokazanie spinnera
    router.push('/products').then(() => {
      setIsLoading(false); // Ukrycie spinnera po nawigacji
    });
  };

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Kvalitní náhradní díly pro Mercedes</p>
        <h3>Rychlé dodání a skvělé ceny</h3>
        <h1>Podpora</h1>
        <img src="/engine.gif" alt="hedphones" className="hero-banner-image" />

        <div>
          {isLoading ? (
            <Spinner /> // Pokazanie spinnera podczas ładowania
          ) : (
            <button type="button" className="" onClick={handleButtonClick}>
              Všechny produkty
            </button>
          )}

          <div className="desc">
            <h5>Text 4</h5>
            <p>Text 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
