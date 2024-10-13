import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Spinner from "@/components/Spinner"; 
import { useRouter } from "next/router"; 

const StyledHeader = styled.header`
  background-color: #dcdcdc;

  position: relative;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 25px;
  }
`;

const NavLink = styled.a`
  background-color: #222;
  color: white;
  text-align: center;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  @media screen and (min-width: 768px) {
    color: black;
    background-color: #f0f0f0;
    padding: 15px 30px;

    &:hover {
      background-color: #ccc;
    }
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Buttons({ setMenuOpen }) {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const toggleMenu = () => {
    setMobileNavActive(prev => !prev);
    setMenuOpen(prev => !prev); 
  };

  const handleNavigation = (url) => {
    setIsLoading(true); 
    router.push(url).then(() => setIsLoading(false)); 
  };

  const handleScrollToNewProducts = () => {
    const newProductsSection = document.getElementById("new-products");
    if (newProductsSection) {
      newProductsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <StyledNav>
            <NavLink onClick={() => handleNavigation('/')}>Motory</NavLink>
            <NavLink onClick={() => handleNavigation('/')}>Pozastavení</NavLink>
            <NavLink onClick={() => handleNavigation('/')}>Karoserie</NavLink>
            <NavLink onClick={() => handleNavigation('/')}>Elektrika</NavLink>
            <NavLink onClick={() => handleNavigation('/')}>Ráfky</NavLink>
            <NavLink onClick={() => handleNavigation('/')}>Interiér</NavLink>
            <NavLink onClick={handleScrollToNewProducts}>Najít podle modelu</NavLink>

          </StyledNav>
         
        </Wrapper>
        {isLoading && <Spinner />} 
      </Center>
    </StyledHeader>
  );
}
