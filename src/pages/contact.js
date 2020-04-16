import React from "react"
import Layout from '../components/layout'
import "./contact.css"
import Map from "../components/map"
const Contact =()=>{
    return(
        <Layout>
          <h1 style={{textAlign:"center",color:"#333"}}>For more information you can send me your message!</h1>

<div className="form" >

<form  name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
style={{padding:"20px",margin:"10px"}}>
  <h2 style={{color:"#333"}}>Email Me:</h2>
<input type="hidden" name="form-name" value="contact" required/>
<div>
  <label>Name:</label>
  <br/>
  <input type="text" placeholder="your name" name="name" className="input" required/>
  </div>
  <div>
  <label>Email:</label>
  <br/>
  <input type="email" placeholder="your email" name="email" className="input" required/>
  </div>
  <div>
  <label>Message:</label>
  <br/>
  {/* <input type="text" name="message" className="message" /> */}
  <textarea type="text" name="message" className="message"></textarea>
  </div>

<button type="submit"  className="button">Send</button>
</form>
<Map />
</div>

        </Layout>
    )
}

export default Contact;