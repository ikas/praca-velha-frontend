import React from "react"
import { useTranslation } from "react-i18next"

import ButtonPrimary from '../../button-primary'
import Container from '../../container'
import Copy from '../../copy-text'
import Heading from '../../heading'
import HomeImage from '../../home/image'
import Separator from '../../content-separator'
import Layout from '../../layout'

export default ({ location }) => {
  const { t } = useTranslation()
  return (
    <Layout location={location} title={t('Contacts')}>
      <HomeImage />
      <Separator />
      <Container alignItems="center" pb={6}>
        <Heading pt={5}>{t('Contacts Heading')}</Heading>
        <Copy>{t('Contacts Text')}</Copy>
        <a href="mailto:eelopes@pracavelha.pt">
          <ButtonPrimary type="submit" mt={5}>{t('Contacts Button')}</ButtonPrimary>
        </a>
      </Container>
    </Layout>
  )
}
