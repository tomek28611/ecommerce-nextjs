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
        <Header>Mercedes E-Klasa W166 (2011-) - Měch Přední REGENERACE</Header>
        <img src="/W213-front-shock-4x4.jpg" alt="auto-dily-motor" className="" />

        <Description>Cena: 8990 Kč     Montáž do auta: 2500 Kč</Description>
        <Description>náklady na instalaci na amortizátor: 1000 Kč</Description>
        <Description>
          <strong>Upozornění:</strong><br />
          Výměna měchu se vztahuje v případě, že amortizátor nedrží vzduch. 
          Při této možnosti neprovádíme opravu hydraulického amortizátoru uvnitř – pokud amortizátor bouchá 
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový 
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického amortizátoru.
        </Description>

        <hr />
        <Header>Mercedes E-Klasa W166 (2011-) - Měch Přední NOVÝ</Header>
        <Description>Cena: 9990 Kč     Montáž do auta: 2500 Kč</Description>
        <Description>náklady na instalaci na amortizátor: 1000 Kč</Description>
        <Description>
          <strong>Upozornění:</strong><br />
          Výměna měchu se vztahuje v případě, že amortizátor nedrží vzduch. 
          Při této možnosti neprovádíme opravu hydraulického amortizátoru uvnitř – pokud amortizátor bouchá 
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový 
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického amortizátoru.
        </Description>

        <hr />
        <Header>Mercedes E-Klasa W166 (2011-) - Amortizátor Přední REGENERACE:</Header>
        <RepairOptions>
          měch + regenerace hydraulického amortizátoru – 14990 Kč<br />
          Montáž do auta: 3000 Kč
        </RepairOptions>

        <hr />
        <Header>Mercedes E-Klasa W166 (2011-) - Amortizátor Zadní REGENERACE</Header>
        <Description>Cena: 8990 Kč     Montáž: 3000 Kč</Description>

        <hr />
        <Header>Mercedes E-Klasa W166 (2011-) - Měch Zadní NOVÝ</Header>
        <Description>
          24 MĚSÍCŮ ZÁRUKA<br />
          Cena: 2750 Kč     Montáž: 1250 Kč<br />
          ZÁRUKA: 24 MĚSÍCŮ (bez limitu kilometrů)
        </Description>

        <hr />
        <Header>Mercedes E-Klasa W166 (2011-) - Měch Zadní DUNLOP</Header>
        <Description>Cena: 5990 Kč     Montáž: 1250 Kč</Description>

        <hr />
        <Header>Mercedes E-Klasa W166 (2011-) - Kompresor / čerpadlo NOVÝ !!!</Header>
        <Description>
          VÝROBCE OEM Mercedes-Benz: AMK<br />
          Cena: 15990 Kč<br />
          Montáž: 2500 Kč<br />
          Čísla MB: A1663200104, 1663200104
        </Description>

        <hr />
        <Header>Regenerace Amortizátorů v Mercedes E-Klasa W166: Klíč k Komfortu a Bezpečnosti</Header>
        <Description>
          Mercedes E-Klasa W166 je vozidlo, které se vyznačuje vysokým komfortem jízdy a solidními výkony na silnici. 
          Regenerace amortizátorů je klíčovým prvkem pro udržení pohodlí a bezpečnosti jízdy.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes E-Klasa W166</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace amortizátorů v Mercedes E-Klasa W166 nezbytná?</strong><br />
            A: Ano, regenerace amortizátorů je klíčová pro zachování komfortu a bezpečnosti jízdy v modelech W166.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes E-Klasa W166?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes E-Klasa W166?</strong><br />
            A: Oprava kompresoru je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace amortizátorů v Mercedes E-Klasa W166?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu amortizátorů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace amortizátorů v Mercedes E-Klasa W166 je klíčový proces pro výkon a bezpečnost automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
