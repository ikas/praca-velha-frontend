import React from 'react'
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

export default ({ setLocale }) => (
  <div>
    <EnterButton onClick={() => setLocale('en')}>EN</EnterButton>
    <EnterButton onClick={() => setLocale('pt')}>PT</EnterButton>
  </div>
)