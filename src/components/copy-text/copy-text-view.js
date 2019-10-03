import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography } from 'styled-system'

const Copy = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  ${space}
  ${layout}
  ${color}
  ${typography}
  font-family: 'Roboto', sans-serif;
  line-height: 1.5rem;
  font-weight: normal;
`

export default (props) => <Copy {...props} />