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

const BackgroundWrapper = styled.div`
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  background: ${props => props.menuStyle === 'opaque'
    ? props.fixed ? props.theme.colors.primary : props.theme.colors.secondary
    : props.fixed ? props.theme.colors.whiteSoftShade : 'transparent'
  };
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

export default ({
  isTopOfPage,
  menuLinks,
  menuOpen,
  menuStyle = "transparent",
  toggleMenuOpen,
}) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const links = menuLinks.filter(({ node }) => node.node_locale.startsWith(lang))
  return (
    <BackgroundWrapper fixed={!isTopOfPage} menuStyle={menuStyle}>
      <Container>
        <Header px={[3, 4]} py={isTopOfPage ? [4, 5] : 3}>
          <HamburgerSpin
            toggleButton={toggleMenuOpen}
            buttonWidth={32}
            buttonStyle={{ outline: 'none', padding: 0, display: 'inline-flex' }}
            barColor={isTopOfPage ? theme.colors.white : theme.colors.secondary}
            />
          <Link to={t('Home URL')}>
            <Copy color={isTopOfPage ? 'white' : 'secondary'} m={0}>Praça Velha</Copy>
          </Link>
          <div style={{ width: '32px' } } />
        </Header>

        <DrawerMenu menuLinks={links} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
      </Container>
    </BackgroundWrapper>
  )
}