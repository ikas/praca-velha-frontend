import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_vertical.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} alt="Praça Velha logo" />
}
