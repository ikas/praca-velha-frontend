import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { space, layout, color } from 'styled-system'

const RouterLink = styled(Link)`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: underline;

  &:hover, &:active, &:focus, &:visited {
    opacity: 0.6;
  }
`

const Anchor = styled.a`
  ${space}
  ${layout}
  ${color}
  font-family: 'Work Sans', sans-serif;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: underline;

  &:hover, &:active, &:focus, &:visited {
    opacity: 0.6;
  }
`

export default ({ type = 'Link', ...props }) => {
  return type === 'Link' ? <RouterLink {...props} /> : <Anchor {...props} />
}