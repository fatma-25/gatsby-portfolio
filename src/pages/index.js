import React,{useEffect} from "react"
import { Link } from "gatsby"
import Rellax from 'rellax'
import img1 from "../images/proj1.jpg"
import img2 from "../images/proj2.jpg"
import img3 from "../images/proj3.jpg"
import './index.css'
import Layout from "../components/layout"


const IndexPage = () => {
 
  useEffect(()=>{
    new Rellax(".rellax")
  })

  return (
  <Layout >
	
   <section className="section-top rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
	   <h1>I'm Fatma </h1>
	   <p>Full stack Javascript developer based on tunisia who enjoys building websites and applications.</p>
	  <p>Down bellow some of my projects</p>
	
   </section>

  <section className="section-grid">
			<div class="rellax" data-rellax-speed="1" data-rellax-xs-speed="3" >
				
				<h2><a href="https://rest55.000webhostapp.com/">Showcase</a></h2>
				<img src={img1} />
				<p>
				Web Site <br />
				Built with Wordpress
				</p>
			</div>
			<div class="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
			
				<h2><a href="https://drive.google.com/file/d/1M1TFXECOaXpik9aKwKoRwPCzxUw2eST_/view">MyBook</a></h2>
				<img src={img2} />
				<p>
					Book Platform <br />
					Built With React & Node

				</p>
			</div>
			<div class="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
			
				<h2><a href="https://rev-coding.web.app/">Rev-code</a></h2>
				<img src={img3} />
				<p>
					Learning Platform <br />
					Built With javascript

				</p>
			</div>
    </section>
<section className="section-bio">

	<ul>
	<li> <a href="#">  <i class="fa fa-at" style={{color:"white",fontSize:"40px"}}></i></a></li>
	<li> <a href="https://github.com/fatma-25/"> <i class="fa fa-github" style={{color:"white",fontSize:"40px"}}></i></a></li>
	<li> <a href="https://fatma-resume.web.app/">  <i class="fa fa-google-plus-official" style={{color:"white",fontSize:"40px"}}></i></a></li>
	<li><a href="https://www.linkedin.com/in/fatma-amara-2985aa113/">  <i class="fa fa-linkedin-square" style={{color:"white",fontSize:"40px"}}></i></a></li>
	<li><a href="#">  <i class="fa fa-twitter" style={{color:"white",fontSize:"40px"}}></i></a></li>
	   </ul>
<h2 style={{fontSize:"20px"}}>© 2020, Built with Love using <a href="https://www.gatsbyjs.org/" style={{color:"gray"}}>Gatsby</a> ,<a href="https://graphql.org/" style={{color:"gray"}}>GraphQl</a> & <a href="https://www.markdownguide.org/basic-syntax/" style={{color:"gray"}}>Markdown</a></h2>
<h3 style={{fontSize:"15px"}}>Gmail:fatma25amara@gmail.com</h3>
</section>
    </Layout >)
  
}

export default IndexPage
