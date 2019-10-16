import React from "react"
import { withTranslation } from "react-i18next"

import ButtonPrimary from '../components/button-primary'
import Container from '../components/container'
import Copy from '../components/copy-text'
import Heading from '../components/heading'
import HomeImage from '../components/home/image'
import Separator from '../components/content-separator'
import Layout from '../components/layout'

class ContactsPage extends React.Component {
  render() {
    const { t } = this.props
    return (
      <Layout location={this.props.location} title="Contactos">
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
}

export default withTranslation()(ContactsPage)
