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

const MercedesEClassRepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes GLE / GLS W167 / X167 (2018-) - tlumič Přední REGENERACE</Header>
        <Description>
          <strong>Možnosti Opravy / Regenerace:</strong><br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 14990 Kč / kus<br />
          (Výměna měchu má použití v případě, že tlumič nedrží vzduch.)
        </Description>
        <RepairOptions>
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 24990 Kč / kus<br />
          (Regenerace hydraulického tlumiču má použití, pokud tlumič teče (olej), bouchá nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici.)
        </RepairOptions>
        <Description>Montáž: 4000 Kč / kus</Description>

        <hr />
        <Header>Mercedes GLE / GLS W167 / X167 (2018-) - tlumič Zadní REGENERACE</Header>
        <Description>Cena: 12990 Kč   Montáž: 4000 Kč / kus</Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
