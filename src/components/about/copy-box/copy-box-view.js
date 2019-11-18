import styled from 'styled-components'
import { typography } from 'styled-system'

import Box from '../../box'

export default styled(Box)`
  & {
    line-height: 2.2rem;
    font-size: 1.4rem;
  }

  & > p {
    ${typography}
  }
`
