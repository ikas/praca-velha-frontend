import React from "react"
import { ThemeProvider } from 'styled-components'

import theme from '../../utils/theme'

import GlobalStyle from '../global-style'
import SEO from '../seo'

export default class PageWrapper extends React.Component {
  render() {
    const { children, title } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <SEO title={title} />
          {children}
        </>
      </ThemeProvider>
    )
  }
}
