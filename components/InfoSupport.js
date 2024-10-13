import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Spinner from "@/components/Spinner"; 
import { useRouter } from "next/router"; 

const StyledHeader = styled.header`
  background-color: #dcdcdc;
  z-index: 4; 
  position: relative;
  border-radius: 20px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const ButtonLink = styled.a`
  background-color: #222;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  @media screen and (min-width: 768px) {
    background-color: #000;
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
          <p>K tomuto modelu máme více dílů v různých barvách a možnostech. Klikněte a položte otázku...</p>
          <Link href="/podpora" passHref>
            <ButtonLink onClick={() => handleNavigation('/podpora')}>
              {isLoading ? <Spinner /> : "Podpora"}
            </ButtonLink>
          </Link>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
