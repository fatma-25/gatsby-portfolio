import React from 'react'
import img1 from "../images/state.jpg"
import Layout from './layout'
const BlogPost =()=>(
<Layout>
    <div style={{padding:"0px 200px"}}>
<h1>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</h1>
<img src={img1}  />
</div>
</Layout>
)

export default BlogPost;