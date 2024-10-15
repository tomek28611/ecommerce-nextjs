import styled from "styled-components";

const TextContainer = styled.div`
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  font-family: Arial, sans-serif;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #007bff; /* Możesz zmienić na inny kolor */
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  strong {
    color: #d9534f; /* Kolor dla wyróżnionych słów */
  }
`;

export default function TextMain() {
  return (
    <TextContainer>
      <h2>Náhradní díly pro automobily - Auto díly za skvělé ceny</h2>

      <p>
        Hledáte kvalitní náhradní díly pro svůj vůz? Naše nabídka zahrnuje
        široký sortiment auto dílů, včetně motorových dílů, brzdových systémů,
        podvozků, karoserií a dalších nezbytných komponentů. Specializujeme se
        na náhradní díly pro <strong>Mercedes</strong>, ale nabízíme také díly pro
        další oblíbené značky automobilů.
      </p>

      <p>
        V našem e-shopu s auto díly najdete vše, co potřebujete pro opravy a
        údržbu svého auta. Nabízíme rychlé dodání, výhodné ceny a prvotřídní
        zákaznický servis. Ať už sháníte brzdy, oleje, filtry, nebo náhradní díly
        pro karoserii, u nás si určitě vyberete.
      </p>

      <p>
        Navštivte nás ještě dnes a podívejte se na naši nabídku autodílů. Jsme
        vaším spolehlivým partnerem pro nákup kvalitních náhradních dílů za
        rozumné ceny.
      </p>
    </TextContainer>
  );
}
