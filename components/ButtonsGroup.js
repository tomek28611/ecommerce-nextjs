import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/CenterB";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Spinner from "@/components/Spinner"; 
import { useRouter } from "next/router"; 
import { FiChevronDown } from 'react-icons/fi';

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
const Margin = styled.div`
  margin-bottom: 6px;
`;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    gap: 25px;
  }
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  
  align-items: center;
  background-color: #222;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 150px;
  width: 150px;
  position: relative;

  &:hover {
    background-color: #555;
  }

  @media screen and (min-width: 768px) {
    color: black;
    background-color: #f0f0f0;
    padding: 15px;

    &:hover {
      background-color: #ccc;
    }
  }
`;

const Label = styled.span`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0; /* Make sure it's at the bottom */
  left: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
          <NavLink bgImage="/miech.webp" onClick={() => handleNavigation('/regenerace-airmatic')}>
              <Label>Regenerace vzduchových pérování</Label>
            </NavLink>
            <NavLink bgImage="/motor.png" onClick={() => handleNavigation('/nahradni-dily/mercedes/motory')}>
              <Label>Motory</Label>
            </NavLink>
            <NavLink bgImage="/naprava.png" onClick={() => handleNavigation('/nahradni-dily/mercedes/naprava')}>
              <Label>Náprava</Label>
            </NavLink>
            <NavLink bgImage="/karoseria.png" onClick={() => handleNavigation('/nahradni-dily/mercedes/karoserie')}>
              <Label>Karoserie</Label>
            </NavLink>
            <NavLink bgImage="/elektrika.png" onClick={() => handleNavigation('/nahradni-dily/mercedes/elektrika')}>
              <Label>Elektrika</Label>
            </NavLink>
            <NavLink bgImage="/rafky.png" onClick={() => handleNavigation('/nahradni-dily/mercedes/rafky')}>
              <Label>Ráfky</Label>
            </NavLink>
            <NavLink bgImage="/interier.jpg" onClick={() => handleNavigation('/nahradni-dily/mercedes/interier')}>
              <Label>Interiér</Label>
            </NavLink>
            
            {/* <NavLink bgImage="/najit.jpg" onClick={handleScrollToNewProducts}>
              <Label>Najít podle modelu</Label>
            </NavLink> */}
            <Margin />
            <Label onClick={handleScrollToNewProducts}>
                        Můžete také najít podle modelu
                        <FiChevronDown style={{ marginLeft: '15px' }} /> 
                    </Label>
          </StyledNav>
        </Wrapper>
        {isLoading && <Spinner />} 
      </Center>
    </StyledHeader>
  );
}