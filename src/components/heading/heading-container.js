import React from 'react'
import PropTypes from 'prop-types'

import HeadingView from './heading-view'

export default class Heading1Container extends React.Component {
  render() {
    return <HeadingView {...this.props} />
  }
}

Heading1Container.propTypes = {
  level: PropTypes.oneOf([1,2,3,4,5]),
  color: PropTypes.string,
}

Heading1Container.defaultProps = {
  level: 1,
  color: 'primary',
}
