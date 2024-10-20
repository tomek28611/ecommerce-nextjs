import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import MercedesModels from "./MercedesModels";
import { useRouter } from "next/router"; 
import { useContext, useState } from "react";
import Spinner from "@/components/Spinner"; 



const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

const HighlightedLink = styled.a`
  color: black; 
  text-decoration: none;
  font-weight: 700;
  &:hover {
    text-decoration: underline; 
  }
`;

export default function NewProducts({ products }) {
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const handleNavigation = (url) => {
    setIsLoading(true); 
    router.push(url).then(() => setIsLoading(false)); 
  };

  return (
    <div id="new-products">
    <Center>
      <Title>
        Vyberte třídu nebo{" "}
        <HighlightedLink onClick={() => handleNavigation('/products')}>Všechny produkty...</HighlightedLink>
        
        {isLoading && <Spinner />}
      </Title>
      <MercedesModels products={products} />
    </Center>
    </div>
  );
}
