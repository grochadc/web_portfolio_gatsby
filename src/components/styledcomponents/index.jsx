import styled, { css } from "styled-components";
import List from "./list";
import { ProfileName, ProfilePicture } from "./profile.jsx";
import Grid from "./grid";

const StyledSection = styled.section`
  background-color: #373b44;
  margin: 0;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding-bottom: 1%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :nth-of-type(2n) {
    background-color: white;
    color: #373b44;
  }
  :nth-of-type(2n + 3) {
    color: white;
  }
`;

const Description = styled.div`
  width: 40%;
  text-align: center;
  h2 {
    font-family: "Bungee", sans-serif;
    font-size: 2em;
    color: white;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Sigmar One", cursive;
  font-size: 3em;
`;

export {
  StyledSection,
  ProfileName,
  ProfilePicture,
  Description,
  List,
  SectionTitle,
  Grid
};
