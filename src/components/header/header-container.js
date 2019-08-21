import React from 'react'
import PropTypes from 'prop-types'

import HeaderView from './header-view'

export default class HeaderContainer extends React.Component {
  render() {
    return <HeaderView {...this.props} />
  }
}

HeaderContainer.propTypes = {
  currentUrl: PropTypes.string.isRequired,
}