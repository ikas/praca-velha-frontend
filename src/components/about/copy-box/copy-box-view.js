import styled from 'styled-components'
import { typography } from 'styled-system'

import Box from '../../box'

export default styled(Box)`
  & {
    line-height: 2.2rem;
    font-size: 1.4rem;
  }

  @media (max-width: 544px) {
    & {
      line-height: 1.7rem;
      font-size: 1.2rem;
    }
  }

  & > p {
    ${typography}
  }
`
