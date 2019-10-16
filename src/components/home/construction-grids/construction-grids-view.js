import React from "react"

import Box from '../../box'
import ConstructionsGrid from '../../construction/grid'

export default ({ available, development, portfolio }) => (
  <Box>
    <ConstructionsGrid title='Home Available Heading' constructions={available} bg="white" />
    <ConstructionsGrid title='Home Development Heading' constructions={development} bg="lightGrey" />
    <ConstructionsGrid
      title='Home Portfolio Heading'
      constructions={portfolio}
      bg="grey"
      hasSeeMoreButton={true}
      includeContentSeparator={false}
    />
  </Box>
)
