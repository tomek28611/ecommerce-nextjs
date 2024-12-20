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

const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
  
  @media screen and (min-width: 768px) {
  display: grid;
    grid-template-columns: repeat(15, 1fr);
    gap: 22px;
    margin-top: 20px;
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
  height: 300px;
  width: 250px;
  position: relative;
   border: 2px solid black;
  border-radius: 25px;

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
const LabelP = styled.span`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0; 
  left: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  
`;

const Label = styled.span`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0; 
  left: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
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

export default function NewPromo({ setMenuOpen }) {
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
                    <LabelP>Nové produkty</LabelP>
                    <div className="marquee">

                        <StyledNav className="maylike-products-container track">
                            <NavLink bgImage="/E-Trida-pred.webp" onClick={() => handleNavigation('/nahradni-dily/67133625e7f3a41cfe8be661')}>
                                <Label>E-Trida kapota, nárazník, světlomety, chladiče</Label>
                                <LabelP>22 500 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/A-třídaW176,přední-nárazník.webp" onClick={() => handleNavigation('/nahradni-dily/671124b11fe2438ba959e428')}>
                                <Label>Mercedes-Benz A-třída W176, přední nárazník</Label>
                                <LabelP>15 500 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/C-třída-W205,přední-dveře.webp" onClick={() => handleNavigation('/nahradni-dily/670d1a181c009991a4223936')}>
                                <Label>Mercedes-Benz C-třída W205, přední dveře</Label>
                                <LabelP>12 700 kč</LabelP>

                            </NavLink>
                            <NavLink bgImage="/W212-W218-chladič-ventilátor,klimatizace,chladič-vody.webp" onClick={() => handleNavigation('/nahradni-dily/6708311ee704dc30f605b043')}>
                                <Label>Mercedes-Benz W212 / W218 chladič ventilátor, klimatizace, chladič vody</Label>
                                <LabelP>28 300 kč</LabelP>

                            </NavLink>
                            <NavLink bgImage="/E-třída-W213,přední-světlomety,kompletní.webp" onClick={() => handleNavigation('/nahradni-dily/6713c175810ea2495dacae1e')}>
                                <Label>Mercedes-Benz E-třída W213, přední světlomety, kompletní, Multibeam.</Label>
                                <LabelP>56 300 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/G-Třída-W463.webp" onClick={() => handleNavigation('/nahradni-dily/6703d4a830fc9241852871e0')}>
                                <Label>Mercedes-Benz G-Třída W463 4. generace, karoserie blatník střecha víko čtvrtka šedá barva</Label>
                                <LabelP>486 500 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/GLE-třída-W167,levá-přední-lampa.webp" onClick={() => handleNavigation('/nahradni-dily/67069fc7cb2b23b139ce7537')}>
                                <Label>Mercedes-Benz GLE-třída W167, levá přední lampa Multibeam</Label>
                                <LabelP>28 300 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/SL-třída-R231.webp" onClick={() => handleNavigation('/nahradni-dily/670e755203e2d5baae7c0146')}>
                                <Label>Mercedes-Benz SL-třída R231, AMG nárazník přední před lift</Label>
                                <LabelP>31 800 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/CLA-třída-C117,zadní-zavěšení.webp" onClick={() => handleNavigation('/nahradni-dily/6718b870a48d6eb46687ce64')}>
                                <Label>Mercedes-Benz CLA-třída C117, zadní zavěšení, rameno</Label>
                                <LabelP>8 500 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/Benzínový-motor-254-920.jpg" onClick={() => handleNavigation('/nahradni-dily/6713a001e66be549916e0187')}>
                                <Label>Benzínový motor 254 920</Label>
                                <LabelP>160 000 kč</LabelP>
                            </NavLink>
                            <NavLink bgImage="/C-třída-W205,kola.webp" onClick={() => handleNavigation('/nahradni-dily//6706a8733be908f36fb3fdc7')}>
                                <Label>Mercedes-Benz C-třída W205, kola, AMG 63, R19</Label>
                                <LabelP>40 600 kč</LabelP>
                            </NavLink>
                        </StyledNav>

                    </div>
                    <Label onClick={handleScrollToNewProducts}>
                        Můžete také najít podle modelu
                        <FiChevronDown style={{ marginLeft: '15px' }} /> 
                    </Label>
                </Wrapper>
                {isLoading && <Spinner />}
            </Center>
        </StyledHeader>
    );
}