import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import MercedesModels from "./MercedesModels";
import Link from "next/link"; // Import the Link component from Next.js

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

const HighlightedLink = styled(Link)`
  color: #0070f3; /* Change to your desired color */
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* Optional: underline on hover */
  }
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>
        Vyberte třídu nebo{" "}
        <HighlightedLink href="/products">Všechny produkty...</HighlightedLink>
      </Title>
      <MercedesModels products={products} />
    </Center>
  );
}
