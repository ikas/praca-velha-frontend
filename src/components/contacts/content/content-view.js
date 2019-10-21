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

import Form from '../form'

export default ({
  location,
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
  const { t } = useTranslation()
  return (
    <Layout location={location} title={t('Contacts')}>
      <ContactsImage>
        <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
          <Heading color="white">{t('Contacts')}</Heading>
        </Box>
      </ContactsImage>

      <Box bg="primary">
        <Container alignItems="center">
          <Heading level={3} mt={7} mb={2} color="secondary" fontWeight="bold">{companyName}</Heading>
          <Copy color="secondary" my={1}>{companyAddress}</Copy>
          <Copy color="secondary" my={1}>{`${companyPostalCode}, ${companyCity}`}</Copy>

          <Box
            alignSelf="stretch"
            display="grid"
            gridTemplateColumns="50% 50%"
            justifyItems="center"
            alignItems="center"
            my={7}
          >
            <LogoMedium />
            <Box display="flex" flexDirection="column">
              <Box display="flex" alignItems="center" justifyContent="center" my={3}>
                <MobileIcon size="2x" color={theme.colors.secondary} style={{ marginRight: '16px' }} />
                <Copy color="secondary" fontWeight="bold">{companyPhone}</Copy>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" my={3}>
                <PhoneIcon size="2x" color={theme.colors.secondary} style={{ marginRight: '16px' }} />
                <Copy color="secondary" fontWeight="bold">{companyPhone2}</Copy>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" my={3}>
                <EmailIcon size="2x" color={theme.colors.secondary} style={{ marginRight: '16px' }} />
                <Copy color="secondary" fontWeight="bold">{companyEmail}</Copy>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="center" my={5}>
                <a href={companyFacebookUrl}>
                  <FbIcon size="2x" color={theme.colors.secondary} style={{ margin: '0 16px' }} />
                </a>
                <a href={companyInstagramUrl}>
                  <InstagramIcon size="2x" color={theme.colors.secondary} style={{ margin: '0 16px' }} />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Form />
    </Layout>
  )
}
