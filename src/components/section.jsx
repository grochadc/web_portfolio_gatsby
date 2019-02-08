import React from "react";

import { StyledSection } from "./styledcomponents";

const Section = props => {
  return <StyledSection id={props.id}>{props.children}</StyledSection>;
};

export default Section;
