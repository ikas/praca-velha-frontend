import React from 'react'
import styled from 'styled-components'
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
  padding-top: 4rem;
`

export default ({ children, image, ...props  }) => (
  <Image fluid={image} backgroundColor={`#040e18`} {...props}>
    {children}
  </Image>
)
