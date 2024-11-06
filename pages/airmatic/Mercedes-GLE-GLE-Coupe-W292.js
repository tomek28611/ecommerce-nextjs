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
        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - Měch Přední REGENERACE</Header>
        <Description>Cena: 8990 Kč Montáž do auta: 2500 Kč</Description>
        <Description>náklady na montáž na tlumič: 1000 Kč</Description>
        <Description>
          <strong>UPOZORNĚNÍ:</strong> Výměna měchu se vztahuje v případě, že tlumič nedrží vzduch,
          při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.
        </Description>

        <hr />

        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - Měch Přední NOVÝ</Header>
        <Description>Cena: 9990 Kč Montáž do auta: 2500 Kč</Description>
        <Description>náklady na montáž na tlumič: 1000 Kč</Description>
        <Description>
          <strong>UPOZORNĚNÍ:</strong> Výměna měchu se vztahuje v případě, že tlumič nedrží vzduch,
          při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.
        </Description>

        <hr />

        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - tlumič Přední REGENERACE</Header>
        <RepairOptions>
          Měch + regenerace hydraulického tlumiču – 21990 Kč<br />
          Montáž do auta: 3000 Kč
        </RepairOptions>

        <hr />

        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - tlumič Zadní – regenerace</Header>
        <Description>Cena: 11990 Kč Montáž: 3000 Kč</Description>

        <hr />

        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - Měch Zadní NOVÝ</Header>
        <Description>Cena: 2750 Kč Montáž: 1250 Kč</Description>

        <hr />

        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - Měch Zadní NOVÝ DUNLOP</Header>
        <Description>Cena: 5990 Kč Montáž: 1250 Kč</Description>

        <hr />

        <Header>Mercedes GLE / GLE COUPE W292 (2015-2019) - Kompresor / čerpadlo NOVÝ!!!</Header>
        <Description>Cena: 15990 Kč Montáž: 3000 Kč</Description>
        <Description>
          Výrobce OEM Mercedes-Benz: AMK
        </Description>

        <hr />

        <Header>Regenerace tlumičů Mercedes GLE/GLE Coupe W292</Header>
        <Description>
          Profesionální služby pro váš Mercedes-Benz. Pravidelná regenerace tlumičů je nezbytná
          pro zachování luxusu a komfortu jízdy. V našem servisu poskytujeme komplexní služby
          a regeneraci systému odpružení pro model Mercedes GLE/GLE Coupe W292.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes GLE / GLE Coupe W292</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v Mercedes GLE / GLE Coupe W292 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes GLE / GLE Coupe W292?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes GLE / GLE Coupe W292?</strong><br />
            A: Oprava kompresoru odpružení je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů v Mercedes GLE / GLE Coupe W292?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Shrnutí:</strong><br />
          Regenerace tlumičů v Mercedes GLE / GLE Coupe W292 je klíčový proces pro výkon a bezpečnost těchto luxusních automobilů.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesERepair;
