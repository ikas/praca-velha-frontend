import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Anchor from '../../anchor'
import Box from '../../box'
import Container from '../../container'
import LogoMedium from '../../logos/medium'
import Heading from '../../heading'

const Button = styled(Anchor)`
  background: transparent;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.space[5]}px ${props => props.theme.space[7]}px;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: ${props => props.theme.space[6]}px;
`

export default () => {
  const { t } = useTranslation()
  return (
    <Box bg="primary" px={3} pb={7}>
      <Container>
        <Heading level={2} textAlign="center" color="secondary" py={7} my={0}>{t('Home Know More')}</Heading>
        <Box display="flex">
          <Box flex={1} display="flex" justifyContent="center"><LogoMedium /></Box>
          <Box flex={1} flexDirection="column" display="flex" justifyContent="center">
            <Button to={t('About URL')}>{t('About')}</Button>
            <Button to={t('Contacts URL')}>{t('Contacts')}</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
