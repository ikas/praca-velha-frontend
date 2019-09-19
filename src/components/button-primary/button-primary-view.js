import React from 'react';

import Button from '../button'

export default ({ children, ...props }) => (
  <Button
    bg="primary"
    color="secondary"
    px={4}
    py={2}
    {...props}
  >{children}</Button>
)