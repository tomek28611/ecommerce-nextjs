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

const MercedesSLW230Repair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes SL W230 - Amortizátor Zadní</Header>
        <Description>Verze Standard / Verze AMG</Description>
        <Description>(hydraulické odpružení ABC – Active Body Control)</Description>
        <Description>Cena: 17990 Kč netto</Description>
        <Description>Montáž: 3000 Kč netto</Description>

        <hr />
        <Header>Mercedes SL W230 - Amortizátor Přední</Header>
        <Description>Verze Standard / Verze AMG</Description>
        <Description>(hydraulické odpružení ABC – Active Body Control)</Description>
        <Description>Cena: 17990 Kč netto</Description>
        <Description>Montáž: 3000 Kč netto</Description>

        <hr />
        <Header>Regenerace Amortizátorů pro Mercedes SL W230: Komplexní Průvodce</Header>
        <Description>
          Mercedes SL W230 je model, který kombinuje luxus a skvělé výkony. Aby byla jízda bezchybná, je klíčová pravidelná údržba technického stavu vozu, včetně systému odpružení.
        </Description>
        <Description>
          V tomto průvodci vysvětlíme, proč je regenerace amortizátorů tak důležitá a jaké prvky tvoří systém odpružení tohoto modelu.
        </Description>

        <hr />
        <Header>Význam Amortizátorů pro Komfort Jízdy</Header>
        <Description>
          Amortizátory hrají klíčovou roli v zajištění komfortu jízdy. U modelu Mercedes SL W230 je regenerace amortizátorů nezbytná, když začínají ztrácet svou účinnost, což negativně ovlivňuje komfort a bezpečnost jízdy.
        </Description>

        <hr />
        <Header>Měch – Klíčový Prvek Pneumatického Odpružení</Header>
        <Description>
          Měch je integrální součástí systému pneumatického odpružení v mnoha moderních vozech, včetně modelu Mercedes SL W230. Působí jako vzduchový polštář, který tlumí nárazy a vibrace, čímž zajišťuje hladkou jízdu.
        </Description>

        <hr />
        <Header>Kompressor a Čerpadlo Odpružení – Srdce Systému</Header>
        <Description>
          Kompressor odpružení a čerpadlo odpružení jsou zodpovědné za přívod vzduchu do měchů amortizátorů. Díky nim systém pneumatického odpružení funguje hladce a jízda je pohodlná.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o Mercedes SL W230</FAQQuestion>
          <Description>
            <strong>Otázka: Je regenerace amortizátorů nutná pro model Mercedes SL W230?</strong><br />
            Odpověď: Ano, regenerace amortizátorů je klíčová pro zachování komfortu a bezpečnosti jízdy v tomto modelu.
          </Description>
          <Description>
            <strong>Otázka: Jaké jsou příznaky opotřebovaných amortizátorů u modelu Mercedes SL W230?</strong><br />
            Odpověď: Příznaky opotřebovaných amortizátorů zahrnují snížený komfort jízdy, nadměrné nárazy a vibrace a nestabilitu vozidla během jízdy.
          </Description>
          <Description>
            <strong>Otázka: Mohu si sám vyměnit měch amortizátoru v modelu Mercedes SL W230?</strong><br />
            Odpověď: Doporučujeme svěřit tuto službu odborníkům, aby byla zajištěna správná instalace a bezpečnost.
          </Description>
        </FAQSection>

        <Description>
          <strong>Závěr:</strong><br />
          Regenerace amortizátorů v modelu Mercedes SL W230 je zásadní proces, který může výrazně ovlivnit výkon a bezpečnost tohoto luxusního automobilu.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesSLW230Repair;
