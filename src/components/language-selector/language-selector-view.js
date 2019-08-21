import React from 'react'
import styled from 'styled-components'

const EnterButton = styled.button`
  background: transparent;
  color: white;
  text-decoration: none;
  box-shadow: none;
  border: 1px solid white;
  padding: 0.25rem 2rem;
  margin-right: 0.25rem;
  cursor: pointer;
`

export default ({ setLocale }) => (
  <div>
    <EnterButton onClick={() => setLocale('en')}>EN</EnterButton>
    <EnterButton onClick={() => setLocale('pt')}>PT</EnterButton>
  </div>
)