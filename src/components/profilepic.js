import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const RawProfilePicture = props => (
  <StaticQuery
    query={graphql`
      query {
        profilePic: file(relativePath: { eq: "gonzo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.profilePic.childImageSharp.fluid} />}
  />
);

const ProfilePicture = styled(RawProfilePicture)`
  width: 300px;
  border-radius: 50%;
  margin: 50px 0;
  border: 4px solid white;
`;

export default ProfilePicture;
