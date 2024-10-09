import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";


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
         <Header />
      <Center>
        <Title>Díly pro model GLS-Třída</Title>
        {products.length === 0 ? (
          <NoProductsContainer>
            <h2>Žádné produkty nenalezeny</h2>
            <p>Žádné produkty odpovídající vašemu vyhledávání nebyly nalezeny.</p>
          </NoProductsContainer>
        ) : (
          <ProductsGrid products={products} />
        )}
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { '_id': -1 } });


  const modelNumbers = ["X166", "X167"];


  const filteredProducts = allProducts.filter(product =>
    modelNumbers.some(model => product.title.includes(model))
  );

  return {
    props: {
      products: JSON.parse(JSON.stringify(filteredProducts)),
    },
  };
}
