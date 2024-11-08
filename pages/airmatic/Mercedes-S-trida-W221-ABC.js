import React from 'react';
import styled from 'styled-components';
import Header1 from '@/components/Header';
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | Mercedes-S-trida-W221-ABC</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/Mercedes-S-trida-W221-ABC" />
        <link rel="apple-touch-icon" sizes="180x180" href="/auto-dily-logo.png" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:image" content="/auto-dily-logo.png" />
        <meta property="og:image:width" content="50" />
        <meta property="og:image:height" content="50" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:url" content="https://autodilyexpress.cz" />
        <meta property="og:site_name" content="autodilyexpress.cz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta name="twitter:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka"></meta>

      </Head>
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
