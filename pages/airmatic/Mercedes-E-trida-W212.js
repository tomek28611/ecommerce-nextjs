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
        <Header>Mercedes E třída W212 (2009- ) - Amortizátor Přední AIRMATIC – REGENERACE</Header>
        <img src="" alt="auto-dily-212" className="" />

        <RepairOptions>
          Možnosti Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový – 11990 Kč<br />
          <strong>Možnost 2:</strong> Nový měch + regenerace hydraulického amortizátoru – 23990 Kč
        </RepairOptions>
        <Description>
          UPOZORNĚNÍ: Výměna měchu se vztahuje v případě, že amortizátor nedrží vzduch. 
          Při této možnosti neprovádíme opravu hydraulického amortizátoru uvnitř – pokud amortizátor bouchá 
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový 
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického amortizátoru, což je 
          Možnost č. 2.
        </Description>
        <Description>Montáž: 3000 Kč</Description>
        <Description>Dodatečně: Výměna osvědčení na nové – 1000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E třída W212 (2009- ) - Amortizátor Zadní REGENERACE (kombi/sedan)</Header>
        <Description>GWARANCJA 12 měsíců</Description>
        <Description>Cena: 10990 Kč Montáž: 3500 Kč</Description>

        <hr />
        <Header>Mercedes E třída W212 (2009- ) - Měch Zadní NOVÝ</Header>
        <Description>DOSTUPNÝ LEVÝ / PRAVÝ</Description>
        <Description>Cena: 5490 Kč Montáž: 2000 Kč / kus</Description>

        <hr />
        <Header>Mercedes E třída W212 (2009- ) - Kompresor / čerpadlo / pumpa odpružení</Header>
        <Description>Nový a originální WABCO, made in Germany</Description>
        <Description>Gwarancja producenta: 24 měsíců</Description>
        <Description>Cena: 15490 Kč Montáž: 2500 Kč</Description>

        <hr />
        <Header>Rozdělovač / blok ventilu ORIGINÁL RAPA</Header>
        <Description>Čísla OE: A2513200058, A2513200058, A2123200358, A2123200358</Description>
        <Description>Cena: 10990 Kč</Description>

        <hr />
        <Description>
          Posiadáme w sprzedaży również przekaźniki i filtry do kompresorów airmatic niezbędne przy montażu kompresorów do Mercedesa.
        </Description>
        <Description>
          Objednávky telefonicky na čerpadla a další nové díly pod číslem: +48 694 734 570.
        </Description>
        <Description>
          DODATKOVĚ: V nabídce máme také vzduchové filtry a relé nezbytné při montáži nové čerpadlo.
        </Description>
        <Description>FILTR + RELÉ = 990 Kč</Description>

        <hr />
        <Header>Regenerace Amortizátorů v Mercedes-Benz E-Klasa (W212): Udržení Legendárního Komfortu Jízdy</Header>
        <Description>
          Mercedes-Benz E-Klasa (W212) je ztělesněním elegance a výkonu. Klíčem k zachování těchto vlastností 
          je dokonalý systém odpružení, ve kterém regenerace amortizátorů hraje důležitou roli.
        </Description>
        <Description>
          Elementy Závěsu v Mercedes-Benz E-Klasa (W212).
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes E-Klasa W212</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace amortizátorů v Mercedes E-Klasa W212 nezbytná?</strong><br />
            A: Ano, regenerace amortizátorů je klíčová pro zachování luxusního komfortu a bezpečnosti jízdy.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes E-Klasa W212?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes E-Klasa W212?</strong><br />
            A: Oprava kompresoru odpružení je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace amortizátorů v Mercedes E-Klasa W212?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu amortizátorů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumowanie:</strong><br />
          Regenerace amortizátorů v Mercedes E-Klasa W212 je klíčový proces, který může významně ovlivnit výkon a bezpečnost.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
