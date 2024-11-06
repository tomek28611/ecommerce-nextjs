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

const AudiA7Repair = () => {
  return (
    <div>
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
