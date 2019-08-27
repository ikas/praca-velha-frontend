import React from 'react'
import styled from 'styled-components'
import { Drawer } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import MenuLink from '../menu-link'

const MenuWrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
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

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => {
  const { t } = useTranslation()
  return (
    <Drawer open={menuOpen} onClose={() => toggleMenuOpen()}>
      <MenuWrapper role="presentation" onClick={() => toggleMenuOpen()} onKeyDown={() => toggleMenuOpen()}>
        <MenuLink to={t('Home URL')} activeClassName="active" partiallyActive={true}>
          {t('Home')}
        </MenuLink>

        {menuLinks.map(({ node }) => (
          <MenuLink
            key={node.id}
            to={`/${node.slug}`}
            activeClassName="active"
            partiallyActive={true}
          >{node.title}</MenuLink>
        ))}

        <MenuLink to={t('Contacts URL')} activeClassName="active" partiallyActive={true}>
          {t('Contacts')}
        </MenuLink>
      </MenuWrapper>
    </Drawer>
  )
}