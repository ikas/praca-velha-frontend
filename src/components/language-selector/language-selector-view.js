import React from 'react'
import styled from 'styled-components'

import intl from '../../utils/i18n'
import Copy from '../copy-text'

const Wrapper = styled.div`
  display: flex;
`

const EnterButton = styled(Copy)`
  background: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.primary};
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

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
    <Wrapper>
      <ChangeLanguageButton onClick={() => { intl.changeLanguage('pt'); setLocale('pt'); }} label="Português" />
      <ChangeLanguageButton onClick={() => { intl.changeLanguage('en'); setLocale('en'); }} label="English" />
    </Wrapper>
  )
}