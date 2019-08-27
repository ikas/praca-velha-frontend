import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import HeaderView from './header-view'

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      isTopOfPage: true,
    }
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => this.setState({ isTopOfPage: window.scrollY <= 100 }))
    }
  }

  componentWillUnmount() {
    if (typeof window !== undefined) {
      window.removeEventListener('scroll', () => this.setState({ isTopOfPage: window.scrollY <= 100 }))
    }
  }

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
        return <HeaderView
          {...this.props}
          menuLinks={data.allContentfulPost.edges}
          menuOpen={this.state.open}
          isTopOfPage={this.state.isTopOfPage}
          toggleMenuOpen={() => this.setState({ open: !this.state.open })}
        />
      }}
    />
  }
}
