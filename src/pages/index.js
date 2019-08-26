import React from "react"
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import GlobalStyle from '../components/global-style'
import Heading from '../components/heading'
import LanguageSelector from '../components/language-selector'
import SEO from '../components/seo'
import theme from '../utils/theme'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url('landing-bg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LandingHeader = styled(Heading)`
  text-align: center;
`

export default class LandingPage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <GlobalStyle />
          <SEO title="Choose your language" />
          <LandingHeader color="white" mx={2}>Welcome to Praça Velha</LandingHeader>
          <LanguageSelector />
        </Background>
      </ThemeProvider>
    )
  }
}
