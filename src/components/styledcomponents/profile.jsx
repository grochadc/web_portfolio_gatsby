import styled from "styled-components";

const ProfileName = styled.h1`
  font-family: "Bungee", sans-serif;
  font-weight: bold;
  font-size: 70px;
  color: white;
  margin: 0;
`;

const ProfilePicture = styled.img`
  width: 300px;
  border-radius: 50%;
  margin: 50px 0;
  border: 4px solid white;
`;

export { ProfileName, ProfilePicture };
