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

const BMWX3Repair = () => {
  return (
    <div>
      <Header1 />
   
      <Container>
        <Header>BMW X3 F25 (2010-2017) / BMW X4 F26 (2014-2018) - tlumič Přední REGENERACE</Header>
    

        <Description>Cena: 11990 Kč / kus</Description>
        <Description>Garance 12 měsíců</Description>

        <hr />
        <Header>BMW X3 F25 (2010-2017) / BMW X4 F26 (2014-2018) - tlumič Zadní REGENERACE (EDC/VDC)</Header>
        <Description>Cena: 9990 Kč / kus</Description>
        <Description>Garance 12 měsíců</Description>

        <hr />
        <Header>Regenerace tlumičů BMW X3 (F25) a BMW X4 (F26): Klíč k Nepřekonatelnému Komfortu a Stabilitě</Header>
        <Description>
          BMW X3 (F25) a BMW X4 (F26) jsou vozy, které jsou známé svou vyvážeností mezi komfortem jízdy a dynamickými výkony. Srdcem této rovnováhy je pokročilý systém odpružení, kde regenerace tlumičů hraje klíčovou roli při udržování této harmonie.
        </Description>

        <Description>
          <strong>Charakteristika odpružení v BMW X3 (F25) a BMW X4 (F26):</strong><br />
          Odpružení těchto modelů BMW bylo navrženo nejen pro komfort, ale i pro precizní řízení. Hlavní komponenty zahrnují:<br />
          <strong>Miech</strong> – adaptivní prvek reagující na měnící se podmínky na silnici, což umožňuje hladkou jízdu.<br />
          <strong>Sprężarka Zawieszenia a Kompresor Zawieszenia</strong> – tyto mechanizmy kontrolují tlak vzduchu v miechu, přizpůsobují charakteristiku odpružení aktuálním potřebám.
        </Description>

        <Description>
          <strong>Význam regenerace tlumičů:</strong><br />
          Regenerace tlumičů v BMW X3 (F25) a BMW X4 (F26) není jen otázkou udržení komfortu jízdy, ale také:<br />
          <strong>Bezpečnost</strong>: Dobrý stav tlumičů je klíčový pro stabilitu vozidla, zejména při brzdění a zatáčení.<br />
          <strong>Úspora paliva</strong>: Poškozené tlumičy mohou zvýšit spotřebu paliva a negativně ovlivnit celkový výkon vozidla.<br />
          <strong>Hodnota při prodeji</strong>: Zachování dobrého stavu odpružení může pozitivně ovlivnit hodnotu vozidla při jeho prodeji.
        </Description>

        <Description>
          <strong>Proces regenerace tlumičů:</strong><br />
          Regenerace tlumičů je složitý proces, který by měl být svěřen odborníkům. Zahrnuje:<br />
          Diagnostiku stavu tlumičů a dalších komponentů odpružení.<br />
          Demontáž tlumičů, jejich čištění a kontrolu.<br />
          Výměnu opotřebovaných nebo poškozených dílů, následnou montáž a testování.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často kladené dotazy o regeneraci tlumičů BMW X3 F25 / X4 F26</FAQQuestion>
          <Description>
            <strong>Q: Jak často bych měl regenerovat tlumičy?</strong><br />
            A: Doporučuje se kontrolovat stav tlumičů každých 80 000 – 100 000 km, ale individuální podmínky mohou vyžadovat častější kontroly.
          </Description>
          <Description>
            <strong>Q: Můžu si tlumičy regenerovat sám?</strong><br />
            A: Regenerace tlumičů je složitý proces, který by měl být prováděn zkušenými mechaniky.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky opotřebovaných tlumičů?</strong><br />
            A: Mezi příznaky patří nerovnoměrná jízda, zvýšený hluk odpružení a nevyvážená reakce na řízení.
          </Description>
        </FAQSection>

        <Description>
          <strong>Souhrn:</strong><br />
          Regenerace tlumičů je klíčová pro udržení vašeho BMW X3 (F25) nebo BMW X4 (F26) v optimálním stavu, což se projevuje ve vyšším komfortu, bezpečnosti a radosti z jízdy.
        </Description>
      </Container>
    </div>
  );
};

export default BMWX3Repair;
