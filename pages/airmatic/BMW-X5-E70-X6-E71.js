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

const BMWX5Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | BMW-X5-E70-X6-E71</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/BMW-X5-E70-X6-E71" />
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
      <Header>BMW X5 E70 / BMW X6 E71 - Zadní Měch NOVÝ</Header>
      <Description>Cena: 2490 Kč Montáž: 1500 Kč</Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - Zadní Měch NOVÝ DUNLOP</Header>
      <Description>Cena: 4990 Kč Montáž: 1500 Kč</Description>
      <Description>Garance 24 měsíců</Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - tlumič Přední / Zadní REGENERACE</Header>
      <Description>Garance 12 měsíců</Description>
      <Description>Cena: 11990 Kč Montáž: 3000 Kč</Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - Kompresor / Čerpadlo (AMK) NOVÝ</Header>
      <Description>Cena: 15990 Kč Montáž: 2000 Kč</Description>
      <Description>
        Originál na první montáž v BMW – Firma AMK<br />
        Vyrobeno v Německu<br />
        OEM Číslo: 37206859714
      </Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - Kompresor / Čerpadlo / Pumpa odpružení</Header>
      <Description>
        Sada s filtrem, hadicí a relé<br />
        Originál na první montáž v BMW – Firma AMK<br />
        Vyrobeno v Německu<br />
        Garance 24 měsíců
      </Description>
      <Description>Cena: 17490 Kč</Description>
      <hr />

      <Header>Regenerace tlumičů v Modelech BMW X5 E70 a BMW X6 E71: Kompletní Průvodce</Header>
      <Description>
        Jízda v automobilu není jen o pohodlí, ale také o komfortu a bezpečnosti. V modelech BMW X5 E70 a BMW X6 E71 hrají tlumičy klíčovou roli při zajištění těchto vlastností. Tento průvodce vám ukáže, proč je regenerace tlumičů důležitá a jaké součásti tvoří systém odpružení v těchto modelech.
      </Description>

      <FAQSection>
        <FAQQuestion>FAQ – Často Kladené Dotazy o BMW X5 E70 / BMW X6 E71</FAQQuestion>
        <Description>
          <strong>Q: Je regenerace tlumičů nezbytná v modelech BMW X5 E70 / BMW X6 E71?</strong><br />
          A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v těchto modelech.
        </Description>
        <Description>
          <strong>Q: Jaké jsou příznaky opotřebovaných tlumičů v modelech BMW X5 E70 / BMW X6 E71?</strong><br />
          A: Mezi příznaky patří zhoršení komfortu jízdy, nadměrné otřesy a nestabilita vozidla.
        </Description>
        <Description>
          <strong>Q: Můžu si sám vyměnit měch tlumiču v modelech BMW X5 E70 / BMW X6 E71?</strong><br />
          A: Doporučujeme tuto službu svěřit odborníkům, aby byla zajištěna správná instalace a bezpečnost.
        </Description>
      </FAQSection>

      <Description>
        <strong>Shrnutí:</strong><br />
        Regenerace tlumičů v modelech BMW X5 E70 a BMW X6 E71 je klíčovým procesem, který výrazně ovlivňuje výkon a bezpečnost těchto luxusních vozů.
      </Description>
    </Container>
    </div>
  );
};

export default BMWX5Repair;
