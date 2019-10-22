import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_vertical.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} alt="Praça Velha logo" {...props} />
}
