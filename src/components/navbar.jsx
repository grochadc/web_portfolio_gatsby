import React from "react";
import styled from "styled-components";

const links = [
  { id: "#intro", text: "Intro" },
  { id: "#reel", text: "My Reel" },
  { id: "#posters", text: "Poster Design" },
  { id: "#interests", text: "My Interests" }
];

const StyledNavbar = styled.div`
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  z-index: 2;

  a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    color: #373b44;
    text-decoration: none;
    font-family: Helvetica Neue, Helvetica, "Roboto", sans-serif;
    font-weight: 700;
  }
`;

const NavItems = styled.div`
  margin: auto;
  font-size: 20px;
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
        {links.map(link => (
          <a href={link.id}>{link.text}</a>
        ))}
      </NavItems>
    </StyledNavbar>
  );
};

export default Navbar;
