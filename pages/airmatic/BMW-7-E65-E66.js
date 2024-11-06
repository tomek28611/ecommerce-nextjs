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

const BMW7Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | BMW-7-E65-E66</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/BMW-7-E65-E66" />
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
        <Header>BMW 7 E65 / E66 (2001-2005) - Tlumič Zadní REGENERACE</Header>
        {/* <img src="/BMW7-rear-shock.jpg" alt="auto-dily-bmw" className="" /> */}

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
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 9490 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 16990 Kč
        </RepairOptions>
        <Description>Montáž: 30000 Kč / kus</Description>

        <hr />
        <Header>BMW 7 E65 / E66 (2001-2005) - Tlumič Zadní - verze na pružině VDC</Header>
        <Description>Cena: 11990 Kč   Montáž: 30000 Kč / kus</Description>

        <hr />
        <Header>BMW 7 E65 / E66 (2001-2005) - Tlumič Přední - verze na pružině VDC</Header>
        <Description>Cena: 11990 Kč   Montáž: 30000 Kč / kus</Description>

        <hr />
        <Header>Regenerace Tlumičů BMW 7 E65 – Mistrovství Inženýrství</Header>
        <Description>
          BMW 7 E65 je vlajkový model značky BMW, známý pro svou technologickou pokročilost a pohodlí při jízdě. 
          Regenerace tlumičů je klíčovým procesem pro udržení jeho vynikajícího výkonu a bezpečnosti.
        </Description>
        <Description>
          Tento proces regenerace zahrnuje důkladnou kontrolu a opravy, které obnovují původní výkon tlumičů, čímž zajišťují
          hladkou a bezpečnou jízdu.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o BMW 7 E65 / E66</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v BMW 7 E65 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v modelu BMW E65.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v BMW 7 E65?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Můžu si sám opravit tlumič v BMW 7 E65?</strong><br />
            A: Oprava tlumiče je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá regenerace tlumičů v BMW 7 E65?</strong><br />
            A: Regenerace může trvat několik hodin až dní v závislosti na stavu tlumičů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumowanie:</strong><br />
          Regenerace tlumičů v BMW 7 E65 je klíčová pro udržení vysokého standardu jízdy a bezpečnosti vozu.
        </Description>
      </Container>
    </div>
  );
};

export default BMW7Repair;
