import React from 'react'
import { withTranslation } from 'react-i18next';
import { graphql } from 'gatsby'
import { isMobile } from 'react-device-detect'

import Box from '../components/box'
import ConstructionLogoHighlight from '../components/construction/logo-highlight'
import ConstructionImage from '../components/construction/image'
import ConstructionInfo from '../components/construction/info'
import ConstructionGallery from '../components/construction/gallery'
import ConstructionMap from '../components/construction/map'
import Form from '../components/contacts/form'
import Heading from '../components/heading'
import Layout from '../components/layout'

class ConstructionContentfulTemplate extends React.Component {
  render() {
    const { t } = this.props;
    const construction = this.props.data.contentfulConstruction
    const { location } = construction;
    const lat = location ? location.lat : 41.55032;
    const lon = location ? location.lon : -8.42005;
    return (
      <Layout location={this.props.location} title={construction.name}>
        <ConstructionImage image={construction.mainImage.fluid}>
          <ConstructionLogoHighlight logo={construction.logoWhite.fixed} />
        </ConstructionImage>

        <ConstructionInfo {...construction} />
        <ConstructionGallery {...construction} />

        <Box py={[5, 6]} px={3} bg="primary">
          <Heading level={isMobile ? 2 : 1} textAlign="center" color="secondary" my={[5, 6]}>
            {t('Construction Location Heading')}
          </Heading>
          <ConstructionMap lat={lat} lng={lon} />
        </Box>

        <Form constructionName={construction.name}/>
      </Layout>
    )
  }
}

export default withTranslation()(ConstructionContentfulTemplate)

export const pageQuery = graphql`
  query ContentfulConstructionBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulConstruction( slug: { eq: $slug }) {
      name
      slug
      address
      city
      country
      typologies
      constructionPrice
      location {
        lat
        lon
      }
      firstDescription {
        childContentfulRichText {
          html
        }
      }
      secondDescription {
        childContentfulRichText {
          html
        }
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      mainImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      secondaryImage {
        fixed(height: 500) {
          ...GatsbyContentfulFixed
        }
      }
      logoWhite {
        fixed(height: 150) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
