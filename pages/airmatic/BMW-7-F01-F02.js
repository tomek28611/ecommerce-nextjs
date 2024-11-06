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

const BMW7F01F02Repair = () => {
  return (
    <div>
      <Header1 />

      <Container>
        <Header>BMW řady 7 F01 F02 (2008-2015) - tlumič Zadní REGENERACE</Header>
        <img src="/BMW7F01F02-rear-shock.jpg" alt="auto-dily-motor" className="" />

        <Description>Všechny motorizace</Description>
        <Description>
          <strong>Popis Opravy / Regenerace:</strong><br />
          UPOZORNĚNÍ: regenerace měchu se vztahuje v případě, že tlumič nedrží vzduch, 
          při této možnosti neprovádíme opravu hydraulického tlumiču uvnitř – pokud tlumič bouchá 
          nebo nemá svou účinnost vyjádřenou v %, výměna pouze měchu za nový je v tomto případě bezpředmětná – 
          nezbytná je také regenerace hydraulického tlumiču.
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Možnost 1:</strong> Výměna měchu za nový / regenerace pneumatické části – 9490 Kč<br />
          <strong>Možnost 2:</strong> Komplexní regenerace: Výměna měchu + regenerace hydraulického tlumiču – 16990 Kč
        </RepairOptions>
        <Description>Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>BMW řady 7 F01 F02 (2008-2015) - tlumič Přední REGENERACE</Header>
        <Description>Cena: 11990 Kč   Montáž: 3000 Kč / kus</Description>

        <hr />
        <Header>BMW řady 7 F01 F02 (2008-2015) - Kompresor / Čerpadlo Závěšení</Header>
        <img src="/BMW7F01F02-compressor.jpg" alt="auto-dily-motor" className="" />
        <Description>Cena: 21490 Kč</Description>
        <Description>
          Nový, výrobce WABCO (výrobce pro první montáž OEM) – bezproblémová montáž<br />
          Všechny motorizace<br />
          OEM Čísla BMW:<br />
          4154039562, 37206789165, 37206864215, 37206784137, 37206789450, 37206794465, 37206875176
        </Description>

        <hr />
        <Header>Regenerace tlumičů pro BMW řady 7 F01 F02 – Klíč k Optimum Komfortu a Bezpečnosti</Header>
        <Description>
          BMW řady 7 F01/F02 je symbolem luxusu a technické dokonalosti, přičemž jedním z nejdůležitějších 
          aspektů, který k této reputaci přispívá, je pokročilý systém závěšení. Regenerace tlumičů v těchto modelech 
          není jen otázkou udržení jejich perfektní kondice, ale i investicí do každodenního komfortu jízdy.
        </Description>
        <Description>
          Systém závěšení BMW řady 7 je navržen tak, aby poskytoval nejen komfort, ale také vysoký výkon. Klíčové komponenty zahrnují:
        </Description>
        <Description>
          <strong>1. Miech:</strong> Elastický prvek, který reaguje na rozdíly v povrchu silnice, což umožňuje plynulou jízdu.<br />
          <strong>2. Kompresor Závěšení:</strong> Tento prvek kontroluje tlak vzduchu v miechu, což umožňuje automatické přizpůsobení závěšení různým podmínkám jízdy.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o BMW řady 7 F01 F02</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů u BMW řady 7 F01/F02 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v modelech F01/F02.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu u BMW řady 7 F01/F02?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelech F01/F02.
          </Description>
          <Description>
            <strong>Q: Můžu si sám opravit kompresor závěšení u BMW řady 7 F01/F02?</strong><br />
            A: Oprava kompresoru závěšení v modelech F01/F02 je složitý proces a doporučuje se svěřit ji specialistům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů u BMW řady 7 F01/F02?</strong><br />
            A: Proces může trvat od několika hodin do několika dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů pro modely F01/F02.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů u BMW řady 7 F01/F02 je klíčový proces, který může významně ovlivnit výkon a bezpečnost těchto luxusních vozů.
        </Description>
      </Container>
    </div>
  );
};

export default BMW7F01F02Repair;
