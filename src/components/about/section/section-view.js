import React from "react"

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'
import CopyBox from '../copy-box'

export default ({ title, html, image, textRight = false, theme = 'default', imageSize = ['30%', '50%', '30%'] }) => {

  const textSide = <CopyBox
    flex={1}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    dangerouslySetInnerHTML={{ __html: html }}
    textAlign={textRight? ['center', 'right', 'right']: ['center', 'left', 'left']}
  />
  const imageSide = <Box flex={1} display="flex" alignItems="center" justifyContent="center">
    <Box width={imageSize}>
      {image}
    </Box>
  </Box>
  const textColor = theme === 'default' ? 'primary' : 'secondary'
  const bgColor = theme === 'default' ? null : 'primary'

  return (
    <Box py={6} bg={bgColor} color={textColor}>
      <Container>
        { title && <Heading textAlign="center" mx={3} mt={0} color={textColor}>{title}</Heading>}
        <Box display="flex" flexDirection={['column', 'row', 'row']} px={3} >
          {textRight ? [imageSide, textSide] : [textSide, imageSide]}
        </Box>
      </Container>
    </Box>
  )
}