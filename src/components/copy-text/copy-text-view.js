import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography, flex } from 'styled-system'

const Copy = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6rem;
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flex}
`

export default (props) => <Copy {...props} />