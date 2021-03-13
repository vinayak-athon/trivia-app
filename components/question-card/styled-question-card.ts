import styled from "styled-components";

export const StyledQuestionCardContainer = styled.article`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 0 5px;
`;

export const StyledQuestionContainer = styled.div`
  border: 1px solid;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  display: grid;
  overflow: inherit;
`;

export const StyledProgressContainer = styled.div`
  text-align: right;
  font-weight: 700;
  &:before {
    content: "(";
  }
  &:after {
    content: ")";
  }
`;
