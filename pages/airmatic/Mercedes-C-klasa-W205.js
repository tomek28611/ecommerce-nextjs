import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  color: #555;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.5;
`;

const Price = styled.p`
  font-weight: bold;
  color: #2c3e50;
`;

const Options = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const PartInfo = () => {
    return (
        <div>
            <Header />

            <Container>
                <Title>Mercedes C třída W205 (2014-2020)</Title>
                <Section>
                <br />
                    <Subtitle>Amortizátor přední REGENERACE</Subtitle>
                    <img src="/W205-przod.jpg" alt="auto-dily-motor" className="" />
                    <Description>
                        Mercedes C TŘÍDA W205 (2014-2020) PŘEDNÍ
                        <br />
                        Mercedes C TŘÍDA W205 4 MATIC (2014-2020) PŘEDNÍ
                        <br />
                        všechny verze motoru
                    </Description>
                    <br />
                    <Subtitle>POPIS OPRAVY / REGENERACE:</Subtitle>
                    <Description>
                        POZOR: regenerace měcha se uplatňuje v případě, že amortizátor neudržuje vzduch,
                        při této možnosti neopravujeme hydraulický amortizátor uvnitř – takže pokud amortizátor
                        bouchá nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měcha na nový
                        v takovém případě je bezpředmětná – nezbytná je také regenerace hydraulického amortizátoru.
                    </Description>
                    <br />
                    <Subtitle>OPCE OPRAVY / REGENERACE:</Subtitle>
                    <Options>
                        <li>opce 1: výměna měcha na nový / regenerace pneumatiky – <Price>9200 Kč</Price></li>
                        <li>dodatečný náklad na nasazení měcha na amortizátor - <Price>6000 Kč</Price></li>
                        <li>opce 2: Komplexní regenerace: Výměna měcha + regenerace hydraulického amortizátoru – <Price>17 000 Kč</Price></li>
                    </Options>
                    <Price>Montáž: 2000 Kč / kus</Price>
                </Section>

                <Section>
                    <Subtitle>Amortizátor zadní REGENERACE</Subtitle>
                    <Description>SEDAN / KOMBI</Description>
                    <img src="/W205-rear-shock.jpg" alt="auto-dily-motor" className="" />
                    <Price>Cena: 9000 Kč Montáž: 2000 Kč / kus</Price>
                </Section>

                <Section>
                    <Subtitle>Miech Zadní REGENERACE LEVÝ / PRAVÝ</Subtitle>
                    <Price>Cena: 8000 Kč Montáž: 2000 Kč / kus</Price>
                    <img src="/W205-tył-miech.jpg" alt="auto-dily-motor" className="" />
                </Section>

                <Section>
                    <Subtitle>Miech Zadní NOVÝ LEVÝ / PRAVÝ</Subtitle>
                    <Price>Cena: 9000 Kč Montáž: 2000 Kč / kus</Price>
                    <Description>Čísla OEM Mercedes: PRAVÝ: A2053200225 LEVÝ: 2053200125</Description>
                    <img src="/W205-tył-miech.jpg" alt="auto-dily-motor" className="" />
                </Section>

                <Section>
                    <Subtitle>Kompresor / pumpa / vzduchová pumpa zavěšení</Subtitle>
                    <Description>Mercedes E-třída W205</Description>
                    <img src="/W205-kompresor.jpg" alt="auto-dily-motor" className="" />
                    <Price>Cena: 20 000 Kč</Price>
                    <Description>
                        Nový, výrobce WABCO (výrobce pro první montáž OEM) – bezproblémová montáž
                        všechny verze motoru
                    </Description>
                    <Description>
                        Čísla OEM MERCEDES: 0993200004, A0993200004, 099320000480, A099320000480,
                        2133200004, A2133200004, 2133200104, A2133200104, A212320040480, 212320040480,
                        A2123200404, 2123200404
                    </Description>
                </Section>

                <Section>
                    <Subtitle>Regenerace Amortizátorů Mercedes C-třída W205 (2014-2020) – Cesta k Dokonalosti</Subtitle>
                    <Description>
                        Úvod do Regenerace Amortizátorů v Mercedes C-třída W205 (2014-2020)
                        Mercedes C-třída W205, vyráběná v letech 2014-2020, je symbolem elegance a inovace v automobilovém světě.
                        Ale i tento výjimečný model vyžaduje pravidelnou údržbu, a regenerace amortizátorů je klíčovým prvkem
                        tohoto procesu. V tomto článku se podíváme, jak regenerace amortizátorů, měch, vzduchová pumpa
                        a kompresor zavěšení spolupracují v zavěšení Mercedes C-třída W205,
                        a jak může proces regenerace obnovit původní výkon.
                    </Description>
                    <br />
                    <Subtitle>Miech v Mercedes C-třída W205 (2014-2020)</Subtitle>
                    <Description>
                        Miech v Mercedes C-třída W205 je klíčovým prvkem vzduchového zavěšení, který se přizpůsobuje
                        různým podmínkám jízdy. Díky své unikátní konstrukci zajišťuje měch neporovnatelný komfort jízdy.
                    </Description>
                    <br />
                    <Subtitle>Kompresor a Vzduchová Pumpa v Mercedes C-třída W205 (2014-2020)</Subtitle>
                    <Description>
                        Kompresor a vzduchová pumpa jsou srdcem zavěšení v Mercedes C-třída W205.
                        Řídí dodávání vzduchu do měchů, což umožňuje přesné přizpůsobení výšky zavěšení
                        a reakci na změny v povrchu vozovky.
                    </Description>
                    <br />
                    <Subtitle>Proces Regenerace Amortizátorů Mercedes C-třída W205 (2014-2020)</Subtitle>
                    <Description>
                        Regenerace amortizátorů v Mercedes C-třída W205 je složitý proces, který vyžaduje specializované
                        vybavení a znalosti. Zahrnuje:
                    </Description>
                    <br />
                    <Options>
                        <li>Diagnostika: Kontrola stavu amortizátorů a identifikace problémů specifických pro model W205.</li>
                        <li>Demontáž: Odstranění amortizátorů z vozidla.</li>
                        <li>Údržba a Oprava: Odstranění nečistot a výměna poškozených částí, se zohledněním specifikace modelu W205.</li>
                        <li>Montáž: Opětovné namontování amortizátorů do vozidla.</li>
                        <li>Kalibrace: Přizpůsobení nastavení zavěšení specifikacím Mercedes C-třída W205 (2014-2020).</li>
                    </Options>
                </Section>

                <Section>
                    <Subtitle>FAQ – Často Kladené Dotazy o Mercedes C-třída W205 (2014-2020)</Subtitle>
                    <Options>
                        <li>
                            Q: Je regenerace amortizátorů v Mercedes C-třída W205 (2014-2020) nezbytná?
                            <br />
                            A: Ano, regenerace amortizátorů je klíčová pro udržení luxusního komfortu a bezpečnosti jízdy v modelu W205.
                        </li>
                        <li>
                            Q: Jaké jsou příznaky poškozeného měcha v Mercedes C-třída W205 (2014-2020)?
                            <br />
                            A: Poškozený měch může způsobovat nerovnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelu W205.
                        </li>
                        <li>
                            Q: Mohu si sám opravit vzduchovou pumpu v Mercedes C-třída W205 (2014-2020)?
                            <br />
                            A: Oprava vzduchové pumpy v modelu W205 je složitým procesem a doporučuje se svěřit ji specialistům.
                        </li>
                        <li>
                            Q: Jak dlouho trvá proces regenerace amortizátorů v Mercedes C-třída W205 (2014-2020)?
                            <br />
                            A: Proces může trvat od několika hodin po několik dní, v závislosti na stavu amortizátorů a dostupnosti náhradních dílů.
                        </li>
                    </Options>
                </Section>
            </Container>
        </div>
    );
};

export default PartInfo;
