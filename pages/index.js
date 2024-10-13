import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import ButtonsGroup from "@/components/ButtonsGroup";

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
