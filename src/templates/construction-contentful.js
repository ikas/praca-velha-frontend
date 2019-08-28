import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from '../components/container'
import Heading from '../components/heading'
import Layout from '../components/layout'

const ConstructionWrapper = styled.div`
  padding-top: 81px;
  padding-bottom: 2rem;
`

export default class ConstructionContentfulTemplate extends React.Component {
  render() {
    const construction = this.props.data.contentfulConstruction
    return (
      <Layout location={this.props.location} title={construction.name}>
        <Container>
          <ConstructionWrapper>
            <Img fluid={construction.mainImage.fluid} />
            <Heading>{construction.name}</Heading>
            <section dangerouslySetInnerHTML={{ __html: construction.description.childContentfulRichText.html }} />
          </ConstructionWrapper>
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
      description {
        childContentfulRichText {
          html
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
