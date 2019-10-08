import React from "react"
import { graphql } from "gatsby"

import AboutImage from '../components/about/image';
import Box from '../components/box';
import ConstructionsGrid from '../components/construction/grid'
import Heading from '../components/heading';
import Layout from '../components/layout'

export default class HomePage extends React.Component {
  render() {
    const { edges } = this.props.data.allContentfulConstruction
    const development = edges.filter(({ node }) => node.status === 'WIP')
    const available = edges.filter(({ node }) => node.status === 'Ready')
    const portfolio = edges.filter(({ node }) => node.status === 'Portfolio')
    return (
      <Layout location={this.props.location} title="Empreendimentos">
        <AboutImage>
          <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
            <Heading color="white">Empreendimentos</Heading>
          </Box>
        </AboutImage>

        <ConstructionsGrid title='Home Development Heading' constructions={development} />
        <ConstructionsGrid title='Home Available Heading' constructions={available}  />
        <ConstructionsGrid title='Home Portfolio Heading' constructions={portfolio} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allContentfulConstruction(filter: { node_locale: { eq: "pt" }}) {
      edges {
        node {
          id
          node_locale
          name
          slug
          address
          city
          typologies
          status
          mainImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          logoWhite {
            fixed(height: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
