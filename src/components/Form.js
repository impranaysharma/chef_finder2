import React from 'react'
import './Form.css'
const Form = () => {
  return (<>
    <div id='fhead'> Join Us</div>
    <form 
    method="POST" 
    action="https://script.google.com/macros/s/AKfycbwgwRUxxL-pG8Knas8UGSi-5tr5hoORkChd-WF-ot8q2lsKNM2bIZwr2PRr0cXwizJqaw/exec"
  >
    <label>Email : </label>
    <input name="Email" type="email" placeholder="Email" required id='email'/><br/>
    <label>Name : </label>
    
    <input name="Name" type="text" placeholder="Name" required id='name'/><br/>
    <label>Number : </label>
    <input name='Integer' type='integer' placeholder='Number' required id='integer'/><br/>
    <button  type="submit" id='send'>Submit</button>
  </form>
  
  </>
  )
}

export default Form