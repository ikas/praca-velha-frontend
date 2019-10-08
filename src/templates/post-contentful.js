import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { space, layout } from 'styled-system'

import Container from '../components/container'
import Heading from '../components/heading'
import Layout from '../components/layout'

import theme from '../utils/theme'

const PostWrapper = styled.div`
  ${space}
  ${layout}
  padding-top: 81px;
  padding-bottom: 2rem;
`

export default class PostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    return (
      <Layout location={this.props.location} title={post.title}>
        <Container>
          <PostWrapper px={3}>
            <Heading>{post.title}</Heading>
            <section
              style={{ color: theme.colors.primary, lineHeight: '1.8rem' }}
              dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}
            />
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
