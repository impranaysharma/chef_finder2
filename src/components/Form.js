import React from 'react'
import './Form.css'
const Form = () => {
  return (<>
    <div id='fhead'> Join Us</div>
    <form 
    method="POST" 
    action="https://script.google.com/macros/s/AKfycbwgwRUxxL-pG8Knas8UGSi-5tr5hoORkChd-WF-ot8q2lsKNM2bIZwr2PRr0cXwizJqaw/exec"
  >
    <label id='lemail'>Email : </label>
    <input name="Email" type="email" placeholder="Email" required id='email'/><br/>
    <label id='lname'>Name : </label>
    
    <input name="Name" type="text" placeholder="Name" required id='name'/><br/>
    <label id='lnumber'> Number : </label>
    <input name='Integer' type='integer' placeholder='Number' required id='integer'/><br/>
    <label id='lnumber2'> Are you a Chef or Employeer: </label>
    <input name='Type' type='integer' placeholder='Chef / Employeer' required id='type'/><br/>
    <button  type="submit" id='send'>Submit</button>
  </form>
  
  </>
  )
}

export default Form