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
        <Header>Mercedes S třída W221 (2005-) (ABC)</Header>
        
        <hr />
        <Header>PŘEDNÍ</Header>
        <Description>(zavěšení hydraulické Active Body Control)</Description>
        <Description>Cena: 17990 Kč bez DPH Montáž: 3000 – 4000 Kč</Description>

        <hr />
        <Header>ZADNÍ</Header>
        <Description>(zavěšení hydraulické Active Body Control)</Description>
        <Description>Cena: 17990 Kč bez DPH Montáž: 3000 – 4000 Kč</Description>

        <hr />
        <Header>Regenerace tlumičů pro Mercedes S-Klasa W221 (2005-2013) se systémem ABC</Header>
        <Description>
          Profesionalita a Preciznost v Servisu Zavěšení<br />
          V našem servisu se specializujeme na regeneraci tlumičů pro model Mercedes S-Klasa W221 se systémem ABC, poskytujeme služby na nejvyšší úrovni. Chápeme, jak důležité je udržet vysokou kvalitu a efektivitu zavěšení v tak prestižních modelech jako je Mercedes S-Klasa.
        </Description>
        
        <Description><strong>Naše Nabídka Obsahuje:</strong><br />
          Regenerace tlumičů ABC: Profesionální obnovení funkcí tlumičů v systému ABC, které jsou klíčové pro zachování dynamických vlastností jízdy.
        </Description>
        
        <Description><strong>Proč Si Vybrat Náš Servis?</strong><br />
          Specializace na Model Mercedes S-Klasa W221: Naše zkušenosti a technické znalosti jsou zaměřeny na modely Mercedes, zejména na S-Klasu W221 se systémem ABC.<br />
          Pokročilé Technologie Servisu: Používáme nejmodernější technologie a nástroje, abychom zajistili nejvyšší kvalitu našich služeb.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy</FAQQuestion>
          <Description>
            <strong>Q: Jak důležitá je regenerace tlumičů v Mercedes S-Klasa W221?</strong><br />
            A: Je to klíčový prvek pro udržení jak komfortu, tak bezpečnosti jízdy, zejména v modelech s pokročilým systémem zavěšení ABC.
          </Description>
          <Description>
            <strong>Q: Kdy by se měl provést servis zavěšení v modelu Mercedes S-Klasa W221?</strong><br />
            A: Doporučujeme pravidelnou kontrolu zavěšení, zejména po dosažení nájezdu 100 000 km.
          </Description>
          <Description>
            <strong>Q: Má regenerace tlumičů vliv na výkon jízdy?</strong><br />
            A: Ano, správně servisované tlumičy výrazně zlepšují jak komfort jízdy, tak celkový výkon vozidla.
          </Description>
        </FAQSection>

        <Description>
          <strong>Souhrn:</strong><br />
          Regenerace tlumičů v Mercedes S-Klasa W221 je klíčový proces, který může významně ovlivnit výkon a bezpečnost tohoto luxusního automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
