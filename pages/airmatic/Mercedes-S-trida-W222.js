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
        <Header>Mercedes S-KLASA W222 (2014-) - AMORTIZÁTOR PŘEDNÍ / ZADNÍ</Header>
        <img src="/W222-front-shock.jpg" alt="auto-dily-222" className="" />

        <Description>verze s pohonem na zadní a s pohonem na 4 kola – 4MATIC</Description>
        
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatiky – 11990 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického amortizátoru – 19990 Kč
        </RepairOptions>

        <Description>
          <strong>UPOZORNĚNÍ:</strong> regenerace měchu se vztahuje v případě, že amortizátor nedrží vzduch,
          při této možnosti neprovádíme opravu hydraulického amortizátoru uvnitř – pokud amortizátor bouchá
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického amortizátoru.
        </Description>

        <hr />
        <Header>Kompresor / čerpadlo – NOVÝ</Header>
        <Description>PRODUCENT OEM Mercedes-Benz: AMK</Description>
        <Description>Cena: 25990 Kč</Description>
        <Description>OEM Čísla Mercedes-Benz: A2223200604, A0993200104</Description>

        <hr />
        <Header>Filtr kompresoru + relé</Header>
        <Description>Cena: 1299 Kč</Description>

        <hr />
        <Header>Regenerace Amortizátorů Mercedes S-Klasa W222 – Klíč k Komfortu a Bezpečnosti Jízdy</Header>
        <Description>
          Mercedes S-Klasa W222, vyráběný od roku 2014, je jedním z nejluxusnějších modelů automobilů dostupných na trhu.
          Jeho elegantní linie, dokonalé zpracování interiéru a inovativní technologie zajišťují nejen luxus, ale také
          vynikající výkon a bezpečnost.
        </Description>
        <Description>
          Jedním z klíčových prvků, které přispívají k těmto vlastnostem, je systém pneumatického odpružení,
          který zahrnuje amortizátory a kompresor odpružení.
        </Description>
        <Description>
          Amortizátory jsou nezbytné pro udržení stability vozidla během jízdy. Absorbují nárazy a vibrace způsobené
          nerovnostmi na silnici, což zajišťuje plynulou a komfortní jízdu. V modelu Mercedes S-Klasa W222
          jsou amortizátory technologicky velmi pokročilé a zajišťují vynikající výkon a komfort.
        </Description>
        <Description>
          Pravidelná kontrola a případná regenerace amortizátorů jsou nezbytné, protože mohou podléhat opotřebení.
          Opotřebované amortizátory mohou vést k nerovnoměrné jízdě a ztrátě kontroly nad vozem.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes S-Klasa W222</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace amortizátorů v Mercedes S-Klasa W222 nezbytná?</strong><br />
            A: Ano, regenerace amortizátorů je klíčová pro udržení luxusního komfortu a bezpečnosti jízdy.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes S-Klasa W222?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes S-Klasa W222?</strong><br />
            A: Oprava kompresoru odpružení je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace amortizátorů v Mercedes S-Klasa W222?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu amortizátorů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace amortizátorů v Mercedes S-Klasa W222 je klíčový proces, který může významně ovlivnit výkon
          a bezpečnost tohoto luxusního automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
