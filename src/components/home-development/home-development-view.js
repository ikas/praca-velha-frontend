import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

import Container from '../container'
import ConstructionCard from '../construction-card'
import Heading from '../heading'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Constructions = styled.div`
  ${layout}
  ${space}
  display: flex;
`

export default ({ constructions }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <StyledHeading px={3} my={6} level={4}>{t('Home Development Heading')}</StyledHeading>
      <Constructions mb={7}>
        {constructions.map(({ node }) => <ConstructionCard {...node} key={node.id} />)}
      </Constructions>
    </Container>
  )
}