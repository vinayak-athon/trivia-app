import styled from "styled-components";
import { Button } from "../button";

export const StyledStartPlayContainer = styled(Button)`
  color: ${({ theme }) => theme.colors.textColorInverse};
  background: #0062cc;
  font-size: 1rem;
  border: none;
  width: 50%;
  margin: 0 auto;
`;
