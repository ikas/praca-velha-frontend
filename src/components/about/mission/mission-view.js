import React from "react";

import Box from '../../box';
import Container from '../../container';
import Heading from '../../heading';

import AboutCopy from '../copy';
import MissionImage from '../mission-image';

export default () => (
  <Container pb={6}>
    <Heading textAlign="center" mx={3} mt={[6, 7]}>A nossa missão</Heading>
    <Box display="flex" flexDirection={['column', 'row']} px={3}>
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center">
        <AboutCopy pb={5}>Trabalhar diariamente para proporcionar as melhores alternativas de habitação e investimento.</AboutCopy>
        <AboutCopy>Garantir a satisfação dos clientes e promover a sustentabilidade no setor.</AboutCopy>
      </Box>
      <Box flex={1}><MissionImage /></Box>
    </Box>
  </Container>
)
