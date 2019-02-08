import React from "react";
import { createGlobalStyle } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import MyLayout from "../components/mylayout";

library.add(faGithub);

const GlobalStyle = createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css?family=Bungee|Open+Sans|Roboto|Sigmar+One')
  }`;

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <MyLayout />
  </div>
);

export default IndexPage;
