import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
  justify-content: flex-end;
`

export default ({ ...props  }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image
    fluid={data.file.childImageSharp.fluid}
    backgroundColor={`#040e18`}
    {...props}
  />
}
