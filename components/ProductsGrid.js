import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import Spinner from "@/components/Spinner"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #333;
  }
`;

export default function ProductsGrid({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  const handleProductClick = (productId) => {
    setIsLoading(true); 
    router.push(`/product/${productId}`); 
  };

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Hledejte podle názvu produktu nebo modelu"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading ? ( 
        <Spinner />
      ) : (
        <StyledProductsGrid>
          <div className="products-container">
            {filteredProducts?.map((product) => (
              <div key={product._id} onClick={() => handleProductClick(product._id)}>
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </StyledProductsGrid>
      )}
    </>
  );
}
