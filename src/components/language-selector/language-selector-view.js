import React from 'react'
import styled from 'styled-components'

import intl from '../../utils/i18n'
import Box from '../box'
import Copy from '../copy-text'

const EnterButton = styled(Copy)`
  background: ${props => props.theme.colors.secondary};
  border: none;
  margin: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`

const ChangeLanguageButton = ({ onClick, label }) => (
  <EnterButton px={6} py={2} onClick={() => onClick()}>
    {label}
  </EnterButton>
)

export default ({ setLocale }) => {
  return (
    <Box display="flex" flexDirection={['column', 'row']}>
      <ChangeLanguageButton onClick={() => { intl.changeLanguage('pt'); setLocale('pt'); }} label="Português" />
      <ChangeLanguageButton onClick={() => { intl.changeLanguage('en'); setLocale('en'); }} label="English" />
    </Box>
  )
}