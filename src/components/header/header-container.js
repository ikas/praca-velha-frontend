import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { getLocale } from '../../utils/locale'

import HeaderView from './header-view'

export default class HeaderContainer extends React.Component {
  render() {
    return <StaticQuery
      query={graphql`
        query {
          allContentfulPost(filter: { isOnMenu: { eq: true }}) {
            edges {
              node {
                id
                title
                slug
                node_locale
              }
            }
          }
        }
      `}
      render={data => {
        const currentLocale = getLocale()
        const menuLinks = data.allContentfulPost.edges.filter(({ node }) => node.node_locale.startsWith(currentLocale))
        return <HeaderView {...this.props} menuLinks={menuLinks} />
      }}
    />
  }
}
