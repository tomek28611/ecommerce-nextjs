import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ButtonsGroup from "@/components/ButtonsGroup";
import styled from "styled-components";
import Head from "next/head";
import TextMain from "@/components/TextMain";
import NewPromo from "@/components/NewPromo";

const BackgroundContainer = styled.div`
   background-image: url('/bg-engine.avif');
   
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex; 
  flex-direction: column; 
  height: 100vh;
`;

const BackgroundImage = styled.div`
  background-image: url('/bg-engine.avif'); 
 
  background-size: cover;
  background-position: center;
  height: 100%; 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5); 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const MainContent = styled.div`
  padding-top: 100px; 
`;





export default function HomePage({ featuredProduct, newProducts }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('message') === 'success') {
      alert('Zpráva byla odeslána!');
    }
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Autodíly pro Mercedes – Rychlé a spolehlivé dodání </title>
        <meta
          name="description"
          content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes. Nabízíme motorové díly, prvky karoserie, elektrické součástky a další. Rychlá dodávka, skvělé ceny a spolehlivý servis. Vaše auto si zaslouží to nejlepší!"
        />

        <link rel="cannonical" href="https://autodilyexpress.cz" />
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
      <div className="main-container">
      <Header setMenuOpen={setMenuOpen} />
      <ButtonsGroup />
      <NewPromo />
      <Featured product={featuredProduct} menuOpen={menuOpen} />
      <div id="new-products">
        <NewProducts products={newProducts}  />
      </div>
      <TextMain />
      <Footer />
    </div>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '640de2b12aa291ebdf213d48';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}