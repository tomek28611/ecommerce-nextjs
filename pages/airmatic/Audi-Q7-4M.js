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

const AudiQ7Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | Audi-Q7-4M</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/Audi-Q7-4M" />
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
        <Header>Audi Q7 4M (2015-2020) / Audi SQ7 4M (2016-2020) - Přední tlumič REGENERACE</Header>
        {/* <img src="/Audi-Q7-front-shock.jpg" alt="auto-dily-motor" /> */}

        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Popis opravy / regenerace:</strong><br />
          UPOZORNĚNÍ: regenerace měchu je možná pouze v případě, že tlumič neudržuje vzduch. Pokud tlumič bouchá nebo nefunguje správně, je nutné provést regeneraci hydraulického tlumiče.
        </Description>
        <RepairOptions>
          Možnosti opravy / regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 11990 Kč<br />
          <strong>Možnost 2:</strong> Kompletní regenerace: Výměna měchu + regenerace hydraulického tlumiče – 19990 Kč
        </RepairOptions>
        <Description>Montáž: 5000 Kč / kus</Description>

        <hr />
        <Header>Audi Q7 4M (2015-2020) / Audi SQ7 4M (2016-2020) - Měch zadní nový LEVÝ / PRAVÝ</Header>
        <Description>
          Cena: 9990 Kč<br />
          OEM čísla AUDI:<br />
          LEVÝ: 4M0616001P, 4M0616001AA<br />
          PRAVÝ: 44M0616002P, 4M0616002AA<br />
          Vhodné pro všechny verze motorů
        </Description>

        <hr />
        <Header>Audi Q7 4M (2015-2020) / Audi SQ7 4M (2016-2020) - Kompresor / čerpadlo odpružení - NOVÝ</Header>
    
        <Description>Cena: 28490 Kč</Description>
        <Description>
          Nový, výrobce WABCO – vyrobeno v Německu<br />
          OEM Číslo: 4MO616005G<br />
          Záruka: 24 měsíců
        </Description>

        <hr />
        <Header>Závěrem: Regenerace tlumičů pro Audi Q7 4M a Audi SQ7 4M</Header>
        <Description>
          Audi Q7 4M a Audi SQ7 4M jsou modely, které vyžadují kvalitní údržbu. Regenerace tlumičů a dalších součástí odpružení je nezbytná pro zachování komfortu a bezpečnosti jízdy.
        </Description>
        
        <FAQSection>
          <FAQQuestion>FAQ – Často kladené dotazy o Audi Q7 4M a Audi SQ7 4M</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů u Audi Q7 4M nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je důležitá pro zajištění komfortní a bezpečné jízdy.
          </Description>
          <Description>
            <strong>Q: Jak poznám poškozený měch u Audi Q7 4M?</strong><br />
            A: Poškozený měch může způsobit nestabilní jízdu a hluk.
          </Description>
          <Description>
            <strong>Q: Můžu si opravit kompresor sám?</strong><br />
            A: Doporučujeme opravu svěřit odborníkům, protože kompresor vyžaduje odborný zásah.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů pro Audi Q7 4M je klíčová pro zajištění optimálního výkonu a bezpečnosti vozidla.
        </Description>
      </Container>
    </div>
  );
};

export default AudiQ7Repair;
