import React from "react"
import { useTranslation } from 'react-i18next'
import { isMobile } from "react-device-detect"

import Box from '../../box'
import ConstructionGrid from '../grid'
import Heading from '../../heading'

import PromoImage from '../promo-image'

export default ({ constructions }) => {
  const development = constructions.filter(({node}) => node.status === 'WIP')
  const available = constructions.filter(({node}) => node.status === 'Ready')
  const portfolio = constructions.filter(({node}) => node.status === 'Portfolio')
  const { t } = useTranslation()
  return (
    <>
      <PromoImage>
        <Box bg="primarySoftShade" py={4} alignSelf="stretch" display="flex" justifyContent="center">
          { isMobile && <Heading color="white" level={2}>{t('Buildings')}</Heading> }
          { !isMobile && <Heading color="white">{t('Buildings')}</Heading> }
        </Box>
      </PromoImage>
      <ConstructionGrid title='Home Available Heading' constructions={available} bg="white" />
      <ConstructionGrid title='Home Development Heading' constructions={development} bg="lightGrey" />
      <ConstructionGrid title='Home Portfolio Heading' constructions={portfolio} bg="grey" includeContentSeparator={false} />
    </>
  )
}
