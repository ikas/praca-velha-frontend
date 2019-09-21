import React from 'react'
import { useTranslation } from 'react-i18next'

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'
import ImageGallery from '../../image-gallery'

export default ({ mainImage, secondaryImage, images }) => {
  const { t } = useTranslation()

  let galleryItems = []

  if (mainImage) {
    galleryItems.push({
      src: mainImage.fluid.src,
      thumbnail: mainImage.fluid.src,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    })
  }
  if (secondaryImage) {
    galleryItems.push({
      src: secondaryImage.fixed.src,
      thumbnail: secondaryImage.fixed.src,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    })
  }

  if (images) {
    images.forEach(img => galleryItems.push({
      src: img.fluid.src,
      thumbnail: img.fluid.src,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    }))
  }

  return (
    <Box mt={7} pb={4} px={3}>
      <Container>
        <Heading level={4} textAlign="center">{t('Construction Gallery Heading')}</Heading>
        <ImageGallery images={galleryItems} />
      </Container>
    </Box>
  )
}
