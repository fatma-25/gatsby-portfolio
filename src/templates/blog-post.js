import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <hr />
      <div style={{textAlign:"center"}}>
      <h1>{post.frontmatter.title}</h1>
      <img src={post.frontmatter.image} style={{width:"300px"}} />
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        image
      }
    }
  }
`