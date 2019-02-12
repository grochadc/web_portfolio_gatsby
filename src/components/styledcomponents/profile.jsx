import styled from "styled-components";
import Img from "gatsby-image";

const ProfileName = styled.h1`
  font-family: "Bungee", sans-serif;
  font-weight: bold;
  font-size: 70px;
  color: white;
  margin: 0;
`;

const ProfilePicture = styled(Img)`
  width: 300px;
  border-radius: 50%;
  margin: 50px 0;
  border: 4px solid white;
`;

export { ProfileName, ProfilePicture };
