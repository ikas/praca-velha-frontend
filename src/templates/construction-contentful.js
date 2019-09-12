import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { layout, space, color } from 'styled-system'

import Container from '../components/container'
import Heading from '../components/heading'
import Layout from '../components/layout'
import ConstructionCard from '../components/construction-card'

const Background = styled.div`
  ${color}
`

const ConstructionWrapper = styled.div`
  ${layout}
  ${space}
  display: flex;
  flex-wrap: wrap;
`

const Box = styled.div`
  ${layout}
  ${space}
  ${color}
`

export default class ConstructionContentfulTemplate extends React.Component {
  render() {
    const construction = this.props.data.contentfulConstruction
    return (
      <Layout location={this.props.location} title={construction.name} headerAlwaysVisible={true}>
        <Background bg="lightGrey">
          <Container>
            <ConstructionWrapper p={3} pt={7}>
              <Box width={1/2} bg="white"><ConstructionCard {...construction} /></Box>
              <Heading>{construction.name}</Heading>
              <section dangerouslySetInnerHTML={{ __html: construction.description.childContentfulRichText.html }} />
            </ConstructionWrapper>
          </Container>
        </Background>
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
