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

const AudiA6C7Repair = () => {
  return (
    <div>
      <Header1 />
      
      <Container>
        <Header>Audi A6 C7 / Audi A6 C7 Allroad (2011-2018) - Přední tlumič REGENERACE</Header>
        <Description>
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 8990 Kč<br />
          <strong>Montáž na tlumič:</strong> 1000 Kč / kus<br />
          (Tato možnost platí, pokud tlumič neudrží vzduch)
        </Description>
        <Description>
          <strong>Možnost 2:</strong> Regenerace hydraulického tlumiče – 9490 Kč<br />
          (Vhodné, pokud tlumič uniká (olej), klepe nebo nemá účinnost vyjádřenou v % na diagnostické stanici)
        </Description>
        <Description>
          <strong>Komplexní regenerace:</strong> Výměna měchu + regenerace hydraulického tlumiče – 14990 Kč
        </Description>
        <Description>Montáž do auta: 4500 Kč / kus</Description>

        <hr />
        <Header>Audi A6 C7 / Audi A6 C7 Allroad (2011-2018) - Zadní tlumič REGENERACE</Header>
        <Description>Cena: 9990 Kč Montáž: 2500 Kč</Description>

        <hr />
        <Header>Audi A6 C7 / Audi A6 C7 Allroad (2011-2018) - Měch Zadní NOVÝ</Header>
        <Description>
          Cena: 5990 Kč Montáž: 2000 Kč<br />
          OEM Čísla AUDI:<br />
          4G0616002T, 4G0616002Q, 4G0616001AA, 4G0616002R
        </Description>

        <hr />
        <Header>Audi A6 C7 / Audi A6 C7 Allroad (2011-2018) - Kompresor / čerpadlo odpružení</Header>
        <Description>
          Nový a originální WABCO<br />
          OEM Čísla AUDI:<br />
          4G0 616 005 C; 4G0616005C<br />
          Cena: 16490 Kč
        </Description>
        <Description>
          Dále nabízíme filtry a relé potřebné pro instalaci nového kompresoru do Audi.<br />
          FILTR + RELÉ = 990 Kč
        </Description>

        <hr />
        <Header>Rozdělovač / blok ventilů (originál RAPA)</Header>
        <Description>
          OEM Čísla:<br />
          4H0616013, 3Y0616006, 3Y0616007, 3Y0616006A, 4H0616005C, 4G0616005C, 4H0616013B, 4H0616013A<br />
          Cena: 9990 Kč
        </Description>

        <FAQSection>
          <FAQQuestion>Proč je regenerace tlumičů důležitá?</FAQQuestion>
          <Description>
            Regenerace tlumičů je klíčová pro zachování optimálního výkonu vozu. Opotřebované tlumiče mohou vést k nerovnoměrnému opotřebení pneumatik, zvýšenému riziku smyku a ztrátě kontroly nad vozidlem.
          </Description>
          <FAQQuestion>Co zahrnuje proces regenerace tlumičů Audi A6 C7?</FAQQuestion>
          <Description>
            Proces zahrnuje diagnostiku problému, výměnu opotřebovaných částí, regeneraci pneumatické a hydraulické části a testování tlumičů, aby byla zajištěna plná funkčnost.
          </Description>
        </FAQSection>

        <Description>
          <strong>Závěr:</strong><br />
          Regenerace tlumičů u Audi A6 C7 je důležitý proces, který udržuje komfort a bezpečnost při jízdě.
        </Description>
      </Container>
    </div>
  );
};

export default AudiA6C7Repair;
