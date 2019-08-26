import React from 'react'
import { navigate } from 'gatsby'

import LanguageSelectorView from './language-selector-view'

export default class LanguageSelector extends React.Component {
  render() {
    return <LanguageSelectorView
      {...this.props}
      setLocale={l => navigate(`/${l}/home`)}
    />
  }
}