import React from 'react'
import "./style.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
    <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required></input>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <button><Link to="/Home">Login</Link></button>
        <div className="signup_link">
          Not a member? <Link to="/Signup">Signup</Link>
        </div>
        <div className="signup_through">
          or signup using
        </div>
        <div className="image_login"> 
        <div className="image">
          <a href="https://www.google.co.in/"><img className="image_s" src="google.svg" alt=""/>
        </a></div>
        <div className="image">
          <a href="https://www.google.co.in/"><img className="image_s" src="instagram.svg" alt=""/>
          </a></div>
        <div className="image">
          <a href="https://www.google.co.in/"><img className="image_s" src="facebook.svg" alt=""/>
        </a></div>
      </div>
      </form>
    </div>
    </div>
  )
}
