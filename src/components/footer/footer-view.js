import React from 'react'
import styled from 'styled-components'

import FbIcon from '../icons/fb-icon'
import InstagramIcon from '../icons/instagram-icon'
import MobileIcon from '../icons/mobile-icon'
import PhoneIcon from '../icons/phone-icon'
import EmailIcon from '../icons/email-icon'

import Box from '../box'
import Copy from '../copy-text'
import Container from '../container'
import Heading from '../heading'

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

const SuperCopy = styled(Copy)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export default ({
  companyName,
  companyAddress,
  companyPostalCode,
  companyCity,
  companyPhone,
  companyPhone2,
  companyEmail,
  companyFacebookUrl,
  companyInstagramUrl,
}) => {
  const year = (new Date()).getFullYear()
  return (
    <FooterWrapper>
      <Container>
        <BorderedBox display="flex" flexDirection={["column", "column", "row"]} mx={3} py={4} justifyContent="space-between">
          <Box display="flex" alignItems="center" justifyContent="flex-start" flex={1}>
            <Box mb={[3, 3, 0]} flex={1}>
              <Heading color="secondary" fontWeight="bold" level={5} my={1} fontSize="1rem">{companyName}</Heading>
              <Copy color="secondary" fontSize="1rem">{companyAddress}</Copy>
              <Copy color="secondary" fontSize="1rem">{companyPostalCode}, {companyCity}</Copy>
            </Box>
          </Box>

          <Box flex={1} display="grid" gridTemplateColumn="50% 50%" alignItems={["flex-start", "center"]} justifyContent="center" flexDirection={["column", "row"]}>
            <Box>
              <SuperCopy color="secondary" mt={3} textAlign="center" fontSize="1rem">
                <MobileIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                {companyPhone}
              </SuperCopy>
              <SuperCopy color="secondary" mt={3} textAlign="center" fontSize="1rem">
                <PhoneIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                {companyPhone2}
              </SuperCopy>
            </Box>

            <Box>
              <SuperCopy color="secondary" mt={3} textAlign="center" fontSize="1rem">
                <EmailIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
                <Anchor href={companyEmail}>{companyEmail}</Anchor>
              </SuperCopy>

              <Box mt={3}>
                <a href={companyFacebookUrl}>
                  <FbIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '16px' }} />
                </a>
                <a href={companyInstagramUrl}>
                  <InstagramIcon size="lg" color={theme.colors.secondary} />
                </a>
              </Box>
            </Box>
          </Box>
        </BorderedBox>
        <Copy color="secondary" py={3} px={3} textAlign="center" fontSize="0.75rem">© {companyName}, {year}</Copy>
      </Container>
    </FooterWrapper>
  )
}