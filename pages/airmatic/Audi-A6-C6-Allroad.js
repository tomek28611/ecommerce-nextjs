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

const AudiA6C6Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | Audi-A6-C6-Allroad</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/Audi-A6-C6-Allroad" />
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
        <Header>Audi A6 C6 / Audi A6 C6 Allroad - Tlumič Přední REGENERACE</Header>
        
        <Description>Možnosti Opravy:</Description>
        <RepairOptions>
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 7990 Kč<br />
          <strong>Možnost 2:</strong> Regenerace hydraulického tlumiče – 9490 Kč<br />
          <strong>Možnost 1 + 2:</strong> Kompletní regenerace (výměna měchu a regenerace tlumiče) – 14990 Kč
        </RepairOptions>
        <Description>Montáž do auta: 3000 Kč / kus</Description>

        <hr />
        <Header>Audi A6 C6 / Audi A6 C6 Allroad - Zadní Měch NOVÝ</Header>
        <Description>
          Záruka 12 měsíců<br />
          Katalogová čísla AUDI:<br />
          4F0 616 001, 4F0 616 001 J
        </Description>
        <Description>Cena: 4990 Kč   Montáž: 2000 Kč / kus</Description>

        <hr />
        <Header>Audi A6 C6 / Audi A6 C6 Allroad - Tlumič Zadní REGENERACE</Header>
        <Description>Cena: 8990 Kč   Montáž: 2500 Kč / kus</Description>

        <hr />
        <Header>Nový Kompresor / Čerpadlo / Pumpa Odpružení</Header>
        <Description>
          WABCO<br />
          Nový senzor teploty!<br />
          Záruka 24 měsíců<br />
          Cena: 18990 Kč
        </Description>
        <Description>
          Katalogová čísla AUDI:<br />
          4F0 616 005 E, 4F0 616 005 F, 4F0 616 006, 4F0 616 005 B
        </Description>
        <Description>Filtr + relé pro montáž nové pumpy: 990 Kč</Description>

        <hr />
        <Header>Rozdělovač / Blok Ventilů - Originál RAPA</Header>
        <Description>
          OE čísla:<br />
          4F0616013 / 4F0 616 013 pro A6 C6<br />
          4E0616013 pro A8 D3 S8 / Phaeton<br />
          4Z7616013 pro A6 C5
        </Description>
        <Description>Cena: 9990 Kč</Description>

        <FAQSection>
          <FAQQuestion>Regenerace Tlumičů Audi A6 C6 / Audi A6 C6 Allroad: Více než jen oprava</FAQQuestion>
          <Description>
            Máte problémy s tlumiči? Nabízíme profesionální regeneraci tlumičů pro Audi A6 C6 a A6 C6 Allroad.
            Tento proces obnoví původní funkčnost a zlepší komfort jízdy.
          </Description>
          <Description>
            <strong>Co znamená regenerace tlumičů?</strong><br />
            Regenerace zahrnuje výměnu měchu nebo regeneraci pneumatické části a také hydraulického tlumiče. 
            Tento proces pomáhá při různých problémech, jako je únik vzduchu nebo oleje.
          </Description>
        </FAQSection>

      </Container>
    </div>
  );
};

export default AudiA6C6Repair;
