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

const AudiA8D4Repair = () => {
  return (
    <div>
      <Header1 />

      <Container>
        <Header>Audi A8 D4 (2010-) - Přední Amortizátor REGENERACE</Header>
       

        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Popis Opravy / Regenerace:</strong><br />
          <i>Upozornění: regenerace měchu se provádí v případě, že amortizátor nedrží vzduch.</i>
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 8990 Kč<br />
          <strong>Možnost 2:</strong> Regenerace hydraulického tlumiče – 9490 Kč<br />
          <strong>Možnost 1 + 2:</strong> Komplexní regenerace – 14990 Kč
        </RepairOptions>
        <Description>Montáž: 1000 Kč / kus</Description>

        <hr />
        <Header>Audi A8 D4 (2010-) - Zadní Amortizátor REGENERACE</Header>
        <Description>Cena: 11990 Kč   Montáž: 4500 Kč / kus</Description>

        <hr />
        <Header>Audi A8 D4 (2010-) - Kompresor / Čerpadlo Závěšení</Header>
        {/* <img src="/A8D4-compressor.jpg" alt="auto-dily" className="" /> */}
        <Description>Cena: 16490 Kč</Description>
        <Description>
          Nový, originální WABCO<br />
          OEM Číslo AUDI: 4H0 616 005 C
        </Description>

        <hr />
        <Header>Audi A8 D4 (2010-) - Rozdělovač / Blok Ventilů ORIGINÁL RAPA</Header>
        <Description>Cena: 9990 Kč</Description>

        <hr />
        <Header>Regenerace Amortizátorů Audi A8 D4 – Optimální řešení pro vaše zavěšení</Header>
        <Description>
          Audi A8 D4 (2010-) nabízí řadu možností pro regeneraci amortizátorů přední i zadní nápravy. Naši zkušení mechanici jsou připraveni obnovit plnou funkčnost vašeho odpružení.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Audi A8 D4</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace amortizátorů v Audi A8 D4 nezbytná?</strong><br />
            A: Ano, regenerace amortizátorů je klíčová pro optimální výkon odpružení a bezpečnost vozu.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Audi A8 D4?</strong><br />
            A: Poškozený měch může způsobit ztrátu vzduchu a ovlivnit stabilitu jízdy, což vyžaduje výměnu měchu nebo regeneraci hydraulického tlumiče.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Audi A8 D4?</strong><br />
            A: Oprava kompresoru je složitý proces, který by měl být proveden odborníky.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace amortizátorů v Audi A8 D4?</strong><br />
            A: Proces regenerace může trvat několik hodin až dní, v závislosti na stavu amortizátorů a dostupnosti náhradních dílů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Shrnutí:</strong><br />
          Regenerace amortizátorů pro Audi A8 D4 je důležitý krok pro udržení optimálního výkonu odpružení a komfortu jízdy.
        </Description>
      </Container>
    </div>
  );
};

export default AudiA8D4Repair;
