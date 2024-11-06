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

const MercedesEClassRepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes S-Coupe W217 (2014-) - tlumič Přední / Zadní</Header>
      

        <Description>Verze s pohonem na zadní a pohonem na 4 kola – 4MATIC</Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 11990 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 19990 Kč
          <br/>
          <strong>Možnost 3:</strong> Komplexní regenerace: tlumiču ABC – 25000 Kč
          
        </RepairOptions>
        <Description>UPOZORNĚNÍ: regenerace měchu se vztahuje v případě, že tlumič nedrží vzduch. Při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá nebo nemá svou účinnost vyjádřenou v % na diagnostické stanici, výměna pouze měchu za nový je v tomto případě bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.</Description>

        <hr />
        <Header>Kompresor / Čerpadlo NOVÝ</Header>
        <Description>PRODUCENT OEM Mercedes-Benz: AMK</Description>
        <Description>Cena: 25990 Kč</Description>
        <Description>OEM Čísla Mercedes-Benz: A2223200604, A0993200104</Description>

        <hr />
        <Header>Filtr Kompresora + Převodník</Header>
        <Description>Cena: 990 Kč</Description>

        <hr />
        <Header>Regenerace tlumičů Mercedes S-Coupe W217 – Klíč k Dokonalé Jízdě</Header>
        <Description>
          Mercedes S-Coupe W217 je luxusní automobil, který si zaslouží nejlepší péči. Jeho jedinečný design a funkce neporovnatelná kvalita vyžadují pravidelnou údržbu a opravy, aby se udržel v dokonalém stavu. Jedním z nejdůležitějších aspektů údržby Mercedes S-Coupe W217 je regenerace tlumičů.
        </Description>
        <Description>
          tlumičy jsou klíčovým prvkem odpružení automobilu. Ovlivňují komfort jízdy, stabilitu a bezpečnost automobilu. V modelu Mercedes S-Coupe W217 jsou tlumičy technologicky vysoce pokročilé, což zajišťuje neuvěřitelný komfort a výjimečný výkon.
        </Description>
        <Description>
          Regenerace tlumičů v Mercedesu S-Coupe W217 je proces, který umožňuje obnovit původní výkon tlumičů. Tento proces zahrnuje výměnu měchu, který je nedílnou součástí tlumiču. Miech je pneumatický prvek, který je zodpovědný za udržení vzduchu v tlumiču. Pokud tlumič nedrží vzduch, je výměna měchu nezbytná.
        </Description>
        <Description>
          Regenerace tlumičů může také zahrnovat regeneraci hydraulického tlumiču, který se nachází uvnitř tlumiču. Hydraulický tlumič je nesmírně důležitý pro výkon tlumiču, a proto, pokud tlumič bouchá nebo nefunguje správně, regenerace hydraulického tlumiču je nezbytná.
        </Description>
        <Description>
          Kompresor odpružení, jinak nazývaný čerpadlo odpružení, je dalším klíčovým prvkem odpružení v Mercedesu S-Coupe W217. Kompresor je zodpovědný za dodávání vzduchu do systému odpružení, což pomáhá tlumičům udržovat správný tlak.
        </Description>
        <Description>
          Jedním z nejdůležitějších aspektů údržby kompresoru odpružení v dobrém stavu je pravidelná výměna filtrů kompresoru. Filtry zabraňují vniknutí nečistot do kompresoru, což by mohlo vést k poškození a poklesu výkonu.
        </Description>
        <Description>
          Kompresor odpružení v Mercedesu S-Coupe W217 je mimořádně účinný a spolehlivý, což zajišťuje dlouhotrvající a stabilní fungování systému odpružení.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes S-Coupe W217</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů v Mercedes S-Coupe W217 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování luxusního komfortu a bezpečnosti jízdy v modelech W217.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v Mercedes S-Coupe W217?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení v Mercedes S-Coupe W217?</strong><br />
            A: Oprava kompresoru odpružení v modelu W217 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů v Mercedes S-Coupe W217?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů v Mercedes S-Coupe W217 je klíčový proces, který může významně ovlivnit výkon a bezpečnost tohoto luxusního automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEClassRepair;
