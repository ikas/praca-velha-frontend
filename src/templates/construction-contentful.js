import React from 'react'
import { withTranslation } from 'react-i18next';
import { graphql } from 'gatsby'

import Box from '../components/box'
import Container from '../components/container'
import ConstructionLogoHighlight from '../components/construction/logo-highlight'
import ConstructionImage from '../components/construction/image'
import ConstructionInfo from '../components/construction/info'
import ConstructionMap from '../components/construction-map'
import Heading from '../components/heading'
import ImageGallery from '../components/image-gallery'
import Layout from '../components/layout'

const Gallery = ({ items }) => (
  <Box width={[1, 1/2]} mb={[4, 0]}>
    <Box mr={[0, 4]}>
      <ImageGallery items={items} showThumbnails={false} showPlayButton={false} />
    </Box>
  </Box>
)

class ConstructionContentfulTemplate extends React.Component {
  render() {
    const { t } = this.props;
    const construction = this.props.data.contentfulConstruction
    const constructionImages = construction.images || [];
    const galleryItems = [
      { original: construction.mainImage.fluid.src },
      ...constructionImages.map(img => ({ original: img.fluid.src })),
    ];
    const { location } = construction;
    const lat = location ? location.lat : 41.55032;
    const lon = location ? location.lon : -8.42005;
    return (
      <Layout location={this.props.location} title={construction.name} headerAlwaysVisible={true}>
        <Container>
          <ConstructionImage image={construction.mainImage.fluid}>
            <ConstructionLogoHighlight logo={construction.logoWhite.fixed} />
          </ConstructionImage>

          <ConstructionInfo {...construction} />

          <Box display="flex" flexWrap="wrap" pt={7} px={3}>
            <Gallery items={galleryItems} />
          </Box>

          <Box px={3}>
            <Heading level={4} textAlign="center" mt={6} mb={4}>{t('Construction Location Heading')}</Heading>
            <ConstructionMap lat={lat} lng={lon} />
          </Box>

          <Box px={3} pb={6}>
            <Heading level={4} textAlign="center" mt={6} mb={4}>{t('Construction Description Heading')}</Heading>
            <section dangerouslySetInnerHTML={{ __html: construction.description.childContentfulRichText.html }} />
          </Box>
        </Container>
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
      location {
        lat
        lon
      }
      description {
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
      logoWhite {
        fixed(height: 150) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
