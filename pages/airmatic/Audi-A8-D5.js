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

const AudiA8Repair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Audi A8 D5 (2017-) - Tlumič Přední REGENERACE</Header>
        {/* <img src="/audi-a8-front-shock.jpg" alt="auto-dily-audi" /> */}

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
        <Description>Montáž: 5000 Kč / kus</Description>

        <hr />
        <Header>Audi A8 D5 (2017-) - Kompresor / čerpadlo odpružení</Header>
        {/* <img src="/audi-a8-compressor.jpg" alt="auto-dily-audi" /> */}
        <Description>Cena: 34990 Kč</Description>
        <Description>
          Nový, výrobce WABCO – bezproblémová montáž<br />
          Všechny motorizace
        </Description>

        <hr />
        <Header>Regenerace tlumičů Audi A8 D5 – Klíč k Dokonalé Jízdě</Header>
        <Description>
          Audi A8 D5 je výjimečný model, který spojuje luxus a technologii. 
          I tento luxusní vůz vyžaduje pravidelnou údržbu, a regenerace tlumičů je klíčovým prvkem tohoto procesu.
        </Description>
        <Description>
          V tomto článku se podíváme na to, jak regenerace tlumičů, měch a kompresor odpružení spolupracují v systému odpružení tohoto modelu, a jak může proces regenerace obnovit původní výkon.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Audi A8 D5</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v Audi A8 D5 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování luxusního komfortu a bezpečnosti jízdy v modelu A8 D5.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Audi A8 D5?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelu A8 D5.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Audi A8 D5?</strong><br />
            A: Oprava kompresoru odpružení v modelu A8 D5 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů v Audi A8 D5?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů pro model A8 D5.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů v Audi A8 D5 je klíčový proces, který může významně ovlivnit výkon a bezpečnost tohoto luxusního automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default AudiA8Repair;
