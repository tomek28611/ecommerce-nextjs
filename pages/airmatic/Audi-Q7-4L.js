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

const AudiQ7Repair = () => {
  return (
    <div>
      <Header1 />
   
      <Container>
        <Header>Audi Q7 (2007-2014) - Miech Přední Regenerace</Header>
  
        <Description>Cena: 5990 Kč Montáž do auta: 4000 Kč</Description>
        <Description>
          <strong>Popis:</strong><br />
          Regenerace předního miechu tlumiču pro Audi Q7 (2007-2014). Cena zahrnuje komplet uszczelnień zdarma.
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Levý:</strong> 95535840331, 95535840320, 7L6616403B, 7L8616403B, 7L8616403B (LT)<br />
          <strong>Pravý:</strong> 95535840431, 9553584021, 7L8616404B, 7L8616404B, 7L6616404B (RT)
        </RepairOptions>

        <hr />
        <Header>Audi Q7 (2007-2010) - Miech Přední NOVÝ</Header>
        <Description>Cena: 6990 Kč Montáž do auta: 4000 Kč</Description>
        <Description>
          <strong>Popis:</strong><br />
          Nový přední miech tlumiču s kompletem uszczelnień a zestawem do montażu zdarma.
        </Description>
        <RepairOptions>
          Možnosti Opravy / Regenerace:<br />
          <strong>Levý:</strong> 95535840331, 95535840320, 7L6616403B, 7L8616403B, 7L8616403B (LT)<br />
          <strong>Pravý:</strong> 95535840431, 9553584021, 7L8616404B, 7L8616404B, 7L6616404B (RT)
        </RepairOptions>

        <hr />
        <Header>Audi Q7 (2007-2010) - Sprężarka / Kompresor Zawieszenia</Header>
        <img src="/Miech_AUDI_Q7_przod_lewy.jpg" alt="auto-dily-motor" className="" />
        <Description>Cena: 17990 Kč Montáž: 3500 Kč</Description>
        <Description>
          Nový kompresor od Wabco (Made in Germany), pro všechny verze motorowe. <br />
          OEM Čísla: 4L0698007A, 4L0698007B, 4L0698007C, 7L0698835A, 7L8616006A, 7L8616006C, 7L8616007A...
        </Description>

        <hr />
        <Header>Audi Q7 (2007-2010) - Listwa Zaworowy / Rozdzielacz Zawieszenia Pneumatycznego</Header>
        <Description>
          Cena: 8990 Kč / ks <br />
          OEM Čísla: 7L0 698 014, 7L0 616 251, 15-1524-0008.2, 15-1524-0009.2 <br />
          Oryginalny rozdzielacz firmy RAPA, blok zaworowy do zawieszenia pneumatycznego.
        </Description>

        <hr />
        <Header>Regenerace Zawieszenia Audi Q7 (2007-2010)</Header>
        <Description>
          Audi Q7 (2007-2010) je vozidlo spojující luxus a výkon. Klíčová je pravidelná údržba systému odpružení, 
          včetně regenerace miechu a kompresoru.
        </Description>
        <Description>
          Regenerace miechu předního je nezbytná pro stabilitu a komfort jízdy. Nabízíme také nové miechy a kompletní 
          sady pro montáž.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Audi Q7</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace miechu v Audi Q7 nezbytná?</strong><br />
            A: Ano, regenerace miechu je klíčová pro zachování komfortu a bezpečnosti jízdy v Audi Q7.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného miechu v Audi Q7?</strong><br />
            A: Poškozený miech může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Můžu si opravit kompresor odpružení v Audi Q7?</strong><br />
            A: Oprava kompresoru odpružení je složitý proces, doporučujeme se obrátit na specialisty.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá regenerace miechu v Audi Q7?</strong><br />
            A: Regenerace může trvat od několika hodin do několika dnů, záleží na stavu komponentů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace miechu a kompresoru je nezbytným krokem pro zajištění optimálního výkonu a komfortu jízdy u modelu Audi Q7 (2007-2010).
        </Description>
      </Container>
    </div>
  );
};

export default AudiQ7Repair;
