import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Info from "@/components/InfoSupport";
import Head from "next/head";
import { useState } from "react";


const NoProductsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
`;
const SEOText = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #000;
  }

  p {
    margin-bottom: 15px;
  }

  strong {
    color: #000;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const seoTextContent = `
Elektrický systém vašeho vozu je klíčovou součástí jeho funkčnosti. V naší nabídce naleznete širokou škálu náhradních dílů pro elektrické systémy automobilů, včetně alternátorů, startérů, baterií, kabelových svazků, pojistek a mnoha dalších součástí.

Specializujeme se na díly pro Mercedes, ale nabízíme také elektrické komponenty pro další oblíbené značky vozidel. Naše díly jsou vysoce kvalitní, zajišťují spolehlivý výkon a bezpečný provoz vašeho vozu. Ať už potřebujete náhradní díly pro opravu elektrického systému nebo pro jeho modernizaci, u nás najdete vše, co potřebujete.

Navštivte náš e-shop a objevte naši nabídku dílů pro elektrické systémy, které vám pomohou udržet váš vůz v perfektním technickém stavu.


`;
export default function ProductsPage({ products }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(prev => !prev);
  return (
    <>
     <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Auto Dily Express | Náhradní díly pro elektrický systém vozu</title>
        <meta
          name="description"
          content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
        />

        <link rel="cannonical" href="https://autodilyexpress.cz/elektrika" />
        <link rel="apple-touch-icon" sizes="180x180" href="/auto-dily-logo.png" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:image" content="/auto-dily-logo.png" />
        <meta property="og:image:width" content="50" />
        <meta property="og:image:height" content="50" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta property="og:url" content="https://autodilyexpress.cz" />
        <meta property="og:site_name" content="autodilyexpress.cz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka" />
        <meta name="twitter:description" content="Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka"></meta>

      </Head>
      <Header />
      <Center>
      <h1>Náhradní díly pro model Mercedes elektrický systém vozu</h1>
      <SEOText>
          <h2>Nabídka náhradních dílů</h2>
          <p>
            {isExpanded ? seoTextContent : `${seoTextContent.slice(0, 100)}...`}
          </p>
          <button onClick={toggleText}>
            {isExpanded ? "Méně" : "Více..."}
          </button>
        </SEOText>
        {products.length === 0 ? (
          <NoProductsContainer>
            <h2>Žádné produkty nenalezeny</h2>
            <p>Žádné produkty odpovídající vašemu vyhledávání nebyly nalezeny.</p>
          </NoProductsContainer>
        ) : (
          <ProductsGrid products={products} />
        )}
      </Center>
      <Info/>
    </>
  );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });
  
  
    const modelNumbers = ["lampa", "svítilna", "světla", "světlo"];
  
  
    const filteredProducts = allProducts.filter(product =>
      modelNumbers.some(model => product.title.includes(model))
    );
  
    return {
      props: {
        products: JSON.parse(JSON.stringify(filteredProducts)),
      },
    };
  }