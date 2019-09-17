import React from 'react'
import { graphql } from 'gatsby'

import Box from '../components/box'
import Container from '../components/container'
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

const Info = ({ name, address, city, typologies }) => (
  <Box width={[1, 1/2]}>
    <Heading mt={0} mb={3}>{name}</Heading>
    <Heading my={3} level={4}>{address} | {city}</Heading>
    <Heading mt={0} level={4}>{typologies.join(' | ')}</Heading>
  </Box>
)

export default class ConstructionContentfulTemplate extends React.Component {
  render() {
    const construction = this.props.data.contentfulConstruction
    const galleryItems = [
      { original: construction.mainImage.fluid.src },
      ...construction.images.map(img => ({ original: img.fluid.src })),
    ];
    return (
      <Layout location={this.props.location} title={construction.name} headerAlwaysVisible={true}>
        <Container px={3}>
          <Box display="flex" flexWrap="wrap" pt={7}>
            <Gallery items={galleryItems} />
            <Info {...construction} />
          </Box>

          <Box my={3}>
            <section dangerouslySetInnerHTML={{ __html: construction.description.childContentfulRichText.html }} />
          </Box>
        </Container>
      </Layout>
    )
  }
}

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
