import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from "next/image";
import Spinner from "@/components/Spinner"; 
import { useRouter } from "next/router"; 

const StyledHeader = styled.header`
  background-color: #dcdcdc;
  z-index: 4; 
  position: relative;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  position: relative;
  z-index: 5;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 25px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  padding: 70px 20px 20px;
  background-color: #222;
  z-index: 4; 
  @media screen and (min-width: 768px) {
    background-color: #dcdcdc;
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 0;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 0;
    color: black;
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
  z-index: 5;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header({ setMenuOpen }) {
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

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Auto Dily</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink onClick={() => handleNavigation('/')}>Home</NavLink>
            <NavLink onClick={() => handleNavigation('/products')}>Všechny produkty</NavLink>
            <NavLink onClick={() => handleNavigation('/account')}>Účet</NavLink>
            <NavLink onClick={() => handleNavigation('/cart')}>Košík ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={toggleMenu}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
        {isLoading && <Spinner />} 
      </Center>
    </StyledHeader>
  );
}
