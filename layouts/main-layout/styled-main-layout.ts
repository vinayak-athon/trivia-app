import styled from "styled-components";

export const StyledMainLayoutContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
