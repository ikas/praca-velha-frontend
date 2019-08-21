import React from 'react'
import PropTypes from 'prop-types'

import AnchorView from './anchor-view'

export default class AnchorContainer extends React.Component {
  render() {
    return <AnchorView {...this.props} />
  }
}

AnchorContainer.propTypes = {
  color: PropTypes.string,
}

AnchorContainer.defaultProps = {
  color: 'primary',
}