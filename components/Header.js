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
`;

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

const MainContent = styled.div`
  padding-top: 110px; 
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
  .modal {
    display: none;
  }
}
`;

const ModelsOverlay = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  position: relative;
  max-width: 800px;
  width: 90%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

@media (max-width: 768px) {
  .modal {
    display: none;
  }
}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ModelItem = styled.div`
position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 120px;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-end;
  color: white;
  background-image: ${(props) => `url(${props.bgImage})`};
  

  &:hover {
    filter: brightness(0.7);
    
  }

`;

const Label = styled.span`
position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px;
  width: 100%;
  text-align: center;
  bottom: 0; 
  left: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: auto;
`;

export default function Header({ setMenuOpen }) {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [showModels, setShowModels] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMobileNavActive(prev => !prev);
    setMenuOpen(prev => !prev);
  };

  const handleNavigation = (url) => {
    setIsLoading(true);
    router.push(url).then(() => setIsLoading(false));
  };

  const toggleModels = () => {
    setShowModels(prev => !prev);
  };

  const closeModal = () => {
    setShowModels(false);
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
              <NavLink onClick={() => handleNavigation('/nahradni-dily')}>Všechny produkty</NavLink>
              <NavLink onClick={() => handleNavigation('/airmatic')}>Airmatic</NavLink>
              <NavLink onClick={() => handleNavigation('/podpora')}>Podpora</NavLink>
              <NavLink onClick={() => handleNavigation('/cart')}>Košík ({cartProducts.length})</NavLink>
              <div>
                <img src="/models.png" alt="auto-dily-model" className="models" onClick={toggleModels} />
              </div>
            </StyledNav>
            <NavButton onClick={toggleMenu}>
              <BarsIcon />
            </NavButton>
          </Wrapper>
          {isLoading && <Spinner />}
        </Center>
      </StyledHeader>
      <MainContent />

      {showModels && (
        <ModalOverlay onClick={closeModal}>
          <ModelsOverlay onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
       
            <Link href="/nahradni-dily/mercedes/A-Trida" >
              <ModelItem bgImage="a.webp">
                <Label>
                  Mercedes-Benz třídy A
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/B-Trida">
              <ModelItem bgImage="b.webp">
                <Label>
                  Mercedes-Benz třídy B
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/C-Trida">
              <ModelItem bgImage="c.webp">
                <Label>
                  Mercedes-Benz třídy C
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/CLA-Trida">
              <ModelItem bgImage="cla.webp">
                <Label>
                  Mercedes-Benz třídy CLA
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/CLS-Trida">
              <ModelItem bgImage="cls.webp">
                <Label>
                  Mercedes-Benz třídy CLS
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/E-Trida">
              <ModelItem bgImage="e.webp">
                <Label>
                  Mercedes-Benz třídy E
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/G-Trida">
              <ModelItem bgImage="g.webp">
                <Label>
                  Mercedes-Benz třídy G
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/GLA-Trida">
              <ModelItem bgImage="gla.webp">
                <Label>
                  Mercedes-Benz třídy GLA
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/GLB-Trida">
              <ModelItem bgImage="glb.webp">
                <Label>
                  Mercedes-Benz třídy GLB
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/GLC-Trida">
              <ModelItem bgImage="glc.webp">
                <Label>
                  Mercedes-Benz třídy GLC
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/GLE-(ML)-Trida">
              <ModelItem bgImage="gle.webp">
                <Label>
                  Mercedes-Benz třídy GLE
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/GLK-Trida">
              <ModelItem bgImage="glk.webp">
                <Label>
                  Mercedes-Benz třídy GLK
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/GLS-Trida">
              <ModelItem bgImage="gls.webp">
                <Label>
                  Mercedes-Benz třídy GLS
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/S-Trida">
              <ModelItem bgImage="s.webp">
                <Label>
                  Mercedes-Benz třídy S
                </Label>
              </ModelItem>
            </Link>

            <Link href="/nahradni-dily/mercedes/SL-Trida">
              <ModelItem bgImage="sl.webp">
                <Label>
                  Mercedes-Benz třídy SL
                </Label>
              </ModelItem>
            </Link>

          </ModelsOverlay>
        </ModalOverlay>
      )}
    </div>
  );
}
