import React from "react"
import { graphql } from "gatsby"

import AboutTextInBlack from '../components/about/text-in-black';
import Box from '../components/box';
import BuildingsPromoImage from '../components/construction/promo-image';
import ConstructionsGrid from '../components/construction/grid'
import Heading from '../components/heading';
import Layout from '../components/layout'

export default class HomePage extends React.Component {
  render() {
    const { edges } = this.props.data.allContentfulConstruction
    const development = edges.filter(({ node }) => node.status === 'WIP')
    const available = edges.filter(({ node }) => node.status === 'Ready')
    const portfolio = edges.filter(({ node }) => node.status === 'Portfolio')
    const { textInBlack } = this.props.data.allContentfulAbout.edges[0].node
    return (
      <Layout location={this.props.location} title="Empreendimentos">
        <BuildingsPromoImage>
          <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
            <Heading color="white">Empreendimentos</Heading>
          </Box>
        </BuildingsPromoImage>

        <ConstructionsGrid title='Home Development Heading' constructions={development} />
        <ConstructionsGrid title='Home Available Heading' constructions={available}  />
        <ConstructionsGrid title='Home Portfolio Heading' constructions={portfolio} />
        <AboutTextInBlack html={textInBlack.childContentfulRichText.html} />
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
    allContentfulAbout(filter: { node_locale: { eq: "pt" }}) {
      edges {
        node {
          textInBlack {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
