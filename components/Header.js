import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Spinner from "@/components/Spinner"; 
import { useRouter } from "next/router"; 

const StyledHeader = styled.header`
  background-color: rgba(220, 220, 220, ${(props) => props.opacity});
  z-index: 10;
  position: fixed;
  top: 12px;
  left: 12px; 
  right: 12px; 
  margin-bottom: 12px; 
  padding: 14px; 
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
  box-sizing: border-box;
  transition: background-color 0.3s ease-in-out; 
`;
const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  position: relative;
  z-index: 5;
  transition: font-size 0.3s, font-weight 0.3s;

  &:hover {
    // font-size: 1.1em;
    font-weight: bold;
    
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.1); /* lekkie tło */
    border-radius: 5px; /* zaokrąglenie */
    z-index: -1; /* pod logo */
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;
;


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;  
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `display: block;` : `display: none;`}
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
    background-color: transparent; 
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
  transition: font-size 0.3s, font-weight 0.3s, background-color 0.3s;
  
  @media screen and (min-width: 768px) {
    padding: 0;
    color: black;
    padding: 4px;
  }

  &:hover {
    
    //font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px;
    border-radius: 15px;
    color: white;
  }
`;

// const NavLink = styled.a`
//   display: block;
//   color: white;
//   text-decoration: none;
//   padding: 10px 0;
//   cursor: pointer;
//   transition: font-size 0.3s, font-weight 0.3s, background-color 0.3s;
  
//   @media screen and (min-width: 768px) {
//     padding: 0;
//     color: black;
//   }

//   &:hover {
    
//     //font-weight: bold;
//     background-color: rgba(0, 0, 0, 0.5);
//     //padding: 2px;
//     border-radius: 15px;
//     color: white;
//   }
// `;


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

const MainContent = styled.div`
  padding-top: 110px; 
`;

export default function Header({ setMenuOpen }) {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1); 
  const router = useRouter();

  const toggleMenu = () => {
    setMobileNavActive(prev => !prev);
    setMenuOpen(prev => !prev); 
  };

  const handleNavigation = (url) => {
    setIsLoading(true); 
    router.push(url).then(() => setIsLoading(false)); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const newOpacity = Math.max(1 - scrollTop / 200, 0.5); 
      setHeaderOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <StyledHeader opacity={headerOpacity}>
        <Center>
          <Wrapper>
            <Logo href={'/'}>Auto Dily</Logo>
            <StyledNav mobileNavActive={mobileNavActive}>
              <NavLink onClick={() => handleNavigation('/')}>Home</NavLink>
              <NavLink onClick={() => handleNavigation('/products')}>Všechny produkty</NavLink>
              <NavLink onClick={() => handleNavigation('/podpora')}>Podpora</NavLink>
              <NavLink onClick={() => handleNavigation('/cart')}>Košík ({cartProducts.length})</NavLink>
            </StyledNav>
            <NavButton onClick={toggleMenu}>
              <BarsIcon />
            </NavButton>
          </Wrapper>
          {isLoading && <Spinner />} 
        </Center>
      </StyledHeader>
      <MainContent />
    </div>
  );
}