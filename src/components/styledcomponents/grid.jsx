import styled, { css } from "styled-components";

const GridRow = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  :before,
  :after {
    content: " ";
    display: table;
  }
`;

const GridCol = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  ${({ size }) =>
    size === "md-12"
      ? css`
          widht: 100%;
        `
      : size === "md-6"
      ? css`
          width: 50%;
        `
      : null}
  width: ${props =>
    props.size == "md-12" ? "100%" : props.size == "md-6" ? "50%" : "auto"};
`;

const Grid = {
  Row: GridRow,
  Col: GridCol
};

export default Grid;
