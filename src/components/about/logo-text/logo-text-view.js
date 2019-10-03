import React from "react";

import AboutCopy from '../copy';
import Box from '../../box';
import Container from '../../container';
import Logo from '../../logo';

export default () => (
  <Container>
    <Box display="flex" px={5} py={7}>
      <Box flex={1}><Logo /></Box>
      <Box flex={1} my={5} display="flex" alignItems="center" justifyContent="flex-end">
        <AboutCopy pl={5} textAlign="right">Com uma equipa de profissionais com mais de 25 anos de experiência, a Praça Velha Sociedade Imobiliária S.A. e os seus associados contam com uma distinta reputação nas atividade dos setores da promoção e comercialização de bens imobiliários, tanto no panorama nacional como internacional.</AboutCopy>
      </Box>
    </Box>
  </Container>
)
