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

const BMW6GTRepair = () => {
  return (
    <div>
      <Header1 />
   
    <Container>
      <Header>BMW 6 GT G32 (2017-2023) - tlumič Přední REGENERACE</Header>
    

      <Description>Všechny motorizace</Description>
      <Description>
        <strong>Popis Opravy / Regenerace:</strong><br />
        UPOZORNĚNÍ: regenerace měchu se vztahuje v případě, že tlumič nedrží vzduch,
        při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá
        nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový
        je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.
      </Description>
      <RepairOptions>
        Možnosti Opravy / Regenerace:<br />
        <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 14990 Kč<br />
        <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 21990 Kč
      </RepairOptions>
      <Description>Montáž: 4990 Kč / kus</Description>
      <Description>GWARANCJA: 12 měsíců</Description>

      <hr />
      <Header>BMW 6 GT G32 (2017-2023) - Kompresor / čerpadlo / pumpa odpružení</Header>
      <img src="/BMW6GT-compressor.jpg" alt="auto-dily-bmw" className="" />
      <Description>Cena: 109900 Kč</Description>
      <Description>
        Nový, výrobce WABCO (výrobce pro první montáž OEM) – bezproblémová montáž<br />
        Všechny motorizace
      </Description>

      <hr />
      <Header>Regenerace tlumičů BMW 6 GT G32 – Klíč k Dokonalé Jízdě</Header>
      <Description>
        BMW 6 GT G32 je výjimečný model, který spojuje eleganci a výkon. 
        Regenerace tlumičů je klíčovým prvkem pro udržení komfortu a bezpečnosti jízdy.
      </Description>
      <Description>
        Tento článek se zaměřuje na regeneraci tlumičů, měchů a kompresorů odpružení v modelu BMW 6 GT G32,
        a jak tento proces obnovuje původní výkon.
      </Description>

      <FAQSection>
        <FAQQuestion>FAQ – Často Kladené Dotazy o BMW 6 GT G32</FAQQuestion>
        <Description>
          <strong>Q: Je regenerace tlumičů v BMW 6 GT G32 nezbytná?</strong><br />
          A: Ano, regenerace tlumičů je důležitá pro zachování komfortní a bezpečné jízdy v modelu G32.
        </Description>
        <Description>
          <strong>Q: Jaké jsou příznaky poškozeného měchu v BMW 6 GT G32?</strong><br />
          A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
        </Description>
        <Description>
          <strong>Q: Mohu si opravit kompresor odpružení v BMW 6 GT G32 sám?</strong><br />
          A: Oprava kompresoru odpružení je složitý proces, který by měl provádět odborník.
        </Description>
        <Description>
          <strong>Q: Jak dlouho trvá proces regenerace tlumičů v BMW 6 GT G32?</strong><br />
          A: Proces regenerace může trvat od několika hodin až po několik dní, záleží na stavu tlumičů.
        </Description>
      </FAQSection>

      <Description>
        <strong>Podsumování:</strong><br />
        Regenerace tlumičů v BMW 6 GT G32 je klíčovým procesem pro zachování maximálního komfortu a výkonu tohoto modelu.
      </Description>
    </Container>
    </div>
  );
};

export default BMW6GTRepair;
