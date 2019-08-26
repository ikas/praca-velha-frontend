import React from 'react'
import PropTypes from 'prop-types'

import CopyView from './copy-text-view'

export default class CopyContainer extends React.Component {
  render() {
    return <CopyView {...this.props} />
  }
}

CopyContainer.propTypes = {
  color: PropTypes.string,
}

CopyContainer.defaultProps = {
  color: 'primary',
}
