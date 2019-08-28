import React from "react"
import { graphql } from "gatsby"

import HomeDevelopment from '../components/home-development'
import HomeImage from '../components/home-image'
import HomeSeparator from '../components/home-separator'
import Layout from '../components/layout'

export default class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const constructions = data.allContentfulConstruction.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <HomeImage />
        <HomeSeparator />
        <HomeDevelopment constructions={constructions} />
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
