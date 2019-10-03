import React from "react";
import styled from 'styled-components';
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

const BlackBackground = styled(Box)`
  background: ${props => props.theme.colors.primarySoftShade};
`;

export default class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle} headerAlwaysVisible={true}>
        <Box bg="#fff">
          <AboutImage>
            <BlackBackground py={4} alignSelf="stretch" display="flex" justifyContent="center">
              <Heading color="white">Sobre nós</Heading>
            </BlackBackground>
          </AboutImage>

          <AboutLogoText />
          <AboutTextInBlack />
          <AboutMission />
          <Separator />
          <AboutVision />
          <Separator />
          <AboutFinalText />
        </Box>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
