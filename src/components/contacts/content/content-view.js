import React from "react"
import { useTranslation } from "react-i18next"

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'
import ContactsImage from '../../about/image'
import Layout from '../../layout'

import Form from '../form'

import ContactInfoSVG from '../../../../static/assets/contact-info.svg'

export default ({ location }) => {
  const { t } = useTranslation()
  return (
    <Layout location={location} title={t('Contacts')}>
      <ContactsImage>
        <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
          <Heading color="white">{t('Contacts')}</Heading>
        </Box>
      </ContactsImage>

      <Box bg="primary" px={3}>
        <Container alignItems="center" py={7}>
          <Box width={[340, 488]} height={[330, 474]} pt={[0, 3]}>
            <ContactInfoSVG width="100%" height="100%" />
          </Box>
        </Container>
      </Box>

      <Form />
    </Layout>
  )
}
