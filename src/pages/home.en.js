import React from "react"
import { graphql } from "gatsby"

import ConstructionsGrid from '../components/construction/grid'
import HomeImage from '../components/home-image'
import Layout from '../components/layout'

export default class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const constructions = data.allContentfulConstruction.edges

    const development = constructions.filter(({node}) => node.status === 'WIP').slice(0, 3)
    const available = constructions.filter(({node}) => node.status === 'Ready').slice(0, 3)
    const portfolio = constructions.filter(({node}) => node.status === 'Portfolio').slice(0, 3)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <HomeImage />
        <ConstructionsGrid title='Home Development Heading' constructions={development} />
        <ConstructionsGrid title='Home Available Heading' constructions={available}  />
        <ConstructionsGrid title='Home Portfolio Heading' constructions={portfolio} />
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
    allContentfulConstruction(filter: { node_locale: { eq: "en-US" }}) {
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
