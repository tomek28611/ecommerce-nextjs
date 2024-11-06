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

const BMW4Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | BMW-4-Gran-Coupe</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/BMW-4-Gran-Coupe" />
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
        <Header>BMW 4 Gran Coupe (2014-) - Přední tlumič REGENERACE</Header>
      

        <Description>VDC – regulace tvrdosti</Description>
        <Description><strong>Garance: 12 měsíců</strong></Description>
        <RepairOptions>
          Cena: 11990 Kč   Montáž: 2500 Kč
        </RepairOptions>

        <hr />

        <Header>BMW 4 Gran Coupe (2014-) - Zadní tlumič REGENERACE</Header>
        <Description>VDC – regulace tvrdosti</Description>
        <Description><strong>Garance: 12 měsíců</strong></Description>
        <RepairOptions>
          Cena: 9990 Kč   Montáž: 2500 Kč
        </RepairOptions>

        <hr />

        <Header>Specializovaná regenerace tlumičů BMW 4 Gran Coupe (2014-)</Header>
        <Description>
          Zvyšte komfort a bezpečnost jízdy svého BMW 4 Gran Coupe.
        </Description>
        <Description>
          BMW 4 Gran Coupe je symbolem elegance a sportovní dynamiky. Aby tyto vlastnosti zůstaly zachovány, je nezbytná profesionální regenerace tlumičů, která zajišťuje nejen komfort, ale i bezpečnost jízdy.
        </Description>

        <Description>
          <strong>Regenerace předních a zadních tlumičů: Co nabízíme</strong>
        </Description>
        <Description>
          Přední tlumič s regulací tvrdosti (VDC): Regenerace předního tlumiče se systémem VDC umožňuje přizpůsobení tvrdosti odpružení, což je klíčové pro zachování jízdních vlastností BMW.
        </Description>
        <Description>
          Zadní tlumič s regulací tvrdosti (VDC): Podobně jako u předního tlumiče, regenerace zadního tlumiče s VDC umožňuje udržení optimálního komfortu a stability vozidla.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často kladené otázky o regeneraci tlumičů BMW 4 Gran Coupe</FAQQuestion>
          <Description>
            <strong>Q: Jak často by měla být prováděna regenerace tlumičů u BMW 4 Gran Coupe?</strong><br />
            A: Doporučuje se provádět regeneraci tlumičů podle doporučení výrobce nebo při prvních známkách opotřebení.
          </Description>
          <Description>
            <strong>Q: Má regenerace tlumičů vliv na komfort jízdy?</strong><br />
            A: Ano, regenerace tlumičů významně zlepšuje komfort jízdy, snižuje vibrace a zlepšuje stabilitu vozidla.
          </Description>
          <Description>
            <strong>Q: Je regenerace tlumičů nákladná?</strong><br />
            A: Náklady na regeneraci tlumičů jsou výrazně nižší než výměna za nové, přičemž umožňuje obnovit původní jízdní vlastnosti vozidla.
          </Description>
        </FAQSection>

        <Description>
          <strong>Souhrn:</strong><br />
          Regenerace tlumičů u BMW 4 Gran Coupe je klíčová pro udržení komfortu a bezpečnosti jízdy těchto sportovních a elegantních vozů.
        </Description>
      </Container>
    </div>
  );
};

export default BMW4Repair;
