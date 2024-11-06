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

const MercedesSLRepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes SL W231 (2012 – 20xx) - tlumič Přední / Zadní</Header>
        <Description>
          <strong>Varianty:</strong><br />
          Standardní verze / AMG verze<br />
          (hydraulické zavěšení ABC – Active Body Control)
        </Description>
        <RepairOptions>
          <strong>Regenerace</strong><br />
          Cena: 24990 Kč netto / kus<br />
          Montáž: 3000 Kč netto / kus
        </RepairOptions>
      </Container>
    </div>
  );
};

export default MercedesSLRepair;
