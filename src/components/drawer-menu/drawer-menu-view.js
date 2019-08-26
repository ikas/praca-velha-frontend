import React from 'react'
import styled from 'styled-components'
import { Drawer } from '@material-ui/core'

import MenuLink from '../menu-link'

const MenuWrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  width: 320px;
`

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => (
  <Drawer open={menuOpen} onClose={() => toggleMenuOpen()}>
    <MenuWrapper role="presentation" onClick={() => toggleMenuOpen()} onKeyDown={() => toggleMenuOpen()}>
      {menuLinks.map(({ node }) => (
        <MenuLink
          key={node.id}
          to={`/${node.slug}`}
          activeClassName="active"
          partiallyActive={true}
        >{node.title}</MenuLink>
      ))}
    </MenuWrapper>
  </Drawer>
)