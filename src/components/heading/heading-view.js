import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography } from 'styled-system'

const Heading1 = styled.h1`
  font-size: 3.5rem;
  font-family: 'Roboto', sans-serif;
  line-height: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  ${space}
  ${layout}
  ${color}
  ${typography}

  @media(max-width: 544px) {
    line-height: 2.675rem;
    font-size: 2.675rem;
  }
`

const Heading2 = styled.h2`
  font-size: 3.052rem;
  font-family: 'Roboto', sans-serif;
  line-height: 3.052rem;
  font-weight: bold;
  ${space}
  ${layout}
  ${color}
  ${typography}

  @media(max-width: 544px) {
    line-height: 2.375rem;
    font-size: 2.375rem;
  }
`

const Heading3 = styled.h3`
  font-size: 2.441rem;
  font-family: 'Roboto', sans-serif;
  line-height: 2.441rem;
  font-weight: normal;
  ${space}
  ${layout}
  ${color}
  ${typography}
`

const Heading4 = styled.h4`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  line-height: 2rem;
  font-weight: lighter;
  text-transform: uppercase;
  ${space}
  ${layout}
  ${color}
  ${typography}

  @media(max-width: 544px) {
    line-height: 1.75rem;
    font-size: 1.75rem;
  }
`

const Heading5 = styled.h5`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  ${space}
  ${layout}
  ${color}
  ${typography}
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