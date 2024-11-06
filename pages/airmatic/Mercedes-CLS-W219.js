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

const MercedesEklasaRepair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes CLS W219 - tlumič Přední REGENERACE</Header>
        <img src="/W219-front-shock.jpg" alt="auto-dily-motor" className="" />
        <Description>
          <strong>Možnosti Opravy / Regenerace:</strong><br />
          Wýměna měchu na nový / regenerace části pneumatiky – 6990 Kč
        </Description>
        <Description>
          Montáž do tlumiču: 1000 Kč<br />
          Montáž do auta: 2000 Kč
        </Description>
        <Description>
          <strong>UPOZORNĚNÍ:</strong> Wýměna měchu se vztahuje, pokud tlumič nedrží vzduch. Pokud tlumič bouchá
          nebo nemá svou účinnost, výměna měchu za nový je bezpředmětná – nezbytná je také regenerace hydraulického tlumiču.
        </Description>

        <hr />
        <Header>Mercedes CLS W219 - tlumič Přední REGENERACE - Výměna měchu + Regenerace hydraulického tlumiču</Header>
        <Description>Cena: 12990 Kč Montáž: 2000 Kč</Description>

        <hr />
        <Header>Mercedes CLS W219 - Měch Zadní REGENERACE LEVÝ / PRAVÝ</Header>
        <Description>Cena: 5900 Kč Montáž: 2000 Kč</Description>

        <hr />
        <Header>Mercedes CLS W219 - tlumič Zadní REGENERACE</Header>
        <Description>Cena: 8990 Kč Montáž: 3000 Kč</Description>

        <hr />
        <Header>Mercedes CLS W219 - Kompresor / čerpadlo odpružení</Header>
        <img src="/W219-compressor.jpg" alt="auto-dily-motor" className="" />
        <Description>Cena: 12990 Kč</Description>
        <Description>
          Nový a originální WABCO, vyrobený v Německu, záruka výrobce: 24 měsíců<br />
          Číslo OEM Mercedes: A2113200304
        </Description>

        <hr />
        <Header>Filtr Kompresora + Převodník + Schéma umístění</Header>
        <Description>
          Cena: 990 Kč<br />
          <a href="https://shop.limak-airsuspension.pl/img/Foto/zestaw_w211_w220_w219.jpg" target="_blank" rel="noopener noreferrer">Zobrazit schéma</a>
        </Description>

        <hr />
        <Header>Regenerace tlumičů Mercedes CLS W219 – Klíč k Dokonalé Jízdě</Header>
        <Description>
          Regenerace tlumičů je klíčová pro zajištění bezpečnosti a komfortu jízdy v modelu Mercedes CLS W219.
        </Description>
        <Description>
          Správná funkčnost tlumičů zajišťuje stabilitu a pohodlí během jízdy. Proces regenerace vrací tlumičům jejich plnou funkčnost, což vede k lepší jízdní dynamice.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes CLS W219</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro udržení komfortu a bezpečnosti jízdy.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu?</strong><br />
            A: Poškozený měch může vést k nestabilní jízdě a ztrátě kontroly nad vozem.
          </Description>
          <Description>
            <strong>Q: Mohu si sám opravit kompresor odpružení?</strong><br />
            A: Doporučujeme svěřit opravu odborníkům, neboť je to složitý proces.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace?</strong><br />
            A: Může trvat od několika hodin do několika dnů, záleží na stavu tlumičů.
          </Description>
        </FAQSection>

        <Description>
          <strong>Podsumování:</strong><br />
          Regenerace tlumičů v Mercedes CLS W219 je klíčová pro zajištění jejich výkonu a bezpečnosti.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesEklasaRepair;
