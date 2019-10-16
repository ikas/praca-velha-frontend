import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import BackgroundImage from 'gatsby-background-image'

import Box from '../../box'
import Heading from '../../heading'
import LogoAnimated from '../../logo-animated'

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

  const { t } = useTranslation()

  return (
    <Image fluid={data.file.childImageSharp.fluid} {...props}>
      <LogoAnimated />

      <Box bg="primarySoftShade" alignSelf="stretch">
        <Heading level={2} textAlign="center" color="secondary" my={4}>
          {t('Home Main Header')}
        </Heading>
        <Heading level={3} textAlign="center" color="secondary" my={4}>
          {t('Home Secondary Header')}
        </Heading>
      </Box>
    </Image>
  )
}
