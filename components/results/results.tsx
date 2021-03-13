import * as React from "react";
import { useResult } from "@Hooks";
import { StyledResultsContainer } from "./styled-results";

export const Results: React.FC = React.memo(() => {
  const { result } = useResult();

  return (
    <StyledResultsContainer>
      {result.map(({ question, emoji }) => (
        <div key={question}>
          <span>{emoji}</span>
          <span>{question}</span>
        </div>
      ))}
    </StyledResultsContainer>
  );
});
