import React from 'react'
import { withTranslation } from 'react-i18next';
import { graphql } from 'gatsby'

import Box from '../components/box'
import Container from '../components/container'
import ConstructionMap from '../components/construction-map'
import Heading from '../components/heading'
import ImageGallery from '../components/image-gallery'
import Layout from '../components/layout'
import Separator from '../components/content-separator'

const Gallery = ({ items }) => (
  <Box width={[1, 1/2]} mb={[4, 0]}>
    <Box mr={[0, 4]}>
      <ImageGallery items={items} showThumbnails={false} showPlayButton={false} />
    </Box>
  </Box>
)

const Info = ({ name, address, city, typologies }) => (
  <Box width={[1, 1/2]}>
    <Heading mt={0} mb={3}>{name}</Heading>
    <Heading my={3} level={5}>{address} | {city}</Heading>
    <Heading mt={0} level={5}>{typologies.join(' | ')}</Heading>
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
    return (
      <Layout location={this.props.location} title={construction.name} headerAlwaysVisible={true}>
        <Container>
          <Box display="flex" flexWrap="wrap" pt={7} px={3}>
            <Gallery items={galleryItems} />
            <Info {...construction} />
          </Box>

          <Separator my={4} />

          <Box px={3}>
            <Heading level={4} textAlign="center">{t('Location')}</Heading>
            <ConstructionMap lat={construction.location.lat} lng={construction.location.lon} />
          </Box>

          <Separator my={4} />

          <Box px={3}>
            <Heading level={4} textAlign="center">{t('Description')}</Heading>
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
    }
  }
`
