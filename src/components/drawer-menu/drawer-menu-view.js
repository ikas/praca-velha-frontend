import React from 'react'
import styled from 'styled-components'
import { Drawer } from '@material-ui/core'

import MenuLink from '../menu-link'

const MenuWrapper = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  width: 300px;

  & > * {
    margin-bottom: 1.5rem;
  }
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