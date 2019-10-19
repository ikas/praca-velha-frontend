import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ContentView from './content-view'

export default class ContentContainer extends React.Component {
  render() {
    return <StaticQuery
      query={graphql`
        query {
          allContentfulCompanyInfo {
            edges {
              node {
                companyName
                companyAddress
                companyCity
                companyEmail
                companyFacebookUrl
                companyInstagramUrl
                companyPhone
                companyPhone2
                companyPostalCode
              }
            }
          }
        }
      `}
      render={data => <ContentView
        {...this.props}
        {...data.allContentfulCompanyInfo.edges[0].node}
      />}
    />
  }
}
