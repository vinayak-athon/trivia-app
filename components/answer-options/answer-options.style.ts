import styled from "styled-components";
import { Button } from "../button";

export const StyledAnswerOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const StyledOption = styled(Button)`
  color: ${({ theme }) => theme.colors.textColorInverse};
  font-size: 1rem;
  border: none;
  margin: 0 auto;
  width: 100%;
`;

export const StyledOptionTrue = styled<any>(StyledOption)`
  background: #0062cc;
`;

export const StyledOptionFalse = styled<any>(StyledOption)`
  background: red;
`;
