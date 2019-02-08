import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  & > * {
    width: 640px;
    height: 360px;
  }
  & > *:nth-of-type(3n) {
    grid-column: 1 / 3;
    width: 100%;
    padding: 27.25% 50%;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    display: flex;
    flex-direction: column;
  }
`;

const VideoGrid = ({ children }) => (
  <Container>
    {children}
    <script src="https://player.vimeo.com/api/player.js" />
  </Container>
);

export default VideoGrid;
