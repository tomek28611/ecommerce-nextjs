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

const MercedesVianoV639Repair = () => {
  return (
    <div>
      <Header1 />

      <Container>
        <Header>Nový měch Mercedes Viano / Vito V639 (2004-) Zadní</Header>
        <img src="/img/Foto/miech_mercedes_vito_v639.jpg" alt="auto-dily-motor" className="" />

        <Description>Cena: 3290 Kč Montáž: 2000 Kč</Description>
        <Description>Záruka: 24 měsíců</Description>
        <Description>OEM Číslo: A6393280101</Description>

        <hr />
        
        <Header>Kompresor / Kompresor NOVÝ!!!</Header>
        <Description>Výrobce OEM Mercedes-Benz: AMK</Description>
        <Description>Cena: 16990 Kč</Description>
        <Description>Záruka: 24 měsíců</Description>
        
        <Description>Porovnávací čísla MB:</Description>
        <Description>6393200204, 6393200404</Description>

        <hr />
        
        <Header>Regenerace tlumičů Mercedes Vito/Viano V639: Komplexní průvodce</Header>
        <Description>
          Mercedes Vito/Viano V639 je model vozidla, který spojuje funkčnost s komfortem jízdy. 
          Pro zachování těchto vlastností na nejvyšší úrovni je klíčová péče o technický stav vozidla, včetně systému odpružení. 
          V tomto průvodci se podíváme na to, proč je regenerace tlumičů tak důležitá a jaké prvky tvoří systém odpružení v tomto modelu.
        </Description>

        <Header>Význam tlumičů pro komfort jízdy</Header>
        <Description>
          tlumičy hrají klíčovou roli v zajištění komfortu jízdy. 
          V modelu Mercedes Vito/Viano V639 je regenerace tlumičů nezbytná, když začnou ztrácet svou účinnost, což negativně ovlivňuje komfort jízdy a bezpečnost.
        </Description>

        <Header>Měch – nepostradatelný prvek pneumatického odpružení</Header>
        <Description>
          Měch je nedílnou součástí systému pneumatického odpružení v mnoha moderních vozech, včetně modelu Mercedes Vito/Viano V639. 
          Funguje jako vzduchový polštář, který tlumí nárazy a vibrace a zajišťuje plynulou jízdu.
        </Description>

        <Header>Kompresor a pumpa odpružení – srdce systému</Header>
        <Description>
          Kompresor odpružení a pumpa odpružení jsou zodpovědné za dodávku vzduchu do měchů tlumiču. 
          Díky nim funguje systém pneumatického odpružení hladce a jízda je komfortní.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ: Nejčastější dotazy</FAQQuestion>
          <Description>
            <strong>Otázka: Je regenerace tlumičů nutná v modelu Mercedes Vito/Viano V639?</strong><br />
            Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v tomto modelu.
          </Description>
          <Description>
            <strong>Otázka: Jaké jsou příznaky opotřebovaných tlumičů v modelu Mercedes Vito/Viano V639?</strong><br />
            Příznaky opotřebovaných tlumičů zahrnují zhoršení komfortu jízdy, nadměrné vibrace a nestabilitu vozidla během jízdy.
          </Description>
          <Description>
            <strong>Otázka: Mohu si sám vyměnit měch tlumiču v modelu Mercedes Vito/Viano V639?</strong><br />
            Doporučujeme svěřit tuto službu odborníkům, aby byla zajištěna správná instalace a bezpečnost.
          </Description>
        </FAQSection>
      </Container>
    </div>
  );
};

export default MercedesVianoV639Repair;
