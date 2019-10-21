import React from 'react'

import FormView from './form-view'

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    }
  }

  handleChange(field, value) {
    const newState = {}
    newState[field] = value
    return this.setState(newState)
  }

  onSubmit() {
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={() => this.onSubmit()}>
        <FormView
          handleChange={(f, v) => this.handleChange(f, v)}
          {...this.props}
          {...this.state}
        />
      </form>
    )
  }
}
