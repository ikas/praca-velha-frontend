import React from "react"
import { useTranslation } from "react-i18next"

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'
import ContactsImage from '../../about/image'
import Layout from '../../layout'

import Form from '../form'

export default ({ location }) => {
  const { t } = useTranslation()
  return (
    <Layout location={location} title={t('Contacts')}>
      <ContactsImage>
        <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
          <Heading color="white">{t('Contacts')}</Heading>
        </Box>
      </ContactsImage>

      <Box bg="primary">
        <Container alignItems="center" py={7}>
          <img src="/contact-info.svg" width="75%" alt="Contact information" />
        </Container>
      </Box>

      <Form />
    </Layout>
  )
}
