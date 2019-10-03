import styled from 'styled-components';

import Copy from '../../copy-text';

export default styled(Copy)`
  line-height: 3rem;
  font-size: 1.75rem;

  @media (max-width: 500px) {
    line-height: 2.5rem;
    font-size: 1.5rem;
  }
`
