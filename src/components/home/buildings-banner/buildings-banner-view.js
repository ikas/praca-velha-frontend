import React from 'react'
import { useTranslation } from 'react-i18next'

import Box from '../../box'
import Heading from '../../heading'

export default () => {
  const { t } = useTranslation()
  return (
    <Box bg="primary">
      <Heading level={2} textAlign="center" color="secondary" py={7} my={0}>
        {t('Home Know Our Buildings')}
      </Heading>
    </Box>
  )
}
