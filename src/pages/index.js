import React from "react"
import styled from 'styled-components'

import GlobalStyle from '../components/global-style'
import LanguageSelector from '../components/language-selector'
import SEO from '../components/seo'

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

const StyledHeader = styled.h1`
  margin: 0;
  color: gold;
  margin-bottom: 1rem;
`

export default class LandingPage extends React.Component {
  render() {
    return (
      <Background>
        <GlobalStyle />
        <SEO title="Choose your language" />
        <StyledHeader>Welcome to Praça Velha</StyledHeader>
        <LanguageSelector />
      </Background>
    )
  }
}
