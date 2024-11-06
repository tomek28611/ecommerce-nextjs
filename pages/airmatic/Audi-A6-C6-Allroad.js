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

const AudiA6C6Repair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Audi A6 C6 / Audi A6 C6 Allroad - Tlumič Přední REGENERACE</Header>
        
        <Description>Možnosti Opravy:</Description>
        <RepairOptions>
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 7990 Kč<br />
          <strong>Možnost 2:</strong> Regenerace hydraulického tlumiče – 9490 Kč<br />
          <strong>Možnost 1 + 2:</strong> Kompletní regenerace (výměna měchu a regenerace tlumiče) – 14990 Kč
        </RepairOptions>
        <Description>Montáž do auta: 3000 Kč / kus</Description>

        <hr />
        <Header>Audi A6 C6 / Audi A6 C6 Allroad - Zadní Měch NOVÝ</Header>
        <Description>
          Záruka 12 měsíců<br />
          Katalogová čísla AUDI:<br />
          4F0 616 001, 4F0 616 001 J
        </Description>
        <Description>Cena: 4990 Kč   Montáž: 2000 Kč / kus</Description>

        <hr />
        <Header>Audi A6 C6 / Audi A6 C6 Allroad - Tlumič Zadní REGENERACE</Header>
        <Description>Cena: 8990 Kč   Montáž: 2500 Kč / kus</Description>

        <hr />
        <Header>Nový Kompresor / Čerpadlo / Pumpa Odpružení</Header>
        <Description>
          WABCO<br />
          Nový senzor teploty!<br />
          Záruka 24 měsíců<br />
          Cena: 18990 Kč
        </Description>
        <Description>
          Katalogová čísla AUDI:<br />
          4F0 616 005 E, 4F0 616 005 F, 4F0 616 006, 4F0 616 005 B
        </Description>
        <Description>Filtr + relé pro montáž nové pumpy: 990 Kč</Description>

        <hr />
        <Header>Rozdělovač / Blok Ventilů - Originál RAPA</Header>
        <Description>
          OE čísla:<br />
          4F0616013 / 4F0 616 013 pro A6 C6<br />
          4E0616013 pro A8 D3 S8 / Phaeton<br />
          4Z7616013 pro A6 C5
        </Description>
        <Description>Cena: 9990 Kč</Description>

        <FAQSection>
          <FAQQuestion>Regenerace Tlumičů Audi A6 C6 / Audi A6 C6 Allroad: Více než jen oprava</FAQQuestion>
          <Description>
            Máte problémy s tlumiči? Nabízíme profesionální regeneraci tlumičů pro Audi A6 C6 a A6 C6 Allroad.
            Tento proces obnoví původní funkčnost a zlepší komfort jízdy.
          </Description>
          <Description>
            <strong>Co znamená regenerace tlumičů?</strong><br />
            Regenerace zahrnuje výměnu měchu nebo regeneraci pneumatické části a také hydraulického tlumiče. 
            Tento proces pomáhá při různých problémech, jako je únik vzduchu nebo oleje.
          </Description>
        </FAQSection>

      </Container>
    </div>
  );
};

export default AudiA6C6Repair;
