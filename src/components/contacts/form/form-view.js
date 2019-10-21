import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField'

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

export default ({
  firstName,
  lastName,
  email,
  phoneNumber,
  subject,
  message,
  handleChange,
}) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Box mt={6} mb={7} mx={3}>
        <Heading level={4} textAlign="center">{t('Contacts Talk With Us')}</Heading>

        <Box display="grid" gridTemplateColumns="50% 49%" gridGap={3}>
          <TextField
            id="outlined-name"
            label={t('Contacts Form Input First Name')}
            value={firstName}
            onChange={ev => handleChange('firstName', ev.target.value)}
            margin="normal"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="outlined-name"
            label={t('Contacts Form Input Last Name')}
            value={lastName}
            onChange={ev => handleChange('lastName', ev.target.value)}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Box>

        <TextField
          id="outlined-name"
          label={t('Contacts Form Input Email')}
          value={email}
          onChange={ev => handleChange('email', ev.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        <Box display="grid" gridTemplateColumns="50% 49%" gridGap={3}>
          <TextField
            id="outlined-name"
            label={t('Contacts Form Input Phone Number')}
            value={phoneNumber}
            onChange={ev => handleChange('phoneNumber', ev.target.value)}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Box>

        <TextField
          id="outlined-name"
          label={t('Contacts Form Input Subject')}
          value={subject}
          onChange={ev => handleChange('subject', ev.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="outlined-name"
          label={t('Contacts Form Input Message')}
          value={message}
          onChange={ev => handleChange('message', ev.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows="4"
        />

        <Button>
          <Copy color="secondary" fontWeight="bold" my={3}>{t('Contacts Form Submit')}</Copy>
        </Button>
      </Box>
    </Container>
  )
}
