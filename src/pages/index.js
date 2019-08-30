import React from "react"
import styled from 'styled-components'

import Heading from '../components/heading'
import LanguageSelector from '../components/language-selector'
import PageWrapper from '../components/page-wrapper'

const VideoBg = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`

const VideoOverlay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background: ${props => props.theme.colors.blackSoftShade};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default class LandingPage extends React.Component {
  render() {
    return (
      <PageWrapper title="Choose your language">
        <VideoBg autoPlay muted loop>
          <source src="http://bragacenterapartments.com/wp-content/uploads/2019/01/braga.mp4" type="video/mp4" />
        </VideoBg>

        <VideoOverlay>
          <Heading color="secondary">Welcome to Praça Velha</Heading>
          <LanguageSelector />
        </VideoOverlay>
      </PageWrapper>
    )
  }
}
