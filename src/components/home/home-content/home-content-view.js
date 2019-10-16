import React from "react"

import ConstructionGrid from '../../construction/grid'
import BuildingsBanner from '../buildings-banner'
import Image from '../image'
import FinalSection from '../final-section'

export default ({ constructions }) => {
  const development = constructions.filter(({node}) => node.status === 'WIP').slice(0, 3)
  const available = constructions.filter(({node}) => node.status === 'Ready').slice(0, 3)
  const portfolio = constructions.filter(({node}) => node.status === 'Portfolio').slice(0, 3)
  return (
    <>
      <Image />
      <BuildingsBanner />
      <ConstructionGrid title='Home Available Heading' constructions={available} bg="white" />
      <ConstructionGrid title='Home Development Heading' constructions={development} bg="lightGrey" />
      <ConstructionGrid
        title='Home Portfolio Heading'
        constructions={portfolio}
        bg="grey"
        hasSeeMoreButton={true}
        includeContentSeparator={false}
      />
      <FinalSection />
    </>
  )
}
