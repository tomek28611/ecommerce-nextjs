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

const ScrollIndicator = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 12px;
  height: 100vh;
  background: #ddd;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  background: #333;
  width: 100%;
  height: ${(props) => props.scrollPosition}%;
  transition: height 0.3s ease;
`;

export default function ProductsGrid({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const updateScrollPosition = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollPosition(scroll);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

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

  const handleScrollClick = (e) => {
    const clickY = e.clientY; // Y-owa pozycja kliknięcia
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTo = (clickY / windowHeight) * pageHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth', 
    });
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

      <ScrollIndicator onClick={handleScrollClick}>
        <ProgressBar scrollPosition={scrollPosition} />
      </ScrollIndicator>
    </>
  );
}
