import React from 'react'
import { graphql } from 'gatsby'

import Box from '../components/box'
import Container from '../components/container'
import Heading from '../components/heading'
import ImageGallery from '../components/image-gallery'
import Layout from '../components/layout'

export default class ConstructionContentfulTemplate extends React.Component {
  render() {
    const construction = this.props.data.contentfulConstruction
    const galleryItems = [
      { original: construction.mainImage.fluid.src },
      ...construction.images.map(img => ({ original: img.fluid.src })),
    ];
    return (
      <Layout location={this.props.location} title={construction.name} headerAlwaysVisible={true}>
        <Container>
          <Box display="flex" flexWrap="wrap" p={3} pt={7}>
            <Box width={1/3}>
              <Box mr={3}>
                <ImageGallery disableThumbnailScroll={true} items={galleryItems} showPlayButton={false} />
              </Box>
            </Box>
            <Box width={2/3}>
              <Heading mt={0} mb={3}>{construction.name}</Heading>
              <Heading my={3} level={4}>{construction.address} | {construction.city}</Heading>
              <Heading mt={0} level={4}>{construction.typologies.join(' | ')}</Heading>
              <section dangerouslySetInnerHTML={{ __html: construction.description.childContentfulRichText.html }} />
            </Box>
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
