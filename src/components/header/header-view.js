import React from 'react'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import Box from '../box'
import Container from '../container'
import DrawerMenu from '../drawer-menu'
import theme from '../../utils/theme'

const Background = styled(Box)`
  position: fixed;
  width: 100%;
  transition: all 0.3s ${props => props.theme.easingFunction};
  z-index: ${props => props.theme.zIndexes.header};
  overflow-y: hidden;

  &.visible {
    height: 95px;
  }

  &.not-visible {
    height: 0;
  }
`

const Header = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`

const getBgColor = () => theme.colors.primarySoftShade
const getTextColor = () => theme.colors.white

export default ({
  isScrolling,
  menuLinks,
  menuOpen,
  toggleMenuOpen,
  alwaysVisible = false,
}) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const links = menuLinks.filter(({ node }) => node.node_locale.startsWith(lang))
  return (
    <>
      <Background
        id="header-wrapper"
        className={isScrolling || alwaysVisible ? 'visible' : 'not-visible'}
        bg={getBgColor()}
      >
        <Header p={3}>
          <HamburgerSpin
            isActive={menuOpen}
            toggleButton={toggleMenuOpen}
            buttonWidth={32}
            buttonStyle={{ outline: 'none', padding: 0, display: 'inline-flex' }}
            barColor={getTextColor()}
          />
          <Link to={t('Home URL')}>
            <img src="/logo_horizontal.svg" width="150" alt="Praça Velha logo" />
          </Link>
          <div style={{ width: '32px' } } />
        </Header>
      </Background>

      <DrawerMenu menuLinks={links} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  )
}