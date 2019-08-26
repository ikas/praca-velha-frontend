import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const EnterButton = styled.button`
  background: gold;
  color: black;
  text-decoration: none;
  box-shadow: none;
  border: 2px solid gold;
  padding: 0.1rem 2.5rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }
`

export default ({ setLocale }) => {
  const { i18n } = useTranslation()
  return (
    <div>
      <EnterButton onClick={() => { i18n.changeLanguage('en'); setLocale('en')}}>EN</EnterButton>
      <EnterButton onClick={() => { i18n.changeLanguage('pt'); setLocale('pt')}}>PT</EnterButton>
    </div>
  )
}