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
  justify-content: flex-end;
`

export default ({ children, image, ...props  }) => (
  <Image fluid={image} {...props}>
    {children}
  </Image>
)
