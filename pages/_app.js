import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import '../styles/globals.css';

import { useRouter } from 'next/router';
import { ProductProvider } from '@/context/ProductContext';
import { useEffect, useState } from 'react';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: white;
    padding:15px;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      console.log("Fetched products:", data);
      setProducts(data);
    }

    fetchProducts();
  }, [router]);
  return (
    <>

      <GlobalStyles />
      <CartContextProvider>
        <ProductProvider initialProducts={products}>
          <Component {...pageProps} />
        </ProductProvider>
      </CartContextProvider>

    </>
  );
}
