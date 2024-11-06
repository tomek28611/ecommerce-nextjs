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

const BMW5E39Repair = () => {
  return (
    <div>
      <Header1 />
   
      <Container>
        <Header>BMW 5 E39 (1995-2003) - Miech Zadní NOVÝ</Header>
        {/* <img src="/bmw5e39-rear-air-spring.jpg" alt="auto-dily-bmw" className="" /> */}

        <Description>LEVÝ / PRAVÝ</Description>
        <Description>
          <strong>Cena:</strong> 3000 Kč   <strong>Montáž:</strong> 1500 Kč
        </Description>

        <RepairOptions>
          Závěs: SPORT / COMFORT<br />
          <strong>OEM Čísla BMW:</strong><br />
          Sport levý: 37121095081<br />
          Sport pravý: 37121095082<br />
          Comfort levý: 37121094613<br />
          Comfort pravý: 37121094614
        </RepairOptions>

        <hr />
        <Header>BMW 5 E39 (1995-2003) - Regenerace Tlumičů</Header>
        <Description>
          BMW řady 5 E39 není jen ikonou designu, ale také symbolem technologické inovace. Jedním z prvků, které tento model odlišují, je použití pneumatického odpružení, které zajišťuje nezrovnalý komfort jízdy. Nicméně, stejně jako každý složitý mechanický systém, vyžaduje odpovídající údržbu a opravy. Regenerace tlumičů je klíčovou službou pro majitele BMW řady 5 E39.
        </Description>
        <Description>
          Regenerace tlumičů je proces, jehož cílem je obnovit původní výkon tlumičů prostřednictvím opravy nebo výměny poškozených částí. U BMW řady 5 E39 může tento proces zahrnovat prvky, jako jsou měch nebo kompresor odpružení.
        </Description>
        <Description>
          Miech je pružná nádobka naplněná vzduchem, která se rozšiřuje a stahuje podle množství vzduchu dodaného kompresorem odpružení. Jeho hlavním úkolem je absorbovat vibrace a nárazy během jízdy, což se překládá do plynulosti a komfortu jízdy. Když měch dojde opotřebení nebo poškození, může to vést ke zhoršení komfortu jízdy a výkonnosti odpružení.
        </Description>
        <Description>
          Kompresor odpružení je klíčovým prvkem systému pneumatického odpružení. Jeho úkolem je dodávat vzduch do měchu, což umožňuje regulaci výšky odpružení. Pokud kompresor odpružení selže, může to mít za následek nesprávné fungování odpružení, což ovlivňuje komfort jízdy a bezpečnost.
        </Description>

        <FAQSection>
          <FAQQuestion>FAQ – Často Kladené Dotazy o BMW 5 E39</FAQQuestion>
          <Description>
            <strong>Q: Je regenerace tlumičů u BMW 5 E39 nezbytná?</strong><br />
            A: Ano, regenerace tlumičů je klíčová pro zachování komfortu a bezpečnosti jízdy v modelech E39.
          </Description>
          <Description>
            <strong>Q: Jaké jsou příznaky poškozeného měchu v BMW 5 E39?</strong><br />
            A: Poškozený měch může způsobit nerovnoměrnou jízdu, hluk a ztrátu kontroly nad vozem, zejména v modelech E39.
          </Description>
          <Description>
            <strong>Q: Můžu si sám opravit kompresor odpružení v BMW 5 E39?</strong><br />
            A: Oprava kompresoru odpružení v modelech E39 je složitý proces a doporučuje se svěřit ji odborníkům.
          </Description>
          <Description>
            <strong>Q: Jak dlouho trvá proces regenerace tlumičů u BMW 5 E39?</strong><br />
            A: Proces může trvat od několika hodin až po několik dnů, v závislosti na stavu tlumičů a dostupnosti náhradních dílů pro modely E39.
          </Description>
        </FAQSection>

        <Description>
          <strong>Souhrn:</strong><br />
          Regenerace tlumičů u BMW 5 E39 je klíčový proces, který může významně ovlivnit výkon a bezpečnost tohoto vozidla.
        </Description>
      </Container>
    </div>
  );
};

export default BMW5E39Repair;
