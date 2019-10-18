import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Box from '../box'
import Copy from '../copy-text'
import Container from '../container'
import Heading from '../heading'
import LogoSmall from '../logo-small'

import theme from '../../utils/theme'

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
`

const BorderedBox = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`

const Anchor = styled.a`
  color: ${props => props.theme.colors.secondary};
`

export default ({
  companyName,
  companyAddress,
  companyPostalCode,
  companyCity,
  companyPhone,
  companyPhone2,
  companyEmail,
  companyFacebookURL,
  companyInstagramURL,
}) => {
  const year = (new Date()).getFullYear()
  return (
    <FooterWrapper>
      <Container>
        <BorderedBox display="flex" mx={3} py={4} justifyContent="space-between">
          <Box display="flex" alignItems="center" justifyContent="flex-start" flex={2}>
            <LogoSmall />
            <Box ml={3} flex={1}>
              <Heading color="secondary" fontWeight="bold" level={5} my={1}>{companyName}</Heading>
              <Copy color="secondary">{companyAddress}</Copy>
              <Copy color="secondary">{companyPostalCode}, {companyCity}</Copy>
            </Box>
          </Box>

          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Box>
              <Copy color="secondary" m={3} textAlign="center">
                <FontAwesomeIcon icon={faMobile} size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                {companyPhone}
              </Copy>
              <Copy color="secondary" m={3} textAlign="center">
                <FontAwesomeIcon icon={faPhone} size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                {companyPhone2}
              </Copy>
            </Box>

            <Box>
              <Copy color="secondary" m={3} textAlign="center">
                <FontAwesomeIcon icon={faAt} size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                <Anchor href={companyEmail}>{companyEmail}</Anchor>
              </Copy>

              <Box m={3}>
                <a href={companyFacebookURL}>
                  <FontAwesomeIcon icon={faFacebook} size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                </a>
                <a href={companyInstagramURL}>
                  <FontAwesomeIcon icon={faInstagram} size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                </a>
              </Box>
            </Box>
          </Box>
        </BorderedBox>
        <Copy color="secondary" py={3} textAlign="center">© {companyName}, {year}</Copy>
      </Container>
    </FooterWrapper>
  )
}