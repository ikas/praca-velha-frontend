import React from 'react'

import LogoAnimatedView from './logo-animated-view'

export default class LanguageSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 2600)
  }

  render() {
    return <LogoAnimatedView {...this.props} visible={this.state.visible} />
  }
}