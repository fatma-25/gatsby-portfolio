import React from "react"
import { Link } from "gatsby"
import resume from "../images/resume..jpg"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    {/* <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
    <div style={{display:"flex",justifyContent:"center"}}>
<img src={resume} />
    </div>
  </Layout>
)

export default SecondPage
