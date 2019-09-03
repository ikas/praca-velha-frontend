import React from "react"
import { graphql } from "gatsby"

import ConstructionsGrid from '../components/constructions-grid'
import HomeImage from '../components/home-image'
import HomeSeparator from '../components/home-separator'
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
        <HomeSeparator />

        <ConstructionsGrid title='Home Development Heading' constructions={development} />
        <HomeSeparator />

        <ConstructionsGrid title='Home Available Heading' constructions={available}  />
        <HomeSeparator />

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
          saleStatus
          mainImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
