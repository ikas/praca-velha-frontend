import styled from 'styled-components';

import Box from '../../box';

export default styled(Box)`
  & > p {
    line-height: 3rem;
    font-size: 1.75rem;

    @media (max-width: 500px) {
      line-height: 2.5rem;
      font-size: 1.5rem;
    }
  }
`
