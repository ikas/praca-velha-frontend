import React from 'react'
import { Link } from 'gatsby'
import { HamburgerSpin } from 'react-animated-burgers'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import Copy from '../copy-text'
import DrawerMenu from '../drawer-menu'
import theme from '../../utils/theme'

const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  transition: all 0.3s ${props => props.theme.easingFunction};
  z-index: ${props => props.theme.zIndexes.header};
  ${color}
`

const Header = styled.header`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`

const getBgColor = ({ isScrolling }) => isScrolling ? theme.colors.primarySoftShade : theme.colors.primary
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
        className={isScrolling ? "fixed-nav" : ""}
        bg={getBgColor({ isScrolling })}
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
            <Copy color={getTextColor()} m={0}>Praça Velha</Copy>
          </Link>
          <div style={{ width: '32px' } } />
        </Header>
      </BackgroundWrapper>

      <DrawerMenu menuLinks={links} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  )
}