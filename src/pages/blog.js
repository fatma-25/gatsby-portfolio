import React from "react";
import Link from 'gatsby-link'
import Layout from '../components/layout'
import "./blog.css"
const Blog = ({data})=>{

    return(
        <Layout>
            <h1 style={{color:"#333",fontSize:"25px"}}>Latest Posts :</h1>
            <div className="Posts" >

           
            {data.allMarkdownRemark.edges.map(post => (
            //     <div key={post.node.id}>
            //         <h3>{post.node.frontmatter.title}</h3>
            // <h3>posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</h3>
            // <Link to={post.node.frontmatter.path}>Read more</Link>
            //     </div>
            <div class="card" key={post.node.id} style={{margin:"5px"}} className="post-section">
  <img src={post.node.frontmatter.image} class="card-img-top" alt="..." style={{width:"300px"}}/>
  <div class="card-body">
    <h5 class="card-title">{post.node.frontmatter.title}</h5>
    <p class="card-text">posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}.</p>
    <Link to={post.node.frontmatter.path}>Read more</Link>
  </div>
</div>
            ))}
             </div>
        </Layout>
    )
}

export const pageQuery =graphql`
query BlogQuery {
    allMarkdownRemark {
        edges {
          node {
              id
            frontmatter {
              path
              title
              date
              author
              image
            }
            
          }
        }
      }
}
`

export default Blog;