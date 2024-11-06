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

const BMW4Repair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>BMW 4 Gran Coupe (2014-) - Přední tlumič REGENERACE</Header>
      

        <Description>VDC – regulace tvrdosti</Description>
        <Description><strong>Garance: 12 měsíců</strong></Description>
        <RepairOptions>
          Cena: 11990 Kč   Montáž: 2500 Kč
        </RepairOptions>

        <hr />

        <Header>BMW 4 Gran Coupe (2014-) - Zadní tlumič REGENERACE</Header>
        <Description>VDC – regulace tvrdosti</Description>
        <Description><strong>Garance: 12 měsíců</strong></Description>
        <RepairOptions>
          Cena: 9990 Kč   Montáž: 2500 Kč
        </RepairOptions>

        <hr />

        <Header>Specializovaná regenerace tlumičů BMW 4 Gran Coupe (2014-)</Header>
        <Description>
          Zvyšte komfort a bezpečnost jízdy svého BMW 4 Gran Coupe.
        </Description>
        <Description>
          BMW 4 Gran Coupe je symbolem elegance a sportovní dynamiky. Aby tyto vlastnosti zůstaly zachovány, je nezbytná profesionální regenerace tlumičů, která zajišťuje nejen komfort, ale i bezpečnost jízdy.
        </Description>

        <Description>
          <strong>Regenerace předních a zadních tlumičů: Co nabízíme</strong>
        </Description>
        <Description>
          Přední tlumič s regulací tvrdosti (VDC): Regenerace předního tlumiče se systémem VDC umožňuje přizpůsobení tvrdosti odpružení, což je klíčové pro zachování jízdních vlastností BMW.
        </Description>
        <Description>
          Zadní tlumič s regulací tvrdosti (VDC): Podobně jako u předního tlumiče, regenerace zadního tlumiče s VDC umožňuje udržení optimálního komfortu a stability vozidla.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často kladené otázky o regeneraci tlumičů BMW 4 Gran Coupe</FAQQuestion>
          <Description>
            <strong>Q: Jak často by měla být prováděna regenerace tlumičů u BMW 4 Gran Coupe?</strong><br />
            A: Doporučuje se provádět regeneraci tlumičů podle doporučení výrobce nebo při prvních známkách opotřebení.
          </Description>
          <Description>
            <strong>Q: Má regenerace tlumičů vliv na komfort jízdy?</strong><br />
            A: Ano, regenerace tlumičů významně zlepšuje komfort jízdy, snižuje vibrace a zlepšuje stabilitu vozidla.
          </Description>
          <Description>
            <strong>Q: Je regenerace tlumičů nákladná?</strong><br />
            A: Náklady na regeneraci tlumičů jsou výrazně nižší než výměna za nové, přičemž umožňuje obnovit původní jízdní vlastnosti vozidla.
          </Description>
        </FAQSection>

        <Description>
          <strong>Souhrn:</strong><br />
          Regenerace tlumičů u BMW 4 Gran Coupe je klíčová pro udržení komfortu a bezpečnosti jízdy těchto sportovních a elegantních vozů.
        </Description>
      </Container>
    </div>
  );
};

export default BMW4Repair;
