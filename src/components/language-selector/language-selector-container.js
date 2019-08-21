import React from 'react'
import { navigate } from 'gatsby'

import { setLocale } from '../../utils/locale'
import LanguageSelectorView from './language-selector-view'

export default class LanguageSelector extends React.Component {
  setLocaleAndNavigate(locale) {
    setLocale({ locale })
    navigate(`/${locale}/home`)
  }

  render() {
    return <LanguageSelectorView {...this.props} setLocale={l => this.setLocaleAndNavigate(l)} />
  }
}