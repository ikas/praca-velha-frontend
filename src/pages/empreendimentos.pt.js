import React from "react"
import { graphql } from "gatsby"

import ConstructionsContent from '../components/construction/constructions-content';
import Layout from '../components/layout'

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Empreendimentos">
        <ConstructionsContent constructions={this.props.data.allContentfulConstruction.edges} />
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
            fixed(height: 90) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
