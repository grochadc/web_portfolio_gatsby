import React from "react";
import styled, { css } from "styled-components";

const VideoContainer = styled.div`
  ${props =>
    props.size
      ? css`
          margin: 10px 0;
        `
      : null}
  padding: 56.25% 0 0 0;
  position: relative;
`;

const VideoSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <VideoContainer>
              <iframe
                title="video4"
                src="https://player.vimeo.com/video/97610630?color=ffffff"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </VideoContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <VideoContainer size>
              <iframe
                title="video1"
                src="https://player.vimeo.com/video/293291428?color=ffffff"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </VideoContainer>
          </div>
          <div className="col-md-6">
            <VideoContainer size>
              <iframe
                title="video2"
                src="https://player.vimeo.com/video/294508362?color=ffffff"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </VideoContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <VideoContainer>
              <iframe
                title="video3"
                src="https://player.vimeo.com/video/282124929?color=ffffff"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%"
                }}
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
              />
            </VideoContainer>
          </div>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </div>
  );
};

export default VideoSection;
