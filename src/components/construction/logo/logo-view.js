import React from 'react'
import Image from 'gatsby-image'

export default ({ logo, ...props  }) => <Image fixed={logo} {...props} />
