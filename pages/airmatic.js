import Center from "@/components/Center";
import styled, { keyframes, css } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";
import Footer from '@/components/Footer';


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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
//   background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const carModels = {
    Mercedes: [
        "C klasa W205",
        "GLC W253 / GLC Coupe C253",
        "E klasa W211",
        "E klasa W212",
        "E klasa W213",
        "S klasa W220",
        "S klasa W220 (ABC)",
        "S klasa W221",
        "S klasa W221 (ABC)",
        "S klasa W222",
        "S klasa W222 (ABC)",
        "S coupe W217",
        "S klasa W217 (ABC)",
        "CL W215 (ABC)",
        "CL W216",
        "CL W216 (ABC)",
        "CLS W218",
        "CLS W219",
        "R-klasa W251",
        "ML / GL - W164",
        "GLE / GLE Coupe W292",
        "ML / GL – W166 / X166",
        "GLE / GLS - W167 / X167",
        "GLS 2015-2019",
        "SL W230 (ABC)",
        "SL W231 (ABC)",
        "Vito / Viano W638",
        "Vito / Viano V639"
    ],
    Audi: [
        "A6 Allroad C5",
        "A6 C6 / A6 C6 Allroad",
        "A6 C7 / A6 C7 Allroad",
        "A6 C8 / A6 C8 Allroad",
        "A7 4G",
        "A7 4K",
        "A8 – D3",
        "A8 – D4",
        "A8 – D5",
        "Q7 4L",
        "Q7 4M",
        "Q8"
    ],
    BMW: [
        "serii 5 E39",
        "serii 5 E61",
        "serii 5 F11",
        "serii 5 F07 GT",
        "serii 5 G30 / G31",
        "serii 6 G32 GT",
        "serii 7 E65 E66",
        "serii 7 F01 F02",
        "serii 7 G11 G12",
        "X3 F25 / X4 F26",
        "4 Gran Coupe",
        "X5 E53",
        "X5 E70 / X6 E71",
        "X5 F15 / X6 F16",
        "X5 G05 / X6 G06"
    ],
    Citroen: [
        "C4 Picasso / C4 Grand Picasso"
    ],
    Jaguar: [
        "XF X250",
        "XJ X350 / X358",
        "X351"
    ],
    Jeep: [
        "Grand Cherokee WK2"
    ],
    Lexus: [
        "LS 400 430 460 600"
    ],
    Opel: [
        "Astra H",
        "Astra J",
        "Insignia A",
        "Signum",
        "Vectra C"
    ],
    Porsche: [
        "Cayenne I",
        "Cayenne II",
        "Panamera 970"
    ],
    RollsRoyce: [
        "Phantom VII"
    ],
    Volvo: [
        "V70 Cross Country",
        "XC 60 II",
        "XC 90 II"
    ],
    VW: [
        "Multivan T6",
        "Phaeton",
        "Touareg I 7L",
        "Touareg II 7P"
    ]
};


const ModelTable = styled.table`
  position: absolute;
  background-color: black;
  color: white;
  margin-top: 10px;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #333;
    color: white;
  }
`;


export default function Featured({ product, menuOpen, heroBanner }) {
    const { addProduct } = useContext(CartContext);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleButtonClick = (brand) => {
        setSelectedBrand(selectedBrand === brand ? null : brand);
    };

    return (
        <div>
            <Header />
            <div className="hero-banner-containerr">
                <div>
                    <h1 className="beats-sol">Regenerace vzduchových pérování a hydraulické ABC- Active Body Control<br /> 
                    </h1>

                    <ButtonContainer>
                        {Object.keys(carModels).map((brand) => (
                            <div key={brand}>
                                <Button className="btn_reg" onClick={() => handleButtonClick(brand)}>{brand}</Button>
                                {selectedBrand === brand && (
                                    <ModelTable>
                                        <thead>
                                            <tr>
                                                <th>Modely</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {carModels[brand].map((model, index) => (
                                                <tr key={index}>
                                                    <td>{model}</td>
                                                </tr>
                                            ))}
                                         
                                        </tbody>
                                    </ModelTable>
                                )}
                            </div>
                        ))}
                    </ButtonContainer>

                </div>
                <div class="image-container">
                    <img src="/amo.png" alt="auto-dily-motor" className="image" />
                    <img src="/amo2.png" alt="auto-dily-motor" className="image" />
                    <img src="/amo3.png" alt="auto-dily-motor" className="image" />
                </div>

            </div>
            <Footer />
        </div>
    );
}
