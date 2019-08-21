import React from 'react'

import LanguageSelectorView from './language-selector-view'

export default class LanguageSelector extends React.Component {
  render() {
    return <LanguageSelectorView {...this.props} />
  }
}