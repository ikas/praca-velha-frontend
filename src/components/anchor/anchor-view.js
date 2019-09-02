import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { space, layout, color } from 'styled-system'

const RouterLink = styled(Link)`
  ${space}
  ${layout}
  ${color}
  font-family: 'Roboto', sans-serif;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: underline;
  transition: all 0.3s ease;

  &:hover, &:active, &:focus, &:visited {
    opacity: 0.75;
  }
`

export default props => {
  return <RouterLink {...props} />
}