import React from "react"
import styled from 'styled-components'

import Heading from '../components/heading'
import LanguageSelector from '../components/language-selector'
import PageWrapper from '../components/page-wrapper'

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url('landing-bg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
      <PageWrapper title="Choose your language">
        <Background>
          <LandingHeader color="white" mx={2}>Welcome to Praça Velha</LandingHeader>
          <LanguageSelector />
        </Background>
      </PageWrapper>
    )
  }
}
