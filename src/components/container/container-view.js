import styled from 'styled-components'
import { color } from 'styled-system'

import Box from '../box'

export default styled(Box)`
  max-width: ${props => props.maxWidth || 1440}px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 320px;
  width: 100%;
  ${color}
`