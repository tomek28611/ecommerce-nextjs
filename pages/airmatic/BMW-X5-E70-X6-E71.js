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
      <Header>BMW X5 E70 / BMW X6 E71 - Zadní Měch NOVÝ</Header>
      <Description>Cena: 2490 Kč Montáž: 1500 Kč</Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - Zadní Měch NOVÝ DUNLOP</Header>
      <Description>Cena: 4990 Kč Montáž: 1500 Kč</Description>
      <Description>Garance 24 měsíců</Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - tlumič Přední / Zadní REGENERACE</Header>
      <Description>Garance 12 měsíců</Description>
      <Description>Cena: 11990 Kč Montáž: 3000 Kč</Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - Kompresor / Čerpadlo (AMK) NOVÝ</Header>
      <Description>Cena: 15990 Kč Montáž: 2000 Kč</Description>
      <Description>
        Originál na první montáž v BMW – Firma AMK<br />
        Vyrobeno v Německu<br />
        OEM Číslo: 37206859714
      </Description>
      <hr />

      <Header>BMW X5 E70 / BMW X6 E71 - Kompresor / Čerpadlo / Pumpa odpružení</Header>
      <Description>
        Sada s filtrem, hadicí a relé<br />
        Originál na první montáž v BMW – Firma AMK<br />
        Vyrobeno v Německu<br />
        Garance 24 měsíců
      </Description>
      <Description>Cena: 17490 Kč</Description>
      <hr />

      <Header>Regenerace tlumičů v Modelech BMW X5 E70 a BMW X6 E71: Kompletní Průvodce</Header>
      <Description>
        Jízda v automobilu není jen o pohodlí, ale také o komfortu a bezpečnosti. V modelech BMW X5 E70 a BMW X6 E71 hrají tlumičy klíčovou roli při zajištění těchto vlastností. Tento průvodce vám ukáže, proč je regenerace tlumičů důležitá a jaké součásti tvoří systém odpružení v těchto modelech.
      </Description>

      <FAQSection>
        <FAQQuestion>FAQ – Často Kladené Dotazy o BMW X5 E70 / BMW X6 E71</FAQQuestion>
        <Description>
          <strong>Q: Je regenerace tlumičů nezbytná v modelech BMW X5 E70 / BMW X6 E71?</strong><br />
          A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v těchto modelech.
        </Description>
        <Description>
          <strong>Q: Jaké jsou příznaky opotřebovaných tlumičů v modelech BMW X5 E70 / BMW X6 E71?</strong><br />
          A: Mezi příznaky patří zhoršení komfortu jízdy, nadměrné otřesy a nestabilita vozidla.
        </Description>
        <Description>
          <strong>Q: Můžu si sám vyměnit měch tlumiču v modelech BMW X5 E70 / BMW X6 E71?</strong><br />
          A: Doporučujeme tuto službu svěřit odborníkům, aby byla zajištěna správná instalace a bezpečnost.
        </Description>
      </FAQSection>

      <Description>
        <strong>Shrnutí:</strong><br />
        Regenerace tlumičů v modelech BMW X5 E70 a BMW X6 E71 je klíčovým procesem, který výrazně ovlivňuje výkon a bezpečnost těchto luxusních vozů.
      </Description>
    </Container>
    </div>
  );
};

export default BMWX5Repair;
