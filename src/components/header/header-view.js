import React from 'react'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Container from '../container'
import DrawerMenu from '../drawer-menu'
import MenuLink from '../menu-link'
import theme from '../../utils/theme'

const Header = styled.header`
  ${space}
  ${layout}
  ${color}
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${props => props.theme.zIndexes.header};
`

const LogoImage = styled.p`
  background: gold;
  margin-bottom: 0;
`

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Header px={[3, 4]} pt={5}>
        <HamburgerSpin
          toggleButton={toggleMenuOpen}
          buttonWidth={32}
          buttonStyle={{ outline: 'none', padding: 0, display: 'inline-flex' }}
          barColor={theme.colors.primary}
        />
        <Link to={t('Home URL')}>
          <LogoImage>Logo</LogoImage>
        </Link>
        <MenuLink to={t('Contacts URL')} activeClassName="active" partiallyActive={true}>
          {t('Contacts')}
        </MenuLink>
      </Header>

      <DrawerMenu menuLinks={menuLinks} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </Container>
  )
}