import React from 'react'
import { withTranslation } from 'react-i18next';

import FormView from './form-view'

class FormContainer extends React.Component {
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

  getSubject() {
    const { t } = this.props
    const { firstName, lastName, subject } = this.state
    return encodeURI(`${t('Contacts Email Subject Start')} / ${firstName} ${lastName} / ${subject}`)
  }

  getBody() {
    const { t } = this.props
    const { phoneNumber, email, message } = this.state
    return encodeURI(`${message}\n\n${t('Contacts Email')}: ${email}\n${t('Contacts Email Phone Number')}: ${phoneNumber}`)
  }

  onSubmit(ev) {
    ev.preventDefault()

    if( typeof document !== undefined) {
      var mail = document.createElement("a");
      mail.href = `mailto:info@pracavelha.pt?subject=${this.getSubject()}&body=${this.getBody()}`;
      mail.click();
    }
  }

  render() {
    return (
      <form onSubmit={(ev) => this.onSubmit(ev)}>
        <FormView
          handleChange={(f, v) => this.handleChange(f, v)}
          {...this.props}
          {...this.state}
        />
      </form>
    )
  }
}

export default withTranslation()(FormContainer)
