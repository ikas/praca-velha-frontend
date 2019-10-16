import React from "react"
import { graphql } from "gatsby"

import HomeBuildingsBanner from '../components/home/buildings-banner'
import HomeConstructionGrids from '../components/home/construction-grids'
import HomeImage from '../components/home/image'
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
      <Layout location={this.props.location} title={siteTitle} logoAlwaysVisible={false}>
        <HomeImage />
        <HomeBuildingsBanner />
        <HomeConstructionGrids available={available} development={development} portfolio={portfolio} />
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
