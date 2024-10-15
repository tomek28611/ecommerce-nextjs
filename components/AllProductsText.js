import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
  font-family: Arial, sans-serif;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #007bff; /* Barva nadpisu */
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  strong {
    color: #d9534f; /* Barva pro zvýrazněná slova */
  }
`;

export default function AllProducts() {
  return (
    <ProductContainer>
      <h2>Kompletní nabídka náhradních dílů</h2>

      <p>
        V našem internetovém obchodě najdete široký sortiment
        <strong> náhradních dílů</strong> pro automobily, které jsou nezbytné pro
        každou opravu a údržbu. Nabízíme vysoce kvalitní
        <strong> motory</strong>, <strong>zavěšení</strong>, <strong>kola</strong>,
        a <strong>disky</strong>, které splňují nejvyšší standardy kvality.
      </p>

      <p>
        Dále u nás naleznete <strong>karosářské díly</strong>, jako jsou
        <strong> dveře</strong>, <strong>kapoty</strong> a mnoho dalších prvků,
        které vrátí vašemu automobilu původní vzhled. Nabízíme také široký
        výběr <strong>interiérů automobilů</strong>, které zajistí komfort
        a eleganci ve vašem vozidle.
      </p>

      <p>
        Naše produkty jsou k dispozici za konkurenceschopné ceny a rychlé
        dodání zajistí, že se brzy vrátíte na silnici. Zajišťujeme také
        <strong> profesionální zákaznický servis</strong>, který vám pomůže
        vybrat správné díly pro vaše auto.
      </p>

      <p>
        Navštivte náš internetový obchod a objevte bohatou nabídku
        <strong> auto dílů</strong>, které splní všechna vaše očekávání.
      </p>
    </ProductContainer>
  );
}
