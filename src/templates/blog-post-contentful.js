import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <article>
          <header>
            <h1
              style={{
                marginTop: '1rem',
                marginBottom: 0,
              }}
            >
              {post.title}
            </h1>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
          <hr
            style={{
              marginBottom: '1rem',
            }}
          />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
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
