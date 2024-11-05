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
        <Header>Fabricky nový měch zadního odpružení</Header>
        <img src="/Vito-W638-rear-suspension-bag.jpg" alt="auto-dily-motor" className="" />

        <Description>Mercedes Benz V-Class / Vito W638 (1996 – 2003), všechny verze motoru</Description>
        <Description>
          <strong>OEM čísla MERCEDES:</strong><br />
          A6383280501<br />
          A6383280601<br />
          A6383280701<br />
          LEVÝ = PRAVÝ
        </Description>
        <Description>Cena: 3290 Kč   Montáž: 2000 Kč</Description>

        <hr />
        <Header>Profesionální regenerace amortizátorů pro Mercedes Benz V-Class / Vito W638</Header>
        <Description>
          Jsme specializovaný autoservis, který nabízí komplexní regeneraci amortizátorů a výměnu podušek odpružení pro vozy Mercedes Benz V-Class / Vito W638 (1996-2003). Naše služby zajišťují optimální funkci odpružení, zvyšují komfort jízdy a bezpečnost na silnici.
        </Description>

        <Header>Ověřené metody regenerace amortizátorů</Header>
        <Description>
          Naše zkušenosti nám umožňují aplikovat nejnovější metody regenerace amortizátorů pro Mercedes Benz V-Class / Vito W638. Používáme vysoce kvalitní náhradní díly a specializované vybavení, abychom obnovili plnou funkčnost těchto klíčových částí odpružení a ušetřili Vám náklady na výměnu za nové amortizátory.
        </Description>

        <Header>Vliv regenerace amortizátorů na kvalitu jízdy</Header>
        <Description>
          Regenerace amortizátorů má zásadní vliv na kvalitu jízdy Vašeho Mercedesu Benz V-Class / Vito W638. Profesionální proces regenerace zajišťuje správné tlumení nárazů a vibrací, což přispívá k hladkosti jízdy a komfortu pro řidiče i pasažéry.
        </Description>

        <Header>Výměna podušek odpružení – Klíčový prvek plné funkce odpružení</Header>
        <Description>
          Nabízíme širokou škálu podušek odpružení OEM pro Mercedes Benz V-Class / Vito W638. Naše podušky odpružení odpovídají originálním OEM číslům Mercedes, jako jsou A6383280501, A6383280601 a A6383280701, což Vám zaručuje vysokou kvalitu a dokonalé přizpůsobení Vašemu vozidlu.
        </Description>

        <Description>
          Poškozené nebo opotřebované podušky odpružení mohou ovlivnit komfort jízdy a stabilitu vozidla. Naše služba výměny podušek odpružení Vám umožní vychutnat si optimální úroveň komfortu, minimalizuje nerovnosti silnic a zajišťuje správnou izolaci od nárazů.
        </Description>

        <RepairOptions>
          Konkurenceschopné ceny a profesionální servis:<br />
          Cena regenerace amortizátorů pro Mercedes Benz V-Class / Vito W638 je pouze 3290 Kč, což představuje výraznou úsporu ve srovnání s náklady na nové amortizátory. Montáž podušek odpružení: pouze 1000 Kč.
        </RepairOptions>

        <FAQSection>
          <FAQQuestion>Často Kladené Dotazy (FAQ)</FAQQuestion>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozených amortizátorů a podušek odpružení?</strong><br />
            A: Poškozené amortizátory a podušky odpružení se mohou projevit například netěsnostmi oleje, nerovnoměrným opotřebením pneumatik nebo problémy s...
          </Description>
        </FAQSection>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
