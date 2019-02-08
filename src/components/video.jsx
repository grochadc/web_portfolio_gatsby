import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
`;

const Video = props => {
  const styles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%"
  };
  return (
    <VideoContainer>
      <iframe
        title={`vimeo-${props.vimeoID}`}
        src={`https://player.vimeo.com/video/${props.vimeoID}?color=${
          props.color ? props.color : "ffffff"
        }&byline=${props.byline ? 1 : 0}`}
        frameborder="0"
        width="640"
        height="360"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        style={styles}
      />
    </VideoContainer>
  );
};

export default Video;
