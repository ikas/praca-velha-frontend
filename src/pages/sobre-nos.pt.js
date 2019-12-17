import React from "react"
import { graphql } from "gatsby"
import { isMobile } from "react-device-detect"

import AboutFinalText from '../components/about/final-text'
import AboutImage from '../components/about/image'
import AboutSection from '../components/about/section'
import AboutTextInBlack from '../components/about/text-in-black'
import Box from '../components/box'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Separator from '../components/content-separator'

import Logo from '../components/logo'
import MissionImage from '../components/about/mission-image'
import VisionImage from '../components/about/vision-image'

export default class AboutPage extends React.Component {
  render() {
    const {
      title,
      missionTitle,
      visionTitle,
      servicesTitle,
      aboutMainText,
      textInBlack,
      missionText,
      visionText,
      servicesText,
      finalText,
    } = this.props.data.allContentfulAbout.edges[0].node
    return (
      <Layout location={this.props.location} title={title}>
        <Box bg="#fff">
          <AboutImage>
            { isMobile && (
              <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
                <Heading color="white" level={2}>{title}</Heading>
              </Box>
            )}
            { !isMobile && (
              <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
                <Heading color="white">{title}</Heading>
              </Box>
            )}
          </AboutImage>
          <Box py={4}>
            <AboutSection
              html={aboutMainText.childContentfulRichText.html}
              image={<Logo/>}
              textRight
              imageSize={'50%'}
            />
          </Box>
          <AboutTextInBlack html={textInBlack.childContentfulRichText.html} />
          <AboutSection
            title={missionTitle}
            html={missionText.childContentfulRichText.html}
            image={!isMobile ? <MissionImage/> : null}
            textRight={false}
          />
          <Separator />
          <AboutSection
            title={visionTitle}
            html={visionText.childContentfulRichText.html}
            image={!isMobile ? <VisionImage/> : null}
            textRight
          />
          <AboutSection
            title={servicesTitle}
            html={servicesText.childContentfulRichText.html}
            image={<Logo/>}
            theme='inverted'
            imageSize={'50%'}
            textRight
          />
          <AboutFinalText html={finalText.childContentfulRichText.html} />
        </Box>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allContentfulAbout(filter: { node_locale: { eq: "pt" }}) {
      edges {
        node {
          title
          missionTitle
          visionTitle
          servicesTitle
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
          servicesText {
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
