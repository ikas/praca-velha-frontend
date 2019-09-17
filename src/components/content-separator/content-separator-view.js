import styled from 'styled-components'

import Box from '../box'

export default styled(Box)`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.primary};
`
