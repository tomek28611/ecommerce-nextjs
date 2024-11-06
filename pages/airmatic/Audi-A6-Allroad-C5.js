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


const AudiA6Repair = () => {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nové a Repasované měchy, tlumiče | Audi-A6-Allroad-C5</title>
        <meta
          name="description"
          content="Repasované měchy a tlumiče pro Mercedes, BMW, Audi, Jaguar, Jeep, Lexus, Porsche a VW. Kvalita a spolehlivost za skvělé ceny!"
        />
        <meta name="keywords" content="Repasované Měchy,repasované měchy Mercedes,Měchy Mercedes, repasované měchy Audi, Měchy Audi,Repasované měchy BMW, Měchy BMW,vzduchové pérování Mercedes,Vzduchové pérování Audi,vzduchové pérování BMW"></meta>
        <link rel="cannonical" href="https://autodilyexpress.cz/airmatic/Audi-A6-Allroad-C5" />
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
        <Header>Audi A6 allroad C5 - Přední měch NOVÝ</Header>
        <Description>Cena: 3990 Kč</Description>
        <Description>Montáž na tlumič: 500 Kč</Description>
        <Description>Montáž sloupku do auta: 2000 Kč</Description>

        <hr />
        <Header>Audi A6 allroad C5 - Přední měch repasovaný</Header>
        <Description>Cena: 3490 Kč</Description>
        <Description>Montáž na tlumič: 500 Kč</Description>
        <Description>Montáž sloupku do auta: 2000 Kč</Description>

        <hr />
        <Header>Audi A6 allroad C5 - Zadní měch NOVÝ (Levý/Pravý)</Header>
        <Description>Cena: 4990 Kč</Description>
        <Description>Montáž na tlumič: 500 Kč</Description>
        <Description>Montáž sloupku do auta: 2000 Kč</Description>

        <hr />
        <Header>Audi A6 allroad C5 - Zadní měch repasovaný</Header>
        <Description>Cena: 3990 Kč</Description>
        <Description>Montáž na tlumič: 500 Kč</Description>
        <Description>Montáž sloupku do auta: 2000 Kč</Description>

        <hr />
        <Header>Audi A6 C5 - Zadní - repas pro pohon předních kol</Header>
        <Description>Cena: 5990 Kč</Description>
        <Description>Montáž měchu do auta: 2000 Kč / kus</Description>

        <hr />
        <Header>Audi A6 allroad C5 - Zadní tlumič NOVÝ SACHS</Header>
        <Description>Cena: 12990 Kč / 2 ks</Description>
        <Description>Montáž: 2000 Kč / ks</Description>
        <Description>Montáž na měch: 500 Kč</Description>
        <Description>OEM číslo AUDI: 4Z7 513 032A, 4Z7 513 031 A</Description>

        <hr />
        <Header>Audi A6 allroad C5 - Kompresor zavěšení</Header>
        <Description>Kompresor / kompresor Audi Allroad C5 (Wabco) Nový</Description>
        <Description>Cena: 14490 Kč</Description>
        <Description>Záruka 24 měsíců</Description>
        <Description>Montáž: 2000 Kč</Description>
        <Description>Výrobce: WABCO</Description>
        <Description>OEM čísla: 4Z7-616-007, 4Z7616007, 4Z7-616-007A, 4Z7616007A</Description>

        <hr />
        <Header>Audi A6 Allroad C5: Možnosti pro vzduchové zavěšení</Header>
        <Description>
          Pokud vlastníte Audi A6 Allroad C5, možná uvažujete o optimalizaci vzduchového zavěšení ve vašem autě.
          Tlumiče, měchy a kompresor jsou klíčové prvky této technologie. I přes vysokou kvalitu mohou tyto díly vyžadovat údržbu nebo opravu.
          V naší nabídce naleznete služby regenerace tlumičů, výměny a údržby.
        </Description>
      </Container>
    </div>
  );
};

export default AudiA6Repair;
