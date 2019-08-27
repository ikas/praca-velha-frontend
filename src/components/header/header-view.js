import React from 'react'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Container from '../container'
import Copy from '../copy-text'
import DrawerMenu from '../drawer-menu'
import theme from '../../utils/theme'

const StyledContainer = styled(Container)`
  position: absolute;
  width: 100%;
`

const Header = styled.header`
  ${space}
  ${layout}
  ${color}
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${props => props.theme.zIndexes.header};
  background: transparent;
`

export default ({ menuLinks, menuOpen, toggleMenuOpen }) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const links = menuLinks.filter(({ node }) => node.node_locale.startsWith(lang))
  return (
    <StyledContainer>
      <Header px={[3, 4]} py={[4, 5]}>
        <HamburgerSpin
          toggleButton={toggleMenuOpen}
          buttonWidth={32}
          buttonStyle={{ outline: 'none', padding: 0, display: 'inline-flex' }}
          barColor={theme.colors.white}
        />
        <Link to={t('Home URL')}>
          <Copy color="white" m={0}>Praça Velha</Copy>
        </Link>
        <div style={{ width: '32px' } } />
      </Header>

      <DrawerMenu menuLinks={links} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </StyledContainer>
  )
}