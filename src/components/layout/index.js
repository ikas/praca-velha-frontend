import React from 'react'

import Footer from '../footer'
import Header from '../header'
import PageWrapper from '../page-wrapper'

import i18n from '../../utils/i18n'

export default class Layout extends React.Component {
  render() {
    const { children, location, title, headerAlwaysVisible } = this.props

    const lang = location.pathname.split('/')[1]
    if (typeof lang !== undefined) i18n.changeLanguage(lang)

    return (
      <PageWrapper title={title}>
        <>
          <Header currentUrl="home" alwaysVisible={headerAlwaysVisible} />
          {children}
          <Footer />
        </>
      </PageWrapper>
    )
  }
}
