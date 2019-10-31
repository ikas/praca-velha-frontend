import React from "react";

import CopyBox from '../copy-box';
import Box from '../../box';
import Container from '../../container';
import Logo from '../../logo';

export default ({ html }) => (
  <Container>
    <Box
      display="flex"
      flexDirection={['column', 'row']}
      px={3}
      py={[6, 7]}
    >
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Box width="50%">
          <Logo />
        </Box>
      </Box>
      <CopyBox
        flex={1}
        my={5}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  </Container>
)
