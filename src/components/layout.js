import React from "react"
import { ThemeProvider } from 'styled-components'

import Header from '../components/header'
import theme from '../utils/theme'
import '../utils/i18n'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <Header currentUrl="home" />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
