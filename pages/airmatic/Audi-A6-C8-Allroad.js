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

const AudiA6C8Repair = () => {
  return (
    <div>
      <Header1 />

      <Container>
        <Header>Audi A6 C8 / Audi A6 C8 Allroad (2018-) - Tlumič Přední REGENERACE</Header>
        <Description>Všechny motorizace</Description>

        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 14990 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiče – 21990 Kč
        </RepairOptions>

        <Description>
          <strong>Upozornění:</strong> Regenerace měchu je použitelná v případě, že tlumič neudrží vzduch.
          Při této možnosti neprovádíme opravu hydraulického tlumiče uvnitř – pokud tlumič bouchá nebo nemá
          svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu je v tomto případě bezpředmětná.
          Je nezbytné provést také regeneraci hydraulického tlumiče.
        </Description>

        <hr />
        <Header>Audi A6 C8 / Audi A6 C8 Allroad (2018-) - Kompresor / Čerpadlo odpružení</Header>
        <Description>Nový, originální WABCO</Description>

        <Description>
          OEM Čísla AUDI:<br />
          4K0616005D, 4K0616005C, 4K0616005B, 4K0616005A, 4K06160054, K0-616-005-D, 4K0-616-005-C, 4K0-616-005-B, 4K0-616-005-A, 4K0-616-005
        </Description>
        <Description>Cena: 27990 Kč</Description>
        <Description>Záruka: 24 měsíců</Description>
      </Container>
    </div>
  );
};

export default AudiA6C8Repair;
