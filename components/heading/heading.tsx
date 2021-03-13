import * as React from "react";
import { StyledHeadingContainer } from "./heading.style";
import { IHeading } from "./heading.type";

const Heading: React.FunctionComponent<IHeading.IProps> = (
  props
): JSX.Element => {
  const { text } = props;

  return (
    <StyledHeadingContainer>
      <h3>{text}</h3>
    </StyledHeadingContainer>
  );
};

export { Heading };
