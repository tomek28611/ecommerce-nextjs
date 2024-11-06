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

const BMW5F11Repair = () => {
  return (
    <div>
      <Header1 />
   
    <Container>
      <Header>BMW 5 F11 (2010 – ) - Měch Zadní NOVÝ</Header>
     
      <Description>Rok výroby: 2010 – současnost</Description>
      <Description>
        <strong>Popis:</strong><br />
        Měch zadní nový, výrobce LUFTMASTER. Velmi odolné vůči poškození, vyrobeno v nejnovější technologii 4vrstvého materiálu.
      </Description>
      <RepairOptions>
        Cena: 4990 Kč   Montáž: 1500 Kč<br />
        <strong>OEM Čísla BMW:</strong><br />
        37106781843, 37106781844, 37106781827, 37106781828, 37106784378, 37106784379, 37106784380, 37106784381
      </RepairOptions>

      <hr />
      <Header>BMW 5 F11 (2010 – ) - Měch Zadní NOVÝ</Header>
      <Description>
        Garantováno 12 měsíců.<br />
        Cena: 2790 Kč   Montáž: 1500 Kč / kus
      </Description>

      <hr />
      <Header>BMW 5 F11 (2010 – ) - tlumič Přední / Zadní REGENERACE</Header>
      <Description>
        Cena: 11990 Kč   Montáž: 2500 Kč
      </Description>

      <hr />
      <Header>BMW 5 F11 (2010 – ) - Kompresor / Čerpadlo / Pumpa Odpružení</Header>
      <img src="/BMW5F11-compressor.jpg" alt="auto-dily-motor" className="" />
      <Description>Cena: 21490 Kč</Description>
      <Description>
        Nový, originální WABCO (výrobce pro OEM montáž) – bezproblémová montáž<br />
        OEM čísla BMW:<br />
        37206784137, 37206789165, 37206794465, 37206789450, 37206864215
      </Description>

      <hr />
      <Header>Regenerace Tlumičů BMW 5 F11 – Klíč k Dokonalé Jízdě</Header>
      <Description>
        BMW 5 F11 je výjimečný model, který spojuje luxus a výkon. Regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti při jízdě.
      </Description>
      <Description>
        V tomto článku se podíváme na to, jak regenerace tlumičů, měchů a kompresorů odpružení spolupracují v systému odpružení tohoto modelu.
      </Description>

      <FAQSection>
        <FAQQuestion>FAQ – Často Kladené Dotazy o BMW 5 F11</FAQQuestion>
        <Description>
          <strong>Q: Je regenerace tlumičů v BMW 5 F11 nezbytná?</strong><br />
          A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy.
        </Description>
        <Description>
          <strong>Q: Jaké jsou příznaky poškozeného měchu v BMW 5 F11?</strong><br />
          A: Poškozený měch může způsobit ztrátu kontroly nad vozem a nerovnoměrnou jízdu.
        </Description>
        <Description>
          <strong>Q: Můžu si sám vyměnit měch tlumiča v BMW 5 F11?</strong><br />
          A: Doporučujeme tuto službu svěřit odborníkům, aby byla zajištěna správná instalace.
        </Description>
      </FAQSection>

      <Description>
        <strong>Podsumování:</strong><br />
        Regenerace tlumičů a měchů v BMW 5 F11 je klíčovým procesem pro zajištění optimálního výkonu a komfortu jízdy.
      </Description>
    </Container>
    </div>
  );
};

export default BMW5F11Repair;
