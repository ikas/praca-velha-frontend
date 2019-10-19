import React from "react"
import { useTranslation } from "react-i18next"

import Box from '../../box'
import Container from '../../container'
import Copy from '../../copy-text'
import Heading from '../../heading'
import ContactsImage from '../../about/image'
import LogoMedium from '../../logos/medium'
import Layout from '../../layout'

import theme from '../../../utils/theme'

import FbIcon from '../../icons/fb-icon'
import InstagramIcon from '../../icons/instagram-icon'
import EmailIcon from '../../icons/email-icon'
import PhoneIcon from '../../icons/phone-icon'
import MobileIcon from '../../icons/mobile-icon'

export default ({
  location,
  companyName,
  companyAddress,
  companyPostalCode,
  companyCity,
}) => {
  const { t } = useTranslation()
  return (
    <Layout location={location} title={t('Contacts')}>
      <ContactsImage>
        <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
          <Heading color="white">{t('Contacts')}</Heading>
        </Box>
      </ContactsImage>

      <Box bg="primary">
        <Container alignItems="center" pb={6}>
          <Heading level={3} mt={7} mb={2} color="secondary" fontWeight="bold">{companyName}</Heading>
          <Copy color="secondary" my={1}>{companyAddress}</Copy>
          <Copy color="secondary" my={1}>{`${companyPostalCode}, ${companyCity}`}</Copy>

          <Box
            alignSelf="stretch"
            display="grid"
            gridTemplateColumns="50% 50%"
            justifyItems="center"
            alignItems="center"
          >
            <LogoMedium />
            <Box>
              <FbIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
              <InstagramIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
              <EmailIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
              <PhoneIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
              <MobileIcon size="lg" color={theme.colors.secondary} style={{ marginRight: '8px' }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
