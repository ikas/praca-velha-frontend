import React from "react";

import Box from '../../box';
import Container from '../../container';
import Heading from '../../heading';

import AboutCopy from '../copy';
import VisionImage from '../vision-image';

export default () => (
  <Container pb={6}>
    <Heading textAlign="center" mt={7}>A nossa visão</Heading>
    <Box display="flex" px={3}>
      <Box flex={1}><VisionImage /></Box>
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center">
        <AboutCopy textAlign="right" pb={5}>Modernizar processos, práticas e design para promover a sustentabilidade na habitação.</AboutCopy>
        <AboutCopy textAlign="right">Respeitando o passado, a cultura e arquitetura, rejuvenescer e revitalizar os centros históricos das nossas cidades.</AboutCopy>
      </Box>
    </Box>
  </Container>
)
