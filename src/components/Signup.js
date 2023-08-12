import React from 'react'
import "./style.css";
export default function Signup() {
  return (
    <div>
        <div className="center">
      <h1>Signup</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
            <input type="text" required/>
            <span></span>
            <label>Email</label>
          </div>
        <div className="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
            <input type="password" required/>
            <span></span>
            <label>Confirm Password</label>
          </div>
        <input className="pass" type="checkbox"/> Accept <a href="#">Terms & Condtions</a>
        <input type="submit" value="Sign up"/>
     
        
      </form>
    </div>
    </div>
 
  )
}
