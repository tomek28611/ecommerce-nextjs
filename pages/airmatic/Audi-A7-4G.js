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
        <title>Nové a Repasované měchy, tlumiče | Audi-A7-4G</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/Audi-A7-4G" />
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
        <Header>Audi A7 (2011-2018) - Přední Tlumič REGENERACE</Header>
        <Description><strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 8990 Kč</Description>
        <Description>Montáž na tlumič: 1000 Kč</Description>
        <Description>(Výměna měchu se vztahuje na případy, kdy tlumič neudrží vzduch.)</Description>

        <Description><strong>Možnost 2:</strong> Regenerace hydraulického tlumiče – 9490 Kč</Description>
        <Description>(Regenerace hydraulického tlumiče se vztahuje na případy, kdy tlumič teče, bouchá nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici.)</Description>

        <Description><strong>Možnost 1 + 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiče – 14990 Kč</Description>
        <Description>Montáž do vozidla: 4500 Kč / kus</Description>

        <hr />
        <Header>Audi A7 (2011-2018) - Zadní Tlumič REGENERACE</Header>
        <Description>Cena: 9990 Kč</Description>
        <Description>Montáž: 2500 Kč</Description>

        <hr />
        <Header>Audi A7 (2011-) - Zadní Měch NOVÝ</Header>
       
        <Description>Cena: 5990 Kč</Description>
        <Description>Montáž: 2000 Kč</Description>
        <Description>OEM Čísla AUDI:<br />4G0616002T, 4G0616002Q, 4G0616001AA, 4G0616002R</Description>

        <hr />
        <Header>Audi A7 (2011-) - Kompresor Závěsu</Header>
     
        <Description>Cena: 16490 Kč</Description>
        <Description>Nový a originální WABCO</Description>
        <Description>OEM Čísla AUDI:<br />4G0 616 005 C, 4G0616005C</Description>
        <Description>Garance: 24 měsíců</Description>

        <Description><strong>Doplněk:</strong><br />V nabídce máme také vzduchové filtry a relé potřebné pro montáž nového kompresoru do Audi.<br />FILTR + RELÉ = 990 Kč</Description>

        <hr />
        <Header>Rozvaděč / Blok Ventilů Originál RAPA</Header>
        <Description>OEM Čísla:<br />4H0616013, 3Y0616006, 3Y0616007, 3Y0616006A, 4H0616005C, 4G0616005C, 4H0616013B, 4H0616013A</Description>
        <Description>Cena: 9990 Kč</Description>

        <hr />
        <Header>Kompletní Průvodce Regenerací Tlumičů pro Audi A7</Header>
        <Description>
          Audi A7, známé pro svůj elegantní design a výkonnost, se velmi spoléhá na efektivní systém odpružení. 
          Pravidelná údržba a včasná regenerace tlumičů, včetně měchů a kompresorů, jsou klíčové pro zajištění optimálního výkonu vozidla.
        </Description>
        <Description>
          <strong>Regenerace Tlumičů:</strong> Co potřebujete vědět<br />
          Regenerace měchu: Tento proces zahrnuje výměnu měchu, když neudrží vzduch, což zajišťuje plynulou a stabilní jízdu.
        </Description>
        <Description>
          <strong>Význam kompresoru závěsu:</strong><br />
          Důležitá součást pneumatického systému odpružení Audi A7, kompresor vyžaduje pravidelné kontroly a údržbu. 
          Správně fungující kompresor zajišťuje dlouhou životnost a efektivnost závěsu vozu.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy</FAQQuestion>
          <Description>
            <strong>Q: Jak často bych měl regenerovat tlumiče svého Audi A7?</strong><br />
            A: Četnost závisí na vašich jízdních zvyklostech a údržbě.
          </Description>
          <Description>
            <strong>Q: Jak poznám, že je potřeba regenerace tlumiče?</strong><br />
            A: Pokud váš vůz ztrácí kontrolu nad stabilitou nebo slyšíte nezvyklé zvuky, může být čas na regeneraci.
          </Description>
        </FAQSection>
      </Container>
    </div>
  );
};

export default AudiA7Repair;
