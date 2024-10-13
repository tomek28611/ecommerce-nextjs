import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ButtonsGroup from "@/components/ButtonsGroup";
import styled from "styled-components";

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


export default function HomePage({featuredProduct, newProducts}) {
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('message') === 'success') {
      alert('Zpráva byla odeslána!');
    }
  }, []);

  return (
    <div>
            {/* <BackgroundImage />
            <Overlay /> */}
      <Header setMenuOpen={setMenuOpen} /> 
      <ButtonsGroup />
      <Featured product={featuredProduct} menuOpen={menuOpen} /> 
      <div id="new-products">
        <NewProducts products={newProducts} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '640de2b12aa291ebdf213d48';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
