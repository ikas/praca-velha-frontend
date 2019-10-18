import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import FooterView from './footer-view'

export default class FooterContainer extends React.Component {
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
      render={data => <FooterView {...data.allContentfulCompanyInfo.edges[0].node} />}
    />
  }
}
