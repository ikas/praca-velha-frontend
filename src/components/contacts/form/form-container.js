import React from 'react'
import { withTranslation } from 'react-i18next'

import FormView from './form-view'

class FormContainer extends React.Component {

  static defaultProps = {
    constructionName: null
  }

  static initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    completed: false,
    success: false,
    errors: {}
  }

  constructor(props) {
    super(props)
    this.state = FormContainer.initialState
  }

  handleChange(field, value) {
    const newState = {}
    newState[field] = value
    newState.completed = false
    // Revalidate field if needed (has previous error)
    if (this.state.errors[field]) {
      newState.errors = Object.assign({}, this.state.errors)
      newState.errors[field] = this.getError(field, value, true)
    }
    return this.setState(newState)
  }

  handleBlur(field) {
    // Validate field by setting its error
    let errors = Object.assign({}, this.state.errors)
    errors[field] = this.getError(field, this.state[field])
    return this.setState({errors})
  }

  getError(field, value, editing = false) {
    let error = false
    switch (field) {
      case 'firstName':
      case 'lastName':
        error = value.length === 0
        break
      case 'email':
        error = value.length === 0 || (!editing && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        break
      case 'phoneNumber':
        error = value.length === 0 || (!editing && !value.match(/(\+\d\d\d)?[0-9]{9,}/))
        break
      case 'subject':
      case 'message':
        error = value.length === 0 || (!editing && value.length < 3)
        break
      default:
    }
    return error
  }

  resetState(data) {
    return this.setState(Object.assign({}, FormContainer.initialState, data))
  }

  async onSubmit(ev) {
    ev.preventDefault()

    /*
     * Collect and validate data
     */
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      subject: this.state.subject,
      message: this.state.message,
      date: new Date(),
      url: encodeURI(document.location.href),
      constructionName: this.props.constructionName
    }

    let valid = true
    const errors = {}
    Object.keys(data).map(k => {
      errors[k] = this.getError(k, data[k])
      if (errors[k]) {
        valid = false
      }
      return true
    })

    if (!valid) {
      this.setState({ errors })
      return
    }

    try {
      /*
       * POST the contact 
       */
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch("praca-velha-contacts.now.sh", requestOptions).then(res => res.json())

      if (response.success) {
        // If success, reset form and inform user
        this.resetState({ completed: true, success: true })
      } else {
        // If error, simply inform user
        this.setState({ completed: true, success: false })
      }
    } catch (e) {
      // If error, simply inform user
      this.setState({ completed: true, success: false })
    }
  }

  render() {
    return (
      <form onSubmit={(ev) => this.onSubmit(ev)}>
        <FormView
          handleChange={(f, v) => this.handleChange(f, v)}
          handleBlur={(f) => this.handleBlur(f)}
          {...this.props}
          {...this.state}
        />
      </form>
    )
  }
}

export default withTranslation()(FormContainer)
