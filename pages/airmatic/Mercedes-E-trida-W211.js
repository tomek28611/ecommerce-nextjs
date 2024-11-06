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

const MercedesERepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes E Klasa W211 (2002-2009) - tlumič Přední REGENERACE</Header>
        <img src="/W211-front-shock.jpg" alt="auto-dily-motor" className="" />

        <Description>
          <strong>Popis Opravy / Regenerace:</strong><br />
          UPOZORNĚNÍ: Výměna měchu má použití v případě, že tlumič nedrží vzduch. Při této možnosti
          neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá nebo nemá svou
          účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový je v tomto případě
          bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu na nový / regenerace pneumatické části – 6990 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 12990 Kč
        </RepairOptions>
        <Description>Montáž: 2000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Klasa W211 (2002-2009) - tlumič Přední 4 MATIC REGENERACE</Header>
        <Description>Cena: 14990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Klasa W211 (2002-2009) - Měch Zadní sedan / kombi REGENERACE AIRMATIC</Header>
        <Description>Cena: 5990 Kč   Montáž: 2000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Klasa W211 (2002-2009) - Měch Zadní kombi REGENERACE</Header>
        <Description>Cena: 5990 Kč   Montáž: 2000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E Klasa W211 (2002-2009) - tlumič Zadní REGENERACE</Header>
        <Description>Cena: 10990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Kompresor / čerpadlo / pumpa odpružení Mercedes E klasa W211</Header>
        <img src="/W211-compressor.jpg" alt="auto-dily-motor" className="" />
        <Description>Cena: 12990 Kč</Description>
        <Description>
          Nový, originální WABCO (vyrobeno v Německu)<br />
          OEM Čísla MERCEDES:<br />
          A2113200304
        </Description>

        <hr />
        <Header>Regenerace tlumičů Mercedes E Klasa W211 – Klíč k Dokonalé Jízdě</Header>
        <Description>
          Mercedes E Klasa W211 je výjimečný model, který spojuje eleganci a inovaci. 
          Pravidelná údržba a regenerace tlumičů jsou klíčovými prvky tohoto procesu.
        </Description>
        <Description>
          V tomto článku se podíváme na to, jak regenerace tlumičů a kompresoru spolupracují 
          v systému odpružení těchto modelů, a jak může proces regenerace obnovit původní výkon.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes E Klasa W211</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v Mercedes E Klasa W211 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v modelech W211.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes E Klasa W211?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem v modelech W211.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes E Klasa W211?</strong><br />
            A: Oprava kompresoru odpružení v modelech W211 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů v Mercedes E Klasa W211?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů v Mercedes E Klasa W211 je klíčový proces, který může významně ovlivnit výkon a bezpečnost tohoto luxusního automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesERepair;
