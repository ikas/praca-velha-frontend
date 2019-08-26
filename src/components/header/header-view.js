import React from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import DrawerMenu from '../drawer-menu'
import Container from '../container'

const Header = styled.header`
  ${space}
  ${layout}
  ${color}
  display: flex;
  justify-content: space-between;
  z-index: ${props => props.theme.zIndexes.header};
`

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => (
  <Container>
    <Header px={[3, 4]} pt={5}>
      <button onClick={() => toggleMenuOpen()}>Drawer</button>
      <p>Logo</p>
    </Header>

    <DrawerMenu menuLinks={menuLinks} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
  </Container>
)