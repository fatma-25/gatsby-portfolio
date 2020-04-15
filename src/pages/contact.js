import React from "react"
import Layout from '../components/layout'
import "./contact.css"
const Contact =()=>{
    return(
        <Layout>
<form className="form" name="contact" method="POST" data-netlify="true"
data-netlify-honeypot="bot-field"
>
  <div>
  <label>Name</label>
  <input type="name" placeholder="your name" name="name" class="form-control" required/>
  </div>
  <div>
  <label>Email</label>
  <input type="email" placeholder="your email" name="email" class="form-control" required/>
  </div>
  <div>
  <label>Message</label>
  <textarea type="message" class="form-control" placeholder="your message" name="message" required></textarea>
  </div>

 
  <button type="submit" class="btn btn-primary" style={{margin:"10px"}}>Send</button>
</form>
        </Layout>
    )
}

export default Contact;