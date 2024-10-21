
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #000;
  }

  p {
    margin-bottom: 15px;
  }

  strong {
    color: #000;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ExpandableText = ({ title, content }) => {
  const [showFullText, setShowFullText] = useState(false);
  const shortText = content.slice(0, 100) + '...';

  return (
    <Container>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: showFullText ? content : shortText }} />
      <button onClick={() => setShowFullText(prev => !prev)}>
        {showFullText ? "Méně" : "Více..."}
      </button>
    </Container>
  );
};

export default ExpandableText;
