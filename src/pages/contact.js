import React from "react"
import Layout from '../components/layout'
import "./contact.css"
const Contact =()=>{
    return(
        <Layout>
<form className="form" name="contact" method="POST" data-netlify="true">
<div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="name" placeholder="your name" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" placeholder="your email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" required></textarea>
  </div>
 
  <button type="submit" class="btn btn-primary">Send</button>
</form>
        </Layout>
    )
}

export default Contact;