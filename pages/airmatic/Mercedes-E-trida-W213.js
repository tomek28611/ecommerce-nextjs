import React from 'react';
import styled from 'styled-components';
import Header1 from '@/components/Header';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

const RepairOptions = styled.div`
  margin: 20px 0;
  font-weight: bold;
`;

const FAQSection = styled.div`
  margin-top: 30px;
`;

const FAQQuestion = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const MercedesEClassRepair = () => {
  return (
    <div>
      <Header1 />
   
      <Container>
        <Header>Mercedes E Trida W213 (2016-202x) - tlumič Přední REGENERACE</Header>
        <img src="/W213-front-shock.jpg" alt="auto-dily-213" className="" />

        <Description>Mercedes E Trida W213 (2016-202x) PŘEDNÍ</Description>
        <Description>Mercedes E Trida W213 4 MATIC (2016-202x) PŘEDNÍ</Description>
        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Popis Opravy / Regenerace:</strong><br />
          UPOZORNĚNÍ: regenerace měchu se vztahuje v případě, že tlumič nedrží vzduch,
          při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 11990 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 19990 Kč
        </RepairOptions>
        <Description>Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Trida W213 (2016-202x) - tlumič Zadní REGENERACE</Header>
        <Description>Cena: 9990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Trida W213 (2016-202x) - Měch Zadní REGENERACE LEVÝ / PRAVÝ</Header>
        <Description>
          V případě kombi bez systému airmatic (podnížený pouze zadek vozidla)<br />
          Cena: 7990 Kč   Montáž: 3000 Kč / kus
        </Description>

        <hr />
        <Header>Mercedes E Trida W213 (2016-202x) - Měch Zadní NOVÝ LEVÝ / PRAVÝ</Header>
        <Description>
          V případě kombi bez systému airmatic (podnížený pouze zadek vozidla)<br />
          OEM Čísla MERCEDES:<br />
          PRAWÝ: A2053200225  LEVÝ: 2053200125
        </Description>
        <Description>Cena: 9990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Trida W213 (2016-202x) - Měch Zadní REGENERACE LEVÝ / PRAVÝ (Airmatic DC)</Header>
        <Description>
          Zvedací všechny kola, verze se senzorem / kabelem, všechny motorizace<br />
          OEM Čísla MERCEDES:<br />
          LEVÝ: A2133200125, 2133200125<br />
          PRAVÝ: A2133200225, 2133200225
        </Description>
        <Description>Cena: 10990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Trida W213 (2016-202x) - Měch Zadní NOVÝ LEVÝ / PRAVÝ (Airmatic DC)</Header>
        <Description>
          Zvedací všechny kola, verze se senzorem / kabelem, všechny motorizace<br />
          OEM Čísla MERCEDES:<br />
          LEVÝ: A2133200125, 2133200125<br />
          PRAVÝ: A2133200225, 2133200225
        </Description>
        <Description>Cena: 14990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Trida W213 (2016-202x) - Kompresor / čerpadlo / pumpa odpružení</Header>
        <img src="/W213-compressor.jpg" alt="auto-dily-motor" className="" />
        <Description>Cena: 20990 Kč</Description>
        <Description>
          Nový, výrobce WABCO (výrobce pro první montáž OEM) – bezproblémová montáž<br />
          Všechny motorizace<br />
          OEM Čísla MERCEDES:<br />
          0993200004, A0993200004, 099320000480, A099320000480, 2133200004, A2133200004, 2133200104, A2133200104, 212320040480, 212320040480, A2123200404, 2123200404
        </Description>

        <hr />
        <Header>Specializovaná Regenerace Závěsu v Mercedes E-Trida W213 (2016-202x)</Header>
        <Description>
          Zajistěte svému Mercedesu E-Trida W213 nejvyšší kvalitu jízdy a komfort.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes E Trida W213</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v Mercedes E Trida W213 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování luxusního komfortu a bezpečnosti jízdy v modelech W213.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes E Trida W213?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelech W213.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes E Trida W213?</strong><br />
            A: Oprava kompresoru odpružení v modelech W213 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů v Mercedes E Trida W213?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů pro modely W213.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů v Mercedes E Trida W213 je klíčový proces, který může významně ovlivnit výkon a bezpečnost těchto luxusních automobilů.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
