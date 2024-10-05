import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { useState } from "react";

export default function HomePage({featuredProduct, newProducts}) {
  const [menuOpen, setMenuOpen] = useState(false); // Stan dla otwartego/zamkniętego menu

  return (
    <div>
      <Header setMenuOpen={setMenuOpen} /> {/* Przekazujemy funkcję zmieniającą stan */}
      <Featured product={featuredProduct} menuOpen={menuOpen} /> {/* Przekazujemy stan otwartego menu */}
      <NewProducts products={newProducts} />
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
