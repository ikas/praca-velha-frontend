import React from 'react'

import HeaderView from './header-view'

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scroll: 0,
      top: 0,
      height: 0,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector('div#header-wrapper');
    if (el) {
      this.setState({ top: el.offsetTop, height: el.offsetHeight });
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return <HeaderView
      {...this.props}
      isScrolling={this.state.scroll > this.state.top + 150}
      menuOpen={this.state.open}
      toggleMenuOpen={() => this.setState({ open: !this.state.open })}
    />
  }
}
