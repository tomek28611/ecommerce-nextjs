import Center from "@/components/Center";
import styled, { keyframes, css } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import Spinner from "@/components/Spinner"; 

const Bg = styled.div`
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

const HideOnMobileButton = styled.button`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const StyledHeading = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export default function Featured({ product, menuOpen, heroBanner }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); 

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  const handleButtonClick = () => {
    setIsLoading(true); 
    router.push('/products').then(() => {
      setIsLoading(false); 
    });
  };

  return (
    <div className="hero-banner-container">
      <div>
        <h1 className="beats-solo">Kvalitní auto díly pro Mercedes</h1>
        <h3>Rychlé dodání a skvělé ceny</h3>
      
        <StyledHeading>Podpora</StyledHeading>
        <img src="/engine.gif" alt="auto-dily-motor" className="hero-banner-image" />

        <div>
          {isLoading ? (
            <Spinner /> 
          ) : (
            <HideOnMobileButton type="button" onClick={handleButtonClick}>
              Všechny produkty
            </HideOnMobileButton>
          )}

          <div className="desc">
            <h5>Zveme vás!</h5>
            <p onClick={handleButtonClick}>Podívejte se na nabídku</p>
          </div>
        </div>
      </div>
    </div>
  );
}
