import React, { Fragment } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { amber } from '@material-ui/core/colors'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import Box from '../../box'
import Container from '../../container'
import Copy from '../../copy-text'
import Heading from '../../heading'

const Button = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  background: ${props => props.theme.colors.primary};
  margin-top: ${props => props.theme.space[5]}px;
`

const FeedbackContainer = styled.div`
  textAlign: center;
  transition: opacity 0.15s linear 0.15s;
  opacity: ${(props) => props.visible ? 1 : 0}
`

const muiTheme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

export default ({
  firstName,
  lastName,
  email,
  phoneNumber,
  subject,
  message,
  handleChange,
  handleBlur,
  completed,
  success,
  errors
}) => {
  const { t } = useTranslation()
  const formVisible = !completed || (completed && !success)
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Container>
        <Box mt={6} mb={7} mx={"auto"} width={[1, 1, 1, 1 / 2]}>
          <Box mx={3}>
            <Heading level={4} textAlign="center">{t('Contacts Talk With Us')}</Heading>
            {
              formVisible && (
                <Fragment>
                  <Box display="grid" gridTemplateColumns={["100%", "49% 49%"]} gridGap={[0, "2%"]}>
                    <TextField
                      id="outlined-name"
                      label={t('Contacts Form Input First Name')}
                      value={firstName}
                      onChange={ev => handleChange('firstName', ev.target.value)}
                      onBlur={ev => handleBlur('firstName')}
                      margin="normal"
                      variant="outlined"
                      error={errors.firstName}
                      fullWidth
                    />

                    <TextField
                      id="outlined-surname"
                      label={t('Contacts Form Input Last Name')}
                      value={lastName}
                      onChange={ev => handleChange('lastName', ev.target.value)}
                      onBlur={ev => handleBlur('lastName')}
                      margin="normal"
                      variant="outlined"
                      error={errors.lastName}
                      fullWidth
                    />
                  </Box>

                  <Box display="grid" gridTemplateColumns={["100%", "49% 49%"]} gridGap={[0, "2%"]}>
                    <TextField
                      id="outlined-phone"
                      label={t('Contacts Form Input Phone Number')}
                      value={phoneNumber}
                      onChange={ev => handleChange('phoneNumber', ev.target.value)}
                      onBlur={ev => handleBlur('phoneNumber')}
                      margin="normal"
                      variant="outlined"
                      error={errors.phoneNumber}
                      fullWidth
                    />

                    <TextField
                      id="outlined-emai"
                      label={t('Contacts Form Input Email')}
                      value={email}
                      onChange={ev => handleChange('email', ev.target.value)}
                      onBlur={ev => handleBlur('email')}
                      margin="normal"
                      variant="outlined"
                      error={errors.email}
                      fullWidth
                    />
                  </Box>

                  <TextField
                    id="outlined-subject"
                    label={t('Contacts Form Input Subject')}
                    value={subject}
                    onChange={ev => handleChange('subject', ev.target.value)}
                    onBlur={ev => handleBlur('subject')}
                    margin="normal"
                    variant="outlined"
                    error={errors.subject}
                    fullWidth
                  />

                  <TextField
                    id="outlined-message"
                    label={t('Contacts Form Input Message')}
                    value={message}
                    onChange={ev => handleChange('message', ev.target.value)}
                    onBlur={ev => handleBlur('message')}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows="4"
                    inputProps={{
                      maxLength: 1000
                    }}
                    error={errors.message}
                  />

                  <FeedbackContainer visible={completed && !success}>
                    <Copy fontSize={2} mt={3}>
                      <FontAwesomeIcon icon={faExclamationCircle} style={{ marginRight: 12 }} />
                      {t('Contacts Submission Failure')}
                    </Copy>
                  </FeedbackContainer>

                  <Button>
                    <Copy color="secondary" fontWeight="bold" my={3}>{t('Contacts Form Submit')}</Copy>
                  </Button>
                </Fragment>
              )
            }
            <FeedbackContainer visible={completed && success}>
              <Copy fontSize={2} mt={3}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 12 }} />
                {t('Contacts Submission Success')}
              </Copy>
            </FeedbackContainer>
          </Box>
        </Box>
      </Container>
    </MuiThemeProvider>
  )
}
