import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import MyLayout from "../components/mylayout";

library.add(fab);
const GlobalStyle = createGlobalStyle`a {color: #aaafbb;}`;

const IndexPage = () => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Bungee|Open+Sans|Roboto|Sigmar+One"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous"
      />
      <title>Gonzalo Rocha Web Portfolio</title>
    </Helmet>
    <GlobalStyle />
    <MyLayout />
  </div>
);

export default IndexPage;
