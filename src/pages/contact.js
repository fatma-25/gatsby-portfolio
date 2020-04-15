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
  <label>Name:</label>
  <br/>
  <input type="name" placeholder="your name" name="name" className="input" />
  </div>
  <div>
  <label>Email:</label>
  <br/>
  <input type="email" placeholder="your email" name="email" className="input" />
  </div>
  <div>
  <label>Message:</label>
  <br/>
  <input type="message" name="message" className="message" />
  </div>

  <div data-netlify-recaptcha="true">

</div>
  <button type="submit"  className="button">Send</button>
</form>
        </Layout>
    )
}

export default Contact;