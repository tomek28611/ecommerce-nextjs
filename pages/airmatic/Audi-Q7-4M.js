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

const AudiQ7Repair = () => {
  return (
    <div>
      <Header1 />

      <Container>
        <Header>Audi Q7 4M (2015-2020) / Audi SQ7 4M (2016-2020) - Přední tlumič REGENERACE</Header>
        {/* <img src="/Audi-Q7-front-shock.jpg" alt="auto-dily-motor" /> */}

        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Popis opravy / regenerace:</strong><br />
          UPOZORNĚNÍ: regenerace měchu je možná pouze v případě, že tlumič neudržuje vzduch. Pokud tlumič bouchá nebo nefunguje správně, je nutné provést regeneraci hydraulického tlumiče.
        </Description>
        <RepairOptions>
          Možnosti opravy / regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 11990 Kč<br />
          <strong>Možnost 2:</strong> Kompletní regenerace: Výměna měchu + regenerace hydraulického tlumiče – 19990 Kč
        </RepairOptions>
        <Description>Montáž: 5000 Kč / kus</Description>

        <hr />
        <Header>Audi Q7 4M (2015-2020) / Audi SQ7 4M (2016-2020) - Měch zadní nový LEVÝ / PRAVÝ</Header>
        <Description>
          Cena: 9990 Kč<br />
          OEM čísla AUDI:<br />
          LEVÝ: 4M0616001P, 4M0616001AA<br />
          PRAVÝ: 44M0616002P, 4M0616002AA<br />
          Vhodné pro všechny verze motorů
        </Description>

        <hr />
        <Header>Audi Q7 4M (2015-2020) / Audi SQ7 4M (2016-2020) - Kompresor / čerpadlo odpružení - NOVÝ</Header>
        <img src="/Audi-Q7-compressor.jpg" alt="auto-dily-motor" />
        <Description>Cena: 28490 Kč</Description>
        <Description>
          Nový, výrobce WABCO – vyrobeno v Německu<br />
          OEM Číslo: 4MO616005G<br />
          Záruka: 24 měsíců
        </Description>

        <hr />
        <Header>Závěrem: Regenerace tlumičů pro Audi Q7 4M a Audi SQ7 4M</Header>
        <Description>
          Audi Q7 4M a Audi SQ7 4M jsou modely, které vyžadují kvalitní údržbu. Regenerace tlumičů a dalších součástí odpružení je nezbytná pro zachování komfortu a bezpečnosti jízdy.
        </Description>
        
        <FAQSection>
          <FAQQuestion>FAQ – Často kladené dotazy o Audi Q7 4M a Audi SQ7 4M</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů u Audi Q7 4M nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je důležitá pro zajištění komfortní a bezpečné jízdy.
          </Description>
          <Description>
            <strong>Q: Jak poznám poškozený měch u Audi Q7 4M?</strong><br />
            A: Poškozený měch může způsobit nestabilní jízdu a hluk.
          </Description>
          <Description>
            <strong>Q: Můžu si opravit kompresor sám?</strong><br />
            A: Doporučujeme opravu svěřit odborníkům, protože kompresor vyžaduje odborný zásah.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů pro Audi Q7 4M je klíčová pro zajištění optimálního výkonu a bezpečnosti vozidla.
        </Description>
      </Container>
    </div>
  );
};

export default AudiQ7Repair;
