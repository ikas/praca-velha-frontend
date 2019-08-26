import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

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

const changeLanguage = ({ setLocale, i18n, lng }) => {
  i18n.changeLanguage(lng);
  setLocale(lng);
}

const ChangeLanguageButton = ({ setLocale, i18n, lng, label }) => (
  <EnterButton
    px={6}
    py={2}
    onClick={() => changeLanguage({ setLocale, i18n, lng })}
  >
    {label}
  </EnterButton>
)

export default ({ setLocale }) => {
  const { i18n } = useTranslation()
  return (
    <Wrapper>
      <ChangeLanguageButton setLocale={setLocale} i18n={i18n} lng="pt" label="Português" />
      <ChangeLanguageButton setLocale={setLocale} i18n={i18n} lng="en" label="English" />
    </Wrapper>
  )
}