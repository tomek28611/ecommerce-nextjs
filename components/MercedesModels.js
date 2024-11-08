
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Spinner from "@/components/Spinner"; 

const StyledModelsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// const ModelBox = styled.div`
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   text-align: center;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

const ModelBox = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  &:hover {
    filter: brightness(0.7); 
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's on top of everything */
`;

const models = [
  { class: "S-Trida", variants: ["W221", "W222", "W223"], image: "./s.webp" },
  { class: "E-Trida", variants: ["W212", "W213"], image: "./e.webp" },
  { class: "C-Trida", variants: ["W204", "W205", "W206"], image: "./c.webp" },
  { class: "A-Trida", variants: ["W169", "W176", "W177"], image: "./a.webp" },
  { class: "G-Trida", variants: ["W463"], image: "./g.webp" },
  { class: "GLA-Trida", variants: ["X156", "H247"], image: "./gla.webp" },
  { class: "GLK-Trida", variants: ["X204"], image: "./glk.webp" },
  { class: "GLC-Trida", variants: ["X253", "X254"], image: "./glc.webp" },
  { class: "GLE-(ML)-Trida", variants: ["W166", "W167", "C167", "C292"], image: "./gle.webp" },
  { class: "GLB-Trida", variants: ["X247"], image: "./glb.webp" },
  { class: "GLS-Trida", variants: ["X166", "X167"], image: "./gls.webp" },
  { class: "CLA-Trida", variants: ["C117", "C118"], image: "./cla.webp" },
  { class: "CLS-Trida", variants: ["W218", "W257"], image: "./cls.webp" },
  { class: "SLK-Trida", variants: ["R171", "R172"], image: "./slk.webp" },
  { class: "SLC-Trida", variants: ["R172"], image: "./slc.webp" },
  { class: "B-Trida", variants: ["W246", "W247"], image: "./b.webp" },
  { class: "SL-Trida", variants: ["R232", "R231", "R230"], image: "./sl.webp" },

]; 
const sortedModels = models.sort((a, b) => a.class.localeCompare(b.class));

export default function MercedesModels({ products }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false); 

  const handleModelClick = (className) => {
    setLoading(true); 
    router.push(`/nahradni-dily/mercedes/${className}`);
  };

  return (
    <>
      {loading && (
        <Overlay>
          <Spinner /> 
        </Overlay>
      )}
     <StyledModelsGrid>
  {models.map((model) => (
    <ModelBox 
      key={model.class} 
      onClick={() => handleModelClick(model.class)}
      style={{ backgroundImage: `url(${model.image})` }} 
    >
      <h3>{model.class}</h3>
      <p>Modele: {model.variants.join(", ")}</p>
    </ModelBox>
  ))}
</StyledModelsGrid>

    </>
  );
}
