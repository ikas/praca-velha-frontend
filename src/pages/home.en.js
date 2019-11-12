import React from "react"
import { graphql } from "gatsby"

import HomeContent from '../components/home/home-content'
import Layout from '../components/layout'

export default class HomePage extends React.Component {
  render() {
    const { data, location } = this.props
    return (
      <Layout location={location} title={'Home'} logoAlwaysVisible={false}>
        <HomeContent constructions={data.allContentfulConstruction.edges} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
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
            fixed(height: 90) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
