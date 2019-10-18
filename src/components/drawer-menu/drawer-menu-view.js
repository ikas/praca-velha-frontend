import React from 'react'
import styled from 'styled-components'
import { Drawer } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import MenuLink from '../menu-link'

const MenuWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
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

const Languages = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin: ${props => props.theme.space[3]}px;
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`

const MenuItem = ({ label, to, ...props }) => (
  <MenuLink to={to} activeClassName="active" partiallyActive={true} {...props}>
    {label}
  </MenuLink>
)

export default ({ menuOpen, toggleMenuOpen }) => {
  const { t } = useTranslation()
  return (
    <Drawer open={menuOpen} onClose={() => toggleMenuOpen()}>
      <MenuWrapper role="presentation" onClick={() => toggleMenuOpen()} onKeyDown={() => toggleMenuOpen()}>
        <MenuItem to={t('Home URL')} label={t('Home')} />
        <MenuItem to={t('Buildings URL')} label={t('Buildings')} />
        <MenuItem to={t('About URL')} label={t('About')} />
        <MenuItem to={t('Contacts URL')} label={t('Contacts')} />
      </MenuWrapper>

      <Languages>
        <MenuItem to='/pt/home' label='PT' />
        <MenuItem to='/en/home' label='EN' />
      </Languages>
    </Drawer>
  )
}