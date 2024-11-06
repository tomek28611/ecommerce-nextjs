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

const BMW5F07GTRepair = () => {
  return (
    <div>
      <Header1 />
   
      <Container>
        <Header>BMW 5 F07 GT (2008 –  ) - Měch Zadní NOVÝ</Header>
        <img src="/BMW5-f07-gt-rear-bag.jpg" alt="auto-dily-motor" className="" />

        <Description>Rok výroby: (2008 – )</Description>
        <Description><strong>Výrobce:</strong> LUFTMASTER</Description>
        <Description>
          <strong>Cena:</strong> 499 Kč    <strong>Montáž:</strong> 150 Kč
        </Description>
        <Description>
          <strong>OEM Čísla BMW:</strong><br />
          37106781843, 37106781844, 37106781827, 37106781828, 37106784378, 37106784379, 37106784380, 37106784381
        </Description>
        <Description>
          Miech firmy Dunlop vyrobený nejnovější 4-vrstvou technologií, výrazně odolnější než originální BMW.
        </Description>

        <hr />
        
        <Header>BMW 5 F07 GT (2008 – ) - Měch Zadní NOVÝ</Header>
        <Description>Záruka: 12 měsíců</Description>
        <Description>
          <strong>Cena:</strong> 279 Kč    <strong>Montáž:</strong> 150 Kč
        </Description>
        <Description>
          <strong>OEM Čísla BMW:</strong><br />
          37106781843, 37106781844, 37106781827, 37106781828, 37106784378, 37106784379, 37106784380, 37106784381
        </Description>

        <hr />
        
        <Header>BMW 5 F07 GT (2008 – ) - tlumič Přední / Zadní REGENERACE</Header>
        <Description>Záruka: 12 měsíců</Description>
        <Description>
          <strong>Cena:</strong> 1199 Kč    <strong>Montáž:</strong> 250 Kč
        </Description>

        <hr />

        <Header>BMW 5 F07 GT (2008 – ) - Kompresor / čerpadlo odpružení</Header>
        <img src="/BMW5-gt-compressor.jpg" alt="auto-dily-motor" className="" />
        <Description>
          <strong>Cena:</strong> 2149 Kč<br />
          Záruka výrobce WABCO (vyrobeno v Německu): 24 měsíců
        </Description>

        <Description>
          OEM čísla BMW:<br />
          37206784137, 37206789165, 37206794465, 37206789450, 37206864215
        </Description>

        <hr />
        
        <Header>Regenerace tlumičů BMW 5 F07 GT – Klíč k Dokonalé Jízdě</Header>
        <Description>
          BMW 5 F07 GT, známé také jako Grand Tourismo, je výjimečný model, který spojuje eleganci a funkčnost. Pro zachování dokonalé jízdy je klíčové pravidelně pečovat o technický stav vozu, včetně systému odpružení.
        </Description>
        <Description>
          V tomto článku se podíváme na důležitost regenerace tlumičů, jak funguje systém odpružení tohoto modelu a jak může regenerace obnovit jeho původní výkon.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o BMW 5 F07 GT</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů nezbytná v BMW 5 F07 GT?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v tomto modelu.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky opotřebovaných tlumičů v BMW 5 F07 GT?</strong><br />
            A: Mezi příznaky patří zhoršení komfortu jízdy, nadměrné otřesy a vibrace, a nestabilita vozu při jízdě.
          </Description>
          <Description>
            <strong>Q: Můžu si sám vyměnit miech tlumiču v BMW 5 F07 GT?</strong><br />
            A: Doporučujeme, aby tuto opravu provedli odborníci, protože výměna měchu je složitý proces.
          </Description>
        </FAQSection>

        <Description>
          <strong>Shrnutí:</strong><br />
          Regenerace tlumičů v BMW 5 F07 GT je zásadní pro zajištění komfortu a bezpečnosti jízdy, a správná údržba odpružení tohoto modelu zajišťuje optimální výkon vozidla.
        </Description>
      </Container>
    </div>
  );
};

export default BMW5F07GTRepair;
