import React from 'react'
import styled from 'styled-components'

import Box from '../../box'

const StyledBox = styled(Box)`
  & > p {
    color: ${props => props.theme.colors.white};
    font-size: 1.7rem;
    line-height: 2.2rem;
    text-align: ${props => props.textAlign};
  }
`

export default ({ richText, textAlign = 'left' }) => (
  <StyledBox dangerouslySetInnerHTML={{ __html: richText.childContentfulRichText.html }} textAlign={textAlign} />
)
