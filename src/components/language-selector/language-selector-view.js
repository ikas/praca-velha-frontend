import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const EnterButton = styled(Link)`
  color: white;
  text-decoration: none;
  box-shadow: none;
  border: 1px solid white;
  padding: 0.25rem 2rem;
  margin-right: 0.25rem;
`

export default () => (
  <div>
    <EnterButton to="/en/home">EN</EnterButton>
    <EnterButton to="/pt/home">PT</EnterButton>
  </div>
)