import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Container from '../components/container'
import Heading from '../components/heading'
import Layout from '../components/layout'

const PostWrapper = styled.div`
  padding-top: 8rem;
`

export default class PostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    return (
      <Layout location={this.props.location} title={post.title} menuStyle="opaque">
        <Container>
          <PostWrapper>
            <Heading>{post.title}</Heading>
            <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
          </PostWrapper>
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost( slug: { eq: $slug }) {
      title
      subtitle
      author
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
