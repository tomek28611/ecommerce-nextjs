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

const AudiA7Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | Audi-A7-4K</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/Audi-A7-4K" />
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
        <Header>Audi A7 4K (2017-) - Přední tlumič REGENERACE</Header>
        <img src="/audi-a7-front-shock.jpg" alt="auto-dily-audi-a7" className="" />

        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Možnosti Opravy / Regenerace:</strong><br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 14990 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiče – 21990 Kč
        </Description>
        <Description>
          UPOZORNĚNÍ: regenerace měchu je použitelná, pokud tlumič nedrží vzduch. V této možnosti neprovádíme opravu hydraulického tlumiče uvnitř – pokud tlumič bouchá nebo nevykazuje svou účinnost na diagnostické stanici, je výměna pouze měchu bezpředmětná, je nutná i regenerace hydraulického tlumiče.
        </Description>

        <hr />
        <Header>Audi A7 4K (2017-) - Kompresor / čerpadlo odpružení</Header>
        <Description>
          Nový a originální WABCO<br />
          OEM Čísla AUDI:<br />
          4K0616005D, 4K0616005C, 4K0616005B, 4K0616005A, 4K06160054, K0-616-005-D, 4K0-616-005-C, 4K0-616-005-B, 4K0-616-005-A, 4K0-616-005
        </Description>
        <Description>Gwarance: 24 měsíců</Description>
        <Description>Cena: 27990 Kč</Description>
      </Container>
    </div>
  );
};

export default AudiA7Repair;
