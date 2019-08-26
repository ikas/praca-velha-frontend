import React from 'react'
import styled from 'styled-components'
import { Drawer } from '@material-ui/core'

import Anchor from '../anchor'

const HeaderAnchors = styled(Anchor)`
  text-decoration: none;
  box-shadow: none;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    background: ${props => props.theme.colors.primary};
    width: calc(100% - 10px);
    height: 3px;
    left: 0;
    transform: translateX(5px) scale3d(0,1,1);
    transition: transform 0.25s ease;
  }

  &.active::after, &:hover::after {
    transform: translateX(5px) scale3d(1,1,1);
  }
`

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => (
  <Drawer open={menuOpen} onClose={() => toggleMenuOpen()}>
    <div role="presentation" onClick={() => toggleMenuOpen()} onKeyDown={() => toggleMenuOpen()}>
      <div>
        {menuLinks.map(({ node }) => (
          <HeaderAnchors
            key={node.id}
            to={`/${node.slug}`}
            activeClassName="active"
            partiallyActive={true}
          >{node.title}</HeaderAnchors>
        ))}
      </div>
    </div>
  </Drawer>
)