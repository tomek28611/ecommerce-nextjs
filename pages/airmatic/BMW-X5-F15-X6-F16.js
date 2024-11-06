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

const BMWX5Repair = () => {
  return (
    <div>
      <Header1 />

      <Container>
        <Header>BMW X5 F15 / BMW X6 F16 - Měch Zadní NOVÝ</Header>
        <Description>Cena: 3290 Kč    Montáž: 1500 Kč</Description>

        <hr />

        <Header>BMW X5 F15 / BMW X6 F16 - Měch Zadní NOVÝ DUNLOP</Header>
        <Description>Cena: 4990 Kč    Montáž: 1500 Kč</Description>
        <Description>Garance 24 měsíců</Description>

        <hr />

        <Header>BMW X5 F15 / BMW X6 F16 - tlumič Přední / Zadní REGENERACE</Header>
        <Description>Cena: 11990 Kč    Montáž: 3000 Kč</Description>
        <Description>Garance 12 měsíců</Description>

        <hr />

        <Header>BMW X5 F15 / BMW X6 F16 - Kompresor / Čerpadlo Pružení NOVÝ</Header>
        <Description>
          Cena: 19990 Kč    Montáž: 3000 Kč
          <br />
          Originál pro první montáž v BMW – Výrobce WABCO
          <br />
          Vyrobeno v Německu
          <br />
          Číslo originálu: 4154030472
          <br />
          Čísla OEM: 37206875177, 37.20-6875177, 37.20-6868998, 37206850555, 37.20-6850555
        </Description>

        <hr />

        <Header>Regenerace tlumičů BMW X5 F15 / X6 F16 – Klíč k Dokonalé Jízdě</Header>
        <Description>
          BMW X5 F15 a BMW X6 F16 jsou modely, které kombinují špičkovou kvalitu a sofistikovaný styl. Tyto luxusní SUV vyžadují pravidelnou údržbu, přičemž regenerace tlumičů je klíčovým procesem pro udržení bezpečnosti a komfortu jízdy.
        </Description>
        <Description>
          Regenerace tlumičů, měchů a kompresorů zajišťuje obnovu jejich funkčnosti, což má přímý vliv na komfort a stabilitu jízdy. Naše specializace na regeneraci pro BMW X5 F15 a X6 F16 zahrnuje profesionální diagnostiku a zajištění optimálního výkonu těchto komponentů.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o BMW X5 F15 / X6 F16</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů pro BMW X5 F15 / X6 F16 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je nezbytná pro udržení pohodlí a bezpečnosti při jízdě.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu u BMW X5 F15 / X6 F16?</strong><br />
            A: Poškozený měch může vést k nerovnoměrnému chodu vozidla, hluku a ztrátě kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Můžu si opravit kompresor odpružení u BMW X5 F15 / X6 F16 sám?</strong><br />
            A: Oprava kompresoru odpružení je složitý proces, který by měl být prováděn odborníky.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá regenerace tlumičů pro BMW X5 F15 / X6 F16?</strong><br />
            A: Regenerace může trvat několik hodin až dní, v závislosti na stavu komponentů a dostupnosti náhradních dílů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů a měchů pro BMW X5 F15 / X6 F16 je zásadní pro obnovení ideálního výkonu a pohodlí vašeho vozidla. Naše služby zajišťují, že váš automobil bude opět fungovat jako nový.
        </Description>
      </Container>
    </div>
  );
};

export default BMWX5Repair;
