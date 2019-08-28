import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

import Container from '../container'
import Heading from '../heading'

const Constructions = styled.div`
  display: flex;
`

const Construction = styled.div`
  ${layout}
  ${space}
`

export default ({ constructions }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Heading px={3} level={2}>{t('Home Development Heading')}</Heading>
      <Constructions>
        {constructions.map(({ node }) => {
            return (
              <Link to={`/${node.slug}`} key={node.id}>
                <Construction px={3}>
                  <Img fluid={node.mainImage.fluid} />
                  <Heading level={3}>{node.name}</Heading>
                  <Heading level={4}>{node.address} | {node.city}</Heading>
                  <Heading level={4}>{node.typologies}</Heading>
                  <Heading level={4}>{node.saleStatus}</Heading>
                </Construction>
              </Link>
            )
          })}
      </Constructions>
    </Container>
  )
}