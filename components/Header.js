import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from "next/image";


const StyledHeader = styled.header`
  background-color: #222;
  z-index: 4; 
  position: relative;
`;

const Logo = styled(Link)`
  color: #fff;
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
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  z-index: 4; 
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
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

  const toggleMenu = () => {
    setMobileNavActive(prev => !prev);
    setMenuOpen(prev => !prev); 
  };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          {/* <Logo href={'/'}>Auto Dily</Logo> */}
          <img src="https://auto-dily.s3.amazonaws.com/9bdbdb29-cffb-4481-8a83-8cc472143fa3_audo-dily-logo.png" width={120}/>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>Všechny produkty</NavLink>
            <NavLink href={'/account'}>Účet</NavLink>
            <NavLink href={'/cart'}>Košík ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={toggleMenu}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
