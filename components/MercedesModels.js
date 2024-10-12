import styled from "styled-components";
import { useRouter } from "next/router";


const StyledModelsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ModelBox = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const models = [
  { class: "S-Trida", variants: ["W221", "W222", "W223"] },
  { class: "E-Trida", variants: ["W212", "W213"] },
  { class: "C-Trida", variants: ["W204", "W205", "W206"] },
  { class: "A-Trida", variants: ["W169", "W176", "W177"] },
  { class: "G-Trida", variants: ["W463"] },
  { class: "GLA-Trida", variants: ["X156", "H247"] },
  { class: "GLK-Trida", variants: ["X204"] },
  { class: "GLC-Trida", variants: ["X253", "X254"] },
  { class: "GLE-Trida", variants: ["W166", "W167"] },
  { class: "GLS-Trida", variants: ["X166", "X167"] },
  { class: "CLA-Trida", variants: ["C117", "C118"] },
  { class: "CLS-Trida", variants: ["W218", "W257"] },
  { class: "SLK-Trida", variants: ["R171", "R172"] },
  { class: "SLC-Trida", variants: ["R172"] },
  { class: "B-Trida", variants: ["W246", "W247"] },
];

export default function MercedesModels({products}) {
  const router = useRouter();



  const handleModelClick = (className) => {
    router.push(`/produkty/tridy/${className}`);
  };

  return (
    <StyledModelsGrid>
      {models.map((model) => (
        <ModelBox key={model.class} onClick={() => handleModelClick(model.class)}>
          <h3>{model.class}</h3>
          <p>Modele: {model.variants.join(", ")}</p>
        </ModelBox>
      ))}
    </StyledModelsGrid>
  );
}
