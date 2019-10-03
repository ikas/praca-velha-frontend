import React from "react";
import styled from 'styled-components';

import Box from '../../box';
import Container from '../../container';
import Copy from '../../copy-text';
import Logo from '../../logo';

const SuperCopy = styled(Copy)`
  line-height: 3rem;
  font-size: 1.75rem;
  text-align: right;
`

export default () => (
  <Container>
    <Box display="flex" px={5} py={6}>
      <Box flex={1}><Logo /></Box>
      <Box flex={1} my={5} display="flex" alignItems="center" justifyContent="flex-end">
        <SuperCopy pl={5}>Com uma equipa de profissionais com mais de 25 anos de experiência, a Praça Velha Sociedade Imobiliária S.A. e os seus associados contam com uma distinta reputação nas atividade dos setores da promoção e comercialização de bens imobiliários, tanto no panorama nacional como internacional.</SuperCopy>
      </Box>
    </Box>
  </Container>
)
