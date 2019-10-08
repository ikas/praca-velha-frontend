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
  height: 64px;
  background: ${props => props.theme.colors.primarySoftShade};
`

const Header = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  height: 64px;
`

const getIconColor = () => theme.colors.secondary

export default ({
  isScrolling,
  menuLinks,
  menuOpen,
  toggleMenuOpen,
  logoAlwaysVisible = true,
}) => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const links = menuLinks.filter(({ node }) => node.node_locale.startsWith(lang))
  return (
    <>
      <Background id="header-wrapper" className={isScrolling ? 'scrolling' : 'not-scrolling'}>
        <Header>
          <Box p={3} display="flex">
            <HamburgerSpin
              isActive={menuOpen}
              toggleButton={toggleMenuOpen}
              buttonWidth={32}
              buttonStyle={{ outline: 'none', padding: 0, display: 'inline-flex' }}
              barColor={getIconColor(isScrolling)}
            />
          </Box>

          <Box py={3} display="flex">
            <Link to={t('Home URL')}>
              <img
                src="/logo_horizontal.svg"
                width="100"
                alt="Praça Velha logo"
                style={{ display: isScrolling || logoAlwaysVisible ? 'inherit' : 'none' }}
              />
            </Link>
          </Box>

          <Box p={3} style={{ width: '32px' }} />
        </Header>
      </Background>

      <DrawerMenu menuLinks={links} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  )
}