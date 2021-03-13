import styled from "styled-components";

export const StyledHeading = styled.h1`
  cursor: pointer;
`;

export const StyledHeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.textColorInverse};
  background-color: ${({ theme }) => theme.colors.backgroundColorInverse};
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.625rem 0;
  width: 100%;
`;
