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

const MercedesEKlasaRepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes ML / GL – W164 (2005-2011) - Amortizátor Přední REGENERACE</Header>
        <Description>Amortizátor + Měch (verze s ADS – Adaptive Damping System)</Description>
        <Description><strong>Cena:</strong> 13990 Kč<br /><strong>Montáž:</strong> 3000 Kč</Description>

        <hr />
        <Header>Mercedes ML / GL – W164 (2005-2011) - Měch amortizátora Přední REGENERACE</Header>
        <Description>(všechny verze zavěšení)</Description>
        <Description><strong>Cena:</strong> 4490 Kč<br /><strong>Montáž:</strong> 3000 Kč<br />náklady na montáž na amortizátor: 500 Kč</Description>

        <hr />
        <Header>Mercedes ML / GL – W164 (2005-2011) - Měch amortizátora Přední NOVÝ</Header>
        <Description>(všechny verze zavěšení)</Description>
        <Description><strong>Cena:</strong> 4490 Kč<br /><strong>Montáž:</strong> 3000 Kč<br />náklady na montáž na amortizátor: 500 Kč</Description>

        <hr />
        <Header>Mercedes GL – W164 (2005-2011) USA - Amortizátor Přední REGENERACE</Header>
        <Description>Měch + Amortizátor (verze bez ADS)</Description>
        <Description><strong>Cena:</strong> 13990 Kč<br /><strong>Montáž:</strong> 3000 Kč</Description>

        <hr />
        <Header>Mercedes ML / GL – W164 (2005-2011) - Amortizátor Zadní - regenerace</Header>
        <Description>(verze s ADS)</Description>
        <Description><strong>Cena:</strong> 8990 Kč<br /><strong>Montáž:</strong> 3000 Kč</Description>

        <hr />
        <Header>Mercedes GL – W164 (2005-2011) USA - Amortizátor Zadní - regenerace</Header>
        <Description>(verze bez ADS)</Description>
        <Description><strong>Cena:</strong> 8990 Kč<br /><strong>Montáž:</strong> 3000 Kč</Description>

        <hr />
        <Header>Mercedes ML / GL – W164 (2005-2011) - Měch Zadní REGENERACE</Header>
        <Description>(všechny verze zavěšení)<br />24 MĚSÍCŮ ZÁRUKY !!!</Description>
        <Description><strong>Cena:</strong> 2750 Kč<br /><strong>Montáž:</strong> 1250 Kč</Description>

        <hr />
        <Header>Mercedes ML / GL – W164/ X164 (2005-2011) - Měch Zadní NOVÝ - (verze Airmatic)</Header>
        <Description>24 MĚSÍCŮ ZÁRUKY</Description>
        <Description><strong>Cena:</strong> 2750 Kč<br /><strong>Montáž:</strong> 1250 Kč</Description>

        <hr />
        <Header>Mercedes ML / GL – W164 (2005-2011) - Kompresor / Čerpadlo NOVÝ !!!</Header>
        <Description>PRODUCENT OEM Mercedes-Benz: AMK<br /><strong>Cena:</strong> 14990 Kč<br /><strong>Montáž:</strong> 2500 Kč</Description>

        <hr />
        <Header>Regenerace Amortizátorů Mercedes ML / GL W164 (2005-2011) – Klíč k Dokonalé Jízdě</Header>
        <Description>
          Mercedes ML / GL W164 jsou výjimečné modely, které spojují eleganci a inovaci. 
          Tyto luxusní vozy vyžadují pravidelnou údržbu, a regenerace amortizátorů je klíčovým prvkem tohoto procesu.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes ML / GL W164</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace amortizátorů v Mercedes ML / GL W164 nezbytná?</strong><br />
            A: Ano, regenerace amortizátorů je klíčová pro zachování luxusního komfortu a bezpečnosti jízdy v modelech W164.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes ML / GL W164?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelech W164.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes ML / GL W164?</strong><br />
            A: Oprava kompresoru odpružení v modelech W164 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace amortizátorů v Mercedes ML / GL W164?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu amortizátorů a dostupnosti náhradních dílů pro modely W164.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace amortizátorů v Mercedes ML / GL W164 je klíčový proces, který může významně ovlivnit výkon a bezpečnost těchto luxusních automobilů.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEKlasaRepair;
