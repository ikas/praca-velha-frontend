import React from 'react'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import DrawerMenu from '../drawer-menu'
import theme from '../../utils/theme'

const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  transition: all 0.3s ${props => props.theme.easingFunction};
  z-index: ${props => props.theme.zIndexes.header};
  ${color}
  overflow-y: hidden;

  &.visible {
    height: 100px;
  }

  &.not-visible {
    height: 0;
  }
`

const Header = styled.header`
  ${space}
  ${layout}
  display: flex;
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
}) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const links = menuLinks.filter(({ node }) => node.node_locale.startsWith(lang))
  return (
    <>
      <BackgroundWrapper
        id="header-wrapper"
        className={isScrolling ? 'visible' : 'not-visible'}
        bg={getBgColor()}
      >
        <Header px={3} py={4}>
          <HamburgerSpin
            isActive={menuOpen}
            toggleButton={toggleMenuOpen}
            buttonWidth={32}
            buttonStyle={{ outline: 'none', padding: 0, display: 'inline-flex' }}
            barColor={getTextColor()}
          />
          <Link to={t('Home URL')}>
            <img src="/logo_horizontal.png" width="120" alt="Praça Velha logo" />
          </Link>
          <div style={{ width: '32px' } } />
        </Header>
      </BackgroundWrapper>

      <DrawerMenu menuLinks={links} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  )
}