import React from 'react'

import AboutCopy from '../copy'
import Container from '../../container'

export default () => (
  <Container py={[6, 7]}>
    <AboutCopy px={3} mb={6}>
      Dado o legado histórico, o portfólio da Praça Velha, e dos profissionais associados à mesa, conta já com grandes clientes, grandes obras e projetos inovadores.
    </AboutCopy>

    <AboutCopy px={3} mb={6}>
      Assumimo-nos como uma empresa dinâmica, em progresso contínuo de melhoria, modernização e crescimento individual e coletivo.
    </AboutCopy>

    <AboutCopy px={3}>
      Com a humildade que sempre demonstramos, pretendemos ser sinónimo de competência e satisfação para os nossos clientes, e de eficiência, valores e profissionalismo na nossa atuação no dia a dia.
    </AboutCopy>
  </Container>
)