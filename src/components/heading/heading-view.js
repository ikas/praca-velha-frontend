import React from 'react'
import styled from 'styled-components'
import { space, layout, color, fontSize } from 'styled-system'

const Heading1 = styled.h1`
  font-size: 3.815rem;
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  font-family: 'Roboto', sans-serif;
  line-height: 3.815rem;
  font-weight: bold;
  text-transform: uppercase;

  @media(max-width: 544px) {
    line-height: 2.675rem;
    font-size: 2.675rem;
  }
`

const Heading2 = styled.h2`
  font-size: 3.052rem;
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  font-family: 'Roboto', sans-serif;
  line-height: 3.052rem;
  font-weight: bold;
  text-transform: uppercase;

  @media(max-width: 544px) {
    line-height: 2.375rem;
    font-size: 2.375rem;
  }
`

const Heading3 = styled.h3`
  font-size: 2.441rem;
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  font-family: 'Roboto', sans-serif;
  line-height: 2.441rem;
  font-weight: normal;
`

const Heading4 = styled.h4`
  font-size: 1.625rem;
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  font-family: 'Roboto', sans-serif;
  line-height: 1.625rem;
  font-weight: lighter;
  text-transform: uppercase;

  @media(max-width: 544px) {
    line-height: 1.25rem;
    font-size: 1.25rem;
  }
`

const Heading5 = styled.h5`
  font-size: 1.5rem;
  ${space}
  ${layout}
  ${color}
  ${fontSize}
  font-family: 'Roboto', sans-serif;
  line-height: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
`

export default ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <Heading1 {...props} />
    case 2:
      return <Heading2 {...props} />
    case 3:
      return <Heading3 {...props} />
    case 4:
      return <Heading4 {...props} />
    default:
      return <Heading5 {...props} />
  }
}