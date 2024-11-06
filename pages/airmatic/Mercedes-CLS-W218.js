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

const MercedesCLSRepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes CLS W218 (2011- ) - tlumič PŘEDNÍ AIRMATIC</Header>
       

        <RepairOptions>
          Možnosti regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový – 11990 Kč<br />
          <strong>Možnost 2:</strong> Měch nový + regenerace hydraulického tlumiču – 23990 Kč
        </RepairOptions>
        <Description>
          UPOZORNĚNÍ: Výměna měchu má použití, pokud tlumič nedrží vzduch. Při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový v tomto případě je bezpředmětná – nezbytná je také regenerace hydraulického tlumiču, tedy možnost č. 2.
        </Description>
        <Description>Montáž: 3000 Kč</Description>
        <Description>Dodatečně: Výměna krytu na nový – 1000 Kč / kus</Description>

        <hr />
        <Header>Mercedes CLS W218 (2011- ) - tlumič PŘEDNÍ AIRMATIC 4 MATIC</Header>
        <RepairOptions>
          Možnosti regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový – 11990 Kč<br />
          <strong>Možnost 2:</strong> Měch nový + regenerace hydraulického tlumiču – 23990 Kč
        </RepairOptions>
        <Description>
          UPOZORNĚNÍ: Výměna měchu má použití, pokud tlumič nedrží vzduch. Při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový v tomto případě je bezpředmětná – nezbytná je také regenerace hydraulického tlumiču, tedy možnost č. 2.
        </Description>
        <Description>Montáž: 3000 Kč</Description>
        <Description>Dodatečně: Výměna krytu na nový – 1000 Kč / kus</Description>

        <hr />
        <Header>Mercedes CLS W218 (2011- ) - tlumič ZADNÍ REGENERACE (kombi / sedan)</Header>
        <Description>Cena: 10990 Kč    Montáž: 3500 Kč</Description>

        <hr />
        <Header>Mercedes CLS W218 (2011- ) - Měch zadní NOVÝ</Header>
        <Description>DOSTUPNÝ LEVÝ / PRAVÝ</Description>
        <Description>Cena: 5490 Kč    Montáž: 2000 Kč</Description>

        <hr />
        <Header>Kompresor / čerpadlo / pumpa odpružení</Header>
        <Header>Mercedes CLS W218 (2011- ) - Nový a originální WABCO</Header>
        <Description>Vyrobeno v Německu</Description>
        <Description>Garance výrobce: 24 měsíců</Description>
        <Description>Katalogové číslo: A2123200404, A2123200104</Description>
        <Description>Cena: 15490 Kč    Montáž: 2500 Kč</Description>

        <hr />
        <Header>ROZDĚLOVAČ / BLOK VENTILŮ ORIGINÁL RAPA</Header>
        <Description>Čísla OE: A2513200058, A2513200058, A2123200358, A2123200358</Description>
        <Description>Cena: 10990 Kč</Description>

        <hr />
        <Description>
          Nabízíme také relé a filtry pro kompresory AIRMATIC nezbytné při montáži kompresorů do Mercedesu.
        </Description>
        <Description>
          Telefonické objednávky na kompresory a jiné nové díly na čísle: +48 694 734 570
        </Description>
        <Description>
          DODATEČNĚ: V nabídce máme také vzduchové filtry a relé nezbytné při montáži nového kompresoru
          FILTR + RELÉ = 990 Kč
        </Description>

        <hr />
        <Header>Regenerace tlumičů a Další Služby pro Mercedes CLS W218</Header>
        <Description>
          Regenerace tlumičů je jedním z mnoha oborů, na které se specializuje náš autoservis. Správně udržované tlumičy jsou klíčem k pohodlné a bezpečné jízdě, zejména pokud mluvíme o automobilech takové třídy jako Mercedes CLS W218. Význam správného stavu tlumičů je neocenitelný, proto nabízíme řadu služeb, které vám pomohou udržet váš vůz v nejlepší kondici.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesCLSRepair;
