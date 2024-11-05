import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`

const Section = styled.section`
  margin-bottom: 20px;
`

const Subheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  color: #555;
`

const TermsAndConditions = () => {
  return (
    <>
    <Header/>
    <Container>
      <Heading>Obchodní podmínky</Heading>
      
      <Section>
        <Subheading>1. Úvodní ustanovení</Subheading>
        <Paragraph>
          Tyto obchodní podmínky (dále jen &quot;podmínky&quot;) upravují práva a povinnosti mezi prodávajícím a kupujícím při prodeji použitých automobilových součástek značky Mercedes-Benz (dále jen &quot;zboží&quot;). Kupující podáním objednávky potvrzuje, že souhlasí s těmito podmínkami.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>2. Popis zboží</Subheading>
        <Paragraph>
          Zboží nabízené k prodeji je použité a prodává se ve stavu &quot;jak stojí a leží&quot;, bez dalších záruk nad rámec zákonných povinností prodávajícího. Prodávající nenese odpovědnost za jakékoli škody vzniklé nesprávnou instalací nebo použitím zboží v rozporu s doporučeními.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>3. Záruka a reklamace</Subheading>
        <Paragraph>
          Vzhledem k charakteru použitých součástek poskytuje prodávající záruku pouze na skryté vady, které byly přítomny v okamžiku prodeje a které se projeví do 6 měsíců od nákupu. Reklamace budou řešeny případ od případu. Prodávající si vyhrazuje právo poskytnout pouze částečnou refundaci nákladů při vrácení zboží, a to v závislosti na stavu vráceného zboží a rozsahu jeho opotřebení.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>4. Podmínky vrácení zboží</Subheading>
        <Paragraph>
          Kupující má možnost vrátit zboží do 14 dnů od jeho převzetí, pokud je zboží v nezměněném stavu, ve kterém bylo doručeno. Při splnění těchto podmínek má kupující nárok na částečnou refundaci ceny zboží, která bude stanovena po posouzení stavu vráceného zboží. Náklady na vrácení zboží hradí kupující.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>5. Odpovědnost za instalaci</Subheading>
        <Paragraph>
          Prodávající neodpovídá za správnost montáže nebo za poškození způsobené nesprávnou instalací zboží třetí stranou. Doporučujeme provést montáž u autorizovaného servisu nebo odborníka.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>6. Ochrana osobních údajů</Subheading>
        <Paragraph>
          Prodávající se zavazuje chránit osobní údaje kupujícího v souladu s platnými právními předpisy. Osobní údaje budou použity výhradně pro účely zpracování objednávky a doručení zboží.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>7. Závěrečná ustanovení</Subheading>
        <Paragraph>
          Tyto obchodní podmínky jsou platné od [datum] a prodávající si vyhrazuje právo je kdykoli aktualizovat. Jakékoli změny budou zveřejněny na webových stránkách.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>Kontakt</Subheading>
        <Paragraph>
          V případě dotazů nebo reklamací nás můžete kontaktovat na: 606 400 968.
        </Paragraph>
      </Section>
    </Container>
   <Footer />
    </>
  )
}

export default TermsAndConditions
