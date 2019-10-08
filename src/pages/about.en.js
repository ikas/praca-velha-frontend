import React from "react";
import { graphql } from "gatsby";

import AboutFinalText from '../components/about/final-text';
import AboutImage from '../components/about/image';
import AboutLogoText from '../components/about/logo-text';
import AboutMission from '../components/about/mission';
import AboutTextInBlack from '../components/about/text-in-black';
import AboutVision from '../components/about/vision';
import Box from '../components/box';
import Heading from '../components/heading';
import Layout from '../components/layout';
import Separator from '../components/content-separator';

export default class HomePage extends React.Component {
  render() {
    const {
      title,
      missionTitle,
      visionTitle,
      aboutMainText,
      textInBlack,
      missionText,
      visionText,
      finalText,
    } = this.props.data.allContentfulAbout.edges[0].node
    return (
      <Layout location={this.props.location} title={title}>
        <Box bg="#fff">
          <AboutImage>
            <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
              <Heading color="white">{title}</Heading>
            </Box>
          </AboutImage>

          <AboutLogoText html={aboutMainText.childContentfulRichText.html} />
          <AboutTextInBlack html={textInBlack.childContentfulRichText.html} />
          <AboutMission title={missionTitle} html={missionText.childContentfulRichText.html} />
          <Separator />
          <AboutVision title={visionTitle} html={visionText.childContentfulRichText.html} />
          <Separator />
          <AboutFinalText html={finalText.childContentfulRichText.html} />
        </Box>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allContentfulAbout(filter: { node_locale: { eq: "en-US" }}) {
      edges {
        node {
          title
          missionTitle
          visionTitle
          aboutMainText {
            childContentfulRichText {
              html
            }
          }
          textInBlack {
            childContentfulRichText {
              html
            }
          }
          missionText {
            childContentfulRichText {
              html
            }
          }
          visionText {
            childContentfulRichText {
              html
            }
          }
          finalText {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
