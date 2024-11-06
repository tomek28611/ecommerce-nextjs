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

const AudiA8D3Repair = () => {
  return (
    <div>
      <Header1 />
   
      <Container>
        <Header>Audi A8 D3 (2002-2009) - Přední tlumič REGENERACE</Header>
       
        
        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Popis Opravy / Regenerace:</strong><br />
          UPOZORNĚNÍ: regenerace měchu se vztahuje v případě, že tlumič nedrží vzduch,
          při této možnosti neprovádíme opravu hydraulického tlumiče – pokud tlumič bouchá
          nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový
          je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického tlumiče.
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 7990 Kč<br />
          <strong>Možnost 2:</strong> Regenerace hydraulického tlumiče – 9490 Kč<br />
          <strong>Možnost 1 + 2:</strong> Kompletní regenerace: Výměna měchu + regenerace hydraulického tlumiče – 14990 Kč
        </RepairOptions>
        <Description>Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Audi A8 D3 (2002-2009) - Zadní tlumič REGENERACE</Header>
        <Description>Cena: 8990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>Audi A8 D3 (2002-2009) - Kompresor / čerpadlo odpružení</Header>
        <img src="/audi-a8-compressor.jpg" alt="auto-dily-motor" className="" />
        <Description>Cena: 20990 Kč</Description>
        <Description>
          Nový, výrobce WABCO (výrobce pro první montáž OEM) – bezproblémová montáž<br />
          Všechny motorizace
        </Description>

        <hr />
        <Header>Audi A8 D3 (2002-2009) - Rozdělovač / blok ventilů ORIGINÁL RAPA</Header>
        <Description>
          OEM Čísla:<br />
          4F0616013 / 4F0 616 013 (A6 C6)<br />
          4E0616013 (A8 D3 S8 / Phaeton)<br />
          4Z7616013 (A6 C5)
        </Description>
        <Description>Cena: 9990 Kč</Description>

        <hr />
        <Header>Regenerace tlumičů v Audi A8 D3 (2002-2009) – Klíč k Dokonalé Jízdě</Header>
        <Description>
          Audi A8 D3 (2002-2009) je symbolem luxusu a moderní technologie, kde pokročilý systém odpružení hraje klíčovou roli.
          Regenerace tlumičů je důležitým prvkem pro udržení tohoto luxusního zážitku na nejvyšší úrovni.
        </Description>
        <Description>
          V tomto článku se podíváme na to, jak regenerace tlumičů, měch, kompresor odpružení a pumpa odpružení 
          spolupracují v systému odpružení tohoto modelu, a jak může proces regenerace obnovit původní výkon.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Audi A8 D3 (2002-2009)</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v Audi A8 D3 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v modelech A8 D3.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Audi A8 D3?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelech A8 D3.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Audi A8 D3?</strong><br />
            A: Oprava kompresoru odpružení v modelech A8 D3 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů v Audi A8 D3?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů pro modely A8 D3.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů v Audi A8 D3 je klíčový proces, který může významně ovlivnit výkon a bezpečnost těchto luxusních automobilů.
        </Description>
      </Container>
    </div>
  );
};

export default AudiA8D3Repair;
