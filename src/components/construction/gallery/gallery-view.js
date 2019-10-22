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
      thumbnailWidth: 280,
      thumbnailHeight: 200,
    })
  }
  if (secondaryImage) {
    galleryItems.push({
      src: secondaryImage.fixed.src,
      thumbnail: secondaryImage.fixed.src,
      thumbnailWidth: 280,
      thumbnailHeight: 200,
    })
  }

  if (images) {
    images.forEach(img => galleryItems.push({
      src: img.fluid.src,
      thumbnail: img.fluid.src,
      thumbnailWidth: 280,
      thumbnailHeight: 200,
    }))
  }

  return (
    <Box py={6} px={3}>
      <Container>
        <Heading textAlign="center" my={6}>{t('Construction Gallery Heading')}</Heading>
        <ImageGallery images={galleryItems} />
      </Container>
    </Box>
  )
}
