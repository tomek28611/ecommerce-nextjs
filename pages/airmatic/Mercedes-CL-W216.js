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

const MercedesCLW216Repair = () => {
  return (
    <div>
      <Header1 />
      <Container>
        <Header>Mercedes CL W216 (2007-2012) - Měch Přední Regenerace</Header>
        <Description>Cena: 7990 Kč                   Montáž na amortizátor: 1000 Kč</Description>
        <Description>Montáž do vozidla: 200 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) 4 MATIC - Měch Přední Nový</Header>
        <Description>Cena: 7990 Kč                   Montáž na amortizátor: 1000 Kč</Description>
        <Description>Montáž do vozidla: 2000 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Amortizátor Přední</Header>
        <Description>Cena: 13990 Kč                   Montáž: 2000 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Měch Přední Regenerace – 4 MATIC</Header>
        <Description>Cena: 7990 Kč                   Montáž do vozidla: 2500 Kč</Description>
        <Description>Montáž na amortizátor: 1000 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Amortizátor Přední 4 MATIC</Header>
        <Description>Cena: 14990 Kč                   Montáž: 2500 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Měch Zadní Regenerace</Header>
        <Description>Cena: 7990 Kč                   Montáž do vozidla: 3000 Kč</Description>
        <Description>Montáž na amortizátor: 1000 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Měch Zadní Nový</Header>
        <Description>Cena: 7990 Kč                   Montáž do vozidla: 3000 Kč</Description>
        <Description>Montáž na amortizátor: 1000 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Amortizátor Zadní</Header>
        <Description>Cena: 13990 Kč                   Montáž: 3000 Kč</Description>
        
        <hr />
        <Header>Mercedes CL W216 (2007-2012) - Kompresor / čerpadlo odpružení</Header>
        <Description>Nový – originál MB !!!</Description>
        <Description>Výrobce OEM: AMK</Description>
        <Description>Cena: 14990 Kč                   Montáž: 2500 Kč</Description>
        
        <hr />
        <Header>Rozdělovač / blok ventilů originál RAPA</Header>
        <Description>Cena: 10990 Kč</Description>
        
        <hr />
        <Header>Filtr kompresoru + relé + schéma umístění</Header>
        <Description>Cena: 990 Kč</Description>

        <hr />
        <Header>PŘEDNÍ</Header>
        <Header>(zavěšení hydraulické Active Body Control)</Header>
        <Description>Cena: 17990 Kč bez DPH Montáž: 3000 – 4000 Kč</Description>

        <hr />
        <Header>ZADNÍ</Header>
        <Header>(zavěšení hydraulické Active Body Control)</Header>
        <Description>Cena: 17990 Kč bez DPH Montáž: 3000 – 4000 Kč</Description>

        <Description>
          <strong>Regenerace amortizátorů a další služby pro Mercedes CL W216</strong><br />
          Vítejte v našem autoservisu, specializujícím se na služby regenerace amortizátorů a další opravy spojené se zavěšením pro automobily značky Mercedes CL W216 (2007-2012). Jsme hrdí na naši znalost a zkušenosti v oblasti automobilového zavěšení, a naše služby jsou navrženy tak, aby zajistily nejvyšší kvalitu, výkonnost a bezpečnost vašeho vozidla.
        </Description>
      </Container>
    </div>
  );
};

export default MercedesCLW216Repair;
