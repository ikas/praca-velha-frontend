import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import LogoAnimated from '../logo-animated'

const Image = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: top;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`

export default ({ children, ...props  }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "landing-bg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image fluid={data.file.childImageSharp.fluid} backgroundColor={`#040e18`} {...props}>
      <LogoAnimated />
      {children}
    </Image>
  )
}
