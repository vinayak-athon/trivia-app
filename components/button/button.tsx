import React from "react";
import styled from "styled-components";
import { IButton } from "./button.type";

const Container = styled.button<IButton.IProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ theme }) => theme.colors.textColor};
  background: #f9da2e;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: Arial;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const Button: React.FunctionComponent<IButton.IProps> = props => {
  return <Container {...props} />;
};
