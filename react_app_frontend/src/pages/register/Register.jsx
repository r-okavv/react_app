import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo" >React App</h3>
          <span className="loginDesc">キャッチコピー</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">SignUp</p>
            <input type="text" className="loginInput" placeholder='User Name'/>
            <input type="email" className="loginInput" placeholder='E-mail'required/>
            <input type="password" className="loginInput" placeholder='Password' required/>
            <input type="password" className="loginInput" placeholder='Password Confirmation' required/>
            <button className="loginButton">Submit</button>
            <button className="loginRegisterButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}