import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 lassName="loginLogo" >React App</h3>
          <span className="loginDesc">キャッチコピー</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">Login</p>
            <input type="text" className="loginInput" placeholder='E-mail'/>
            <input type="text" className="loginInput" placeholder='Password'/>
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
