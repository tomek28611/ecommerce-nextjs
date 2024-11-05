import Center from "@/components/Center";
import styled, { keyframes, css } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;


  @media (min-width: 769px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 50%; 

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


const RightContent = styled.div`
 position: absolute;
  right: 0;
  flex: 1;
  max-width: 50%; 
  @media (max-width: 768px) {
    max-width: 100%;
    display: none;
  }
`;

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
const BrandContainer = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px;
  max-width: 500px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const ModelLink = styled(Link)`
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const BrandTitle = styled.h2`
  color: #333;
  margin-bottom: 15px;
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
const TextContainer = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  color: #333;
  margin-right: 22px;
  font-size: 1.5rem;
  line-height: 1.6;
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
            <SectionWrapper>

                <div className="hero-banner-containerr">
                    <div>
                        <h1 className="">Regenerace vzduchových pérování a hydraulické ABC- Active Body Control<br />
                        </h1>
                        <div>
                            <RightContent>
                                <TextContainer>
                                    <p>Specialitou naší společnosti je profesionální regenerace</p>
                                    <p>(komplexní oprava)<strong> tlumičů Airmatic </strong>(vzpěry) a vzduchové měchy při použití v továrně nové náhradní díly na Mercedes / Audi / VW / BMW / Bentley.</p>
                                    <p>Provádíme také regeneraci hydraulických tlumičů Mercedes ABC (Active Body Control)</p>
                                    <br/>
                                    <img src="/amo2.png" alt="auto-dily-motor" className="image" />
                                    <br/>
                                    <p>Kromě toho provádíme diagnostiku a komplexní opravy systémů vzduchového pérování pomocí vyhrazeného servisního vybavení.</p>
                                    <br/>
                                    <img src="/amo3.png" alt="auto-dily-motor" className="image" />
                                    <br/>
                                    <p>Naší doménou jsou bohaté zkušenosti v tomto oboru – to znamená, že každá diagnostika je přesná a oprava rychlá a efektivní – odstávka vozidla většinou nepřesáhne 1 hodinu.</p>
                                    <p>(máme všechny díly potřebné k opravě na místě - včetně: tlumičů, kompresorů, rozvodných lišt, senzorů, svíčky).</p>
                                    <br/>
                                    <img src="/amo.png" alt="auto-dily-motor" className="image" />
                                </TextContainer>
                            </RightContent>

                            <LeftContent>
                                <BrandContainer>
                                    <BrandTitle>Mercedes-Benz</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Mercedes-C-trida-W205">Mercedes C trida W205</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-GLC-W253-GLC-Coupe-C253">Mercedes GLC W253 / GLC Coupe C253</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-E-trida-W211">Mercedes E trida W211</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-E-trida-W212">Mercedes E trida W212</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-E-trida-W213">Mercedes E trida W213</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W220">Mercedes S trida W220</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W220-ABC">Mercedes S trida W220 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W221">Mercedes S trida W221</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W221-ABC">Mercedes S trida W221 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W222">Mercedes S trida W222</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W222-ABC">Mercedes S trida W222 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-coupe-W217">Mercedes S coupe W217</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-S-trida-W217-ABC">Mercedes S trida W217 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-CL-W215-ABC">Mercedes CL W215 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-CL-W216">Mercedes CL W216</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-CL-W216-ABC">Mercedes CL W216 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-CLS-W218">Mercedes CLS W218</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-CLS-W219">Mercedes CLS W219</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-R-trida-W251">Mercedes R-trida W251</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-ML-GL-W164">Mercedes ML / GL - W164</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-GLE-GLE-Coupe-W292">Mercedes GLE / GLE Coupe W292</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-ML-GL-W166-X166">Mercedes ML / GL – W166 / X166</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-GLE-GLS-W167-X167">Mercedes GLE / GLS - W167 / X167</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-GLS-2015-2019">Mercedes GLS 2015-2019</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-SL-W230-ABC">Mercedes SL W230 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-SL-W231-ABC">Mercedes SL W231 (ABC)</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-Vito-Viano-W638">Mercedes Vito / Viano W638</ModelLink>
                                        <ModelLink href="/airmatic/Mercedes-Vito-Viano-V639">Mercedes Vito / Viano V639</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Audi</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Audi-A6-Allroad-C5">Audi A6 Allroad C5</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A6-C6-Allroad">Audi A6 C6 / A6 C6 Allroad</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A6-C7-Allroad">Audi A6 C7 / A6 C7 Allroad</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A6-C8-Allroad">Audi A6 C8 / A6 C8 Allroad</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A7-4G">Audi A7 4G</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A7-4K">Audi A7 4K</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A8-D3">Audi A8 – D3</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A8-D4">Audi A8 – D4</ModelLink>
                                        <ModelLink href="/airmatic/Audi-A8-D5">Audi A8 – D5</ModelLink>
                                        <ModelLink href="/airmatic/Audi-Q7-4L">Audi Q7 4L</ModelLink>
                                        <ModelLink href="/airmatic/Audi-Q7-4M">Audi Q7 4M</ModelLink>
                                        <ModelLink href="/airmatic/Audi-Q8">Audi Q8</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>BMW</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/BMW-serii-5-E39">BMW serii 5 E39</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-5-E61">BMW serii 5 E61</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-5-F11">BMW serii 5 F11</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-5-F07-GT">BMW serii 5 F07 GT</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-5-G30-G31">BMW serii 5 G30 / G31</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-6-G32-GT">BMW serii 6 G32 GT</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-7-E65-E66">BMW serii 7 E65 E66</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-7-F01-F02">BMW serii 7 F01 F02</ModelLink>
                                        <ModelLink href="/airmatic/BMW-serii-7-G11-G12">BMW serii 7 G11 G12</ModelLink>
                                        <ModelLink href="/airmatic/BMW-X3-F25-X4-F26">BMW X3 F25 / X4 F26</ModelLink>
                                        <ModelLink href="/airmatic/BMW-4-Gran-Coupe">BMW 4 Gran Coupe</ModelLink>
                                        <ModelLink href="/airmatic/BMW-X5-E53">BMW X5 E53</ModelLink>
                                        <ModelLink href="/airmatic/BMW-X5-E70-X6-E71">BMW X5 E70 / X6 E71</ModelLink>
                                        <ModelLink href="/airmatic/BMW-X5-F15-X6-F16">BMW X5 F15 / X6 F16</ModelLink>
                                        <ModelLink href="/airmatic/BMW-X5-G05-X6-G06">BMW X5 G05 / X6 G06</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Citroen</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Citroen-C4-Picasso-C4-Grand-Picasso">Citroen C4 Picasso / C4 Grand Picasso</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Jaguar</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Jaguar-XF-X250">Jaguar XF X250</ModelLink>
                                        <ModelLink href="/airmatic/Jaguar-XJ-X350-X358">Jaguar XJ X350 / X358</ModelLink>
                                        <ModelLink href="/airmatic/Jaguar-X351">Jaguar X351</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Jeep</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Jeep-Grand-Cherokee-WK2">Jeep Grand Cherokee WK2</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Lexus</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Lexus-LS-400-430-460-600">Lexus LS 400 430 460 600</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Opel</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Opel-Astra-H">Opel Astra H</ModelLink>
                                        <ModelLink href="/airmatic/Opel-Astra-J">Opel Astra J</ModelLink>
                                        <ModelLink href="/airmatic/Opel-Insignia-A">Opel Insignia A</ModelLink>
                                        <ModelLink href="/airmatic/Opel-Signum">Opel Signum</ModelLink>
                                        <ModelLink href="/airmatic/Opel-Vectra-C">Opel Vectra C</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Porsche</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Porsche-Cayenne-I">Porsche Cayenne I</ModelLink>
                                        <ModelLink href="/airmatic/Porsche-Cayenne-II">Porsche Cayenne II</ModelLink>
                                        <ModelLink href="/airmatic/Porsche-Panamera-970">Porsche Panamera 970</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Rolls Royce</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/RollsRoyce-Phantom-VII">Rolls Royce Phantom VII</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>Volvo</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/Volvo-V70-Cross-Country">Volvo V70 Cross Country</ModelLink>
                                        <ModelLink href="/airmatic/Volvo-XC-60-II">Volvo XC 60 II</ModelLink>
                                        <ModelLink href="/airmatic/Volvo-XC-90-II">Volvo XC 90 II</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>

                                <BrandContainer>
                                    <BrandTitle>VW</BrandTitle>
                                    <ButtonContainer>
                                        <ModelLink href="/airmatic/VW-Multivan-T6">VW Multivan T6</ModelLink>
                                        <ModelLink href="/airmatic/VW-Phaeton">VW Phaeton</ModelLink>
                                        <ModelLink href="/airmatic/VW-Touareg-I-7L">VW Touareg I 7L</ModelLink>
                                        <ModelLink href="/airmatic/VW-Touareg-II-7P">VW Touareg II 7P</ModelLink>
                                    </ButtonContainer>
                                </BrandContainer>
                            </LeftContent>
                        </div>


                    </div>

                </div>


            </SectionWrapper>
            <Footer />
        </div>
    );
}
