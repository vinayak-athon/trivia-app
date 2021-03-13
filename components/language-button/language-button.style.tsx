import styled from "styled-components";
import { Button } from "../button";

export const StyledLanguageButtonContainer = styled(Button)<{
  isActive: boolean;
}>`
  background-color: ${({ isActive }) => (isActive ? "green" : "inherit")};
  color: inherit;
  font-size: 10px;
  border: none;
`;
