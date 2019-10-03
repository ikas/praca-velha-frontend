import React from "react";

import Box from '../../box';
import Container from '../../container';
import Heading from '../../heading';

import CopyBox from '../copy-box';
import MissionImage from '../mission-image';

export default ({ title, html }) => (
  <Container pb={6}>
    <Heading textAlign="center" mx={3} mt={[6, 7]}>{title}</Heading>
    <Box display="flex" flexDirection={['column', 'row']} px={3}>
      <CopyBox
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Box flex={1}><MissionImage /></Box>
    </Box>
  </Container>
)
