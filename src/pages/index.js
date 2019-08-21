import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

import SEO from "../components/seo"

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
  color: white;
  margin-bottom: 1rem;
`

const EnterButton = styled(Link)`
  color: white;
  text-decoration: none;
  box-shadow: none;
  border: 1px solid white;
  padding: 0.25rem 2rem;
`

export default class LandingPage extends React.Component {
  render() {
    return (
      <Background>
        <SEO title="All posts" />
        <StyledHeader>Praça Velha</StyledHeader>
        <EnterButton to="/blog">Enter</EnterButton>
      </Background>
    )
  }
}
