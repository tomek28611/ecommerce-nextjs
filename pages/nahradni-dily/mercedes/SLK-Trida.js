import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Info from "@/components/InfoSupport";
import Head from "next/head";

const NoProductsContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
`;
export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Auto Dily Express | Náhradní díly pro Mercedes SLK třídy</title>
        <meta
          name="description"
          content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
        />

        <link rel="cannonical" href="https://autodilyexpress.cz/SLK-Trida" />
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
        <Title>Díly pro model S-Třída</Title>
        {products.length === 0 ? (
          <NoProductsContainer>
            <h2>Žádné produkty nenalezeny</h2>
            <p>Žádné produkty odpovídající vašemu vyhledávání nebyly nalezeny.</p>
          </NoProductsContainer>
        ) : (
          <ProductsGrid products={products} />
        )}
      </Center>
      <Info />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });


  const modelNumbers = ["171", "172"];


  const filteredProducts = allProducts.filter(product =>
    modelNumbers.some(model => product.title.includes(model))
  );

  return {
    props: {
      products: JSON.parse(JSON.stringify(filteredProducts)),
    },
  };
}
