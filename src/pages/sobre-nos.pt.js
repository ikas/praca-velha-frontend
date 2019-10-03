import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";

import AboutImage from '../components/about/image';
import AboutLogoText from '../components/about/logo-text';
import AboutMission from '../components/about/mission';
import AboutTextInBlack from '../components/about/text-in-black';
import Box from '../components/box';
import Heading from '../components/heading';
import Layout from '../components/layout';

const WhiteBg = styled(Box)`
  background: #fff;
`;

const BlackBackground = styled(Box)`
  background: ${props => props.theme.colors.primarySoftShade};
`;

export default class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle} headerAlwaysVisible={true}>
        <WhiteBg>
          <AboutImage>
            <BlackBackground py={4} alignSelf="stretch" display="flex" justifyContent="center">
              <Heading color="white">Sobre nós</Heading>
            </BlackBackground>
          </AboutImage>

          <AboutLogoText />
          <AboutTextInBlack />
          <AboutMission />
        </WhiteBg>
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
