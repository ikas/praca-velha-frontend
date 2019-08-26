import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Container from '../container'
import DrawerMenu from '../drawer-menu'
import MenuLink from '../menu-link'

const Header = styled.header`
  ${space}
  ${layout}
  ${color}
  display: flex;
  justify-content: space-between;
  z-index: ${props => props.theme.zIndexes.header};
`

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Header px={[3, 4]} pt={5}>
        <button onClick={() => toggleMenuOpen()}>Drawer</button>
        <p>Logo</p>
        <MenuLink to={t('Contacts URL')} activeClassName="active" partiallyActive={true}>
          {t('Contacts')}
        </MenuLink>
      </Header>

      <DrawerMenu menuLinks={menuLinks} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </Container>
  )
}