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
  padding-top: 50px;
  padding-bottom: 1%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :nth-of-type(2n) {
    background-color: white;
    color: #373b44;
    a {
      color: #727a8d;
    }
  }
  :nth-of-type(2n + 3) {
    color: white;
    a {
      color: #727a8d;
    }
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

const Footer = styled.footer`
  background-color: #373b44;
  color: white;
  padding-top: 5px;
  text-align: center;
  height: 50px;
  font-family: "Open Sans", sans-serif;
`;

const PostersContainer = styled.div`
  display: flex;
`;

const Poster = styled.img`
  margin: 30px;
  height: 700px;
`;

export {
  StyledSection,
  ProfileName,
  ProfilePicture,
  Description,
  List,
  SectionTitle,
  Grid,
  Footer,
  PostersContainer,
  Poster
};
