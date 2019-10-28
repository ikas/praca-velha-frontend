import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Box from '../../box'
import HomeInfoSVG from '../../../../static/assets/home-info.svg'

const Image = styled(BackgroundImage)`
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: top;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
  padding-bottom: 10rem;

  @media(max-width: 768px) {
    padding-top: 4rem;
  }
`

export default props => {
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
    <Image fluid={data.file.childImageSharp.fluid} {...props}>
      <Box width={[250, 400, 500]} height={[150, 250, 300]} pt={[0, 3]}>
        <HomeInfoSVG width="100%" height="100%" />
      </Box>
    </Image>
  )
}
