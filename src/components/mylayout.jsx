import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./navbar";
import Section from "./section";
import Icon from "./icon";
import VideoGrid from "./videogrid";
import Video from "./video";
import {
  ProfilePicture,
  ProfileName,
  Description,
  List,
  SectionTitle,
  Grid,
  Footer
} from "./styledcomponents";

import profilePicture from "../images/gonzo.jpg";

const MyLayout = () => {
  return (
    <div>
      <Navbar />
      <Section id="intro">
        <ProfilePicture src={profilePicture} />
        <ProfileName>GONZALO ROCHA</ProfileName>
        <Description>
          {" "}
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>
            I am a Communication Sciences graduate from Jalisco, Mexico.
            Currently I am teaching Communication and ESL at Universidad de
            Guadalajara. In my spare time I host a film club every semester on
            the local University Museum.
          </p>
          <h2>What makes me stand out:</h2>
        </Description>
        <List.Container>
          <List.Item>
            <h1>Web Design</h1>
            <p>
              I made this website from scratch. Over the years I taught myself
              to code and design websites. This site showcases my work on this
              area.
            </p>
            <p>You can check more of my websites in my github: </p>
            <p>
              <Icon gitub />
              <a href="https://github.com/grochadc/">gtihub.com/grochadc</a>
            </p>
          </List.Item>
          <List.Item>
            <h1>ESL</h1>
            <p>
              I have been teaching english as a second language for 5 years now.
            </p>
          </List.Item>
          <List.Item>
            <h1>Radio</h1>
            <p>
              One of the things that got me interested in storytelling was
              radio. For a little while I was a collaborator with a local radio
              show about film called Rodaje. It airs in XHUGG, the University of
              Guadalajara radio station. <FontAwesomeIcon icon="github" />
            </p>
          </List.Item>
        </List.Container>
      </Section>
      <Section id="reel">
        <SectionTitle>My reel</SectionTitle>
        <div>
          <Grid.Row>
            <Grid.Col size="md-12">
              <Video vimeoID="311983548" />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col size="md-6">
              <Video vimeoID="311983548" />
            </Grid.Col>
            <Grid.Col size="md-6">
              <Video vimeoID="311983548" />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col size="md-12">
              <Video vimeoID="311983548" />
            </Grid.Col>
          </Grid.Row>
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
      </Section>
      <Section id="interests">
        <SectionTitle>MY INTERESTS</SectionTitle>
        <List.Container>
          <List.Item>
            <h1>Directing</h1>
            <p>Ever since my first time at the movies.</p>
          </List.Item>
          <List.Item>
            <h1>Screenwriting</h1>
            <p>I always wanted to tell stories.</p>
          </List.Item>
          <List.Item>
            <h1>Cinematography</h1>
            <p>I remember my first camera.</p>
          </List.Item>
        </List.Container>
      </Section>
      <footer
        style={{
          marginTop: "15px",
          textAlign: "center",
          fontFamily: "Open Sans, sans-serif"
        }}
      >
        <p>Web Design by @medicengonzo</p>
      </footer>
    </div>
  );
};

export default MyLayout;
