import React from 'react'
import { useRef } from 'react';
import "./Login.css"

export default function Login() {
  const email = useRef();
  const password = useRef();

  // ログインボタンをクリックした際にリロードされると入力された値が消えてしまうためイベントを取得しpreventDefaultを使用する
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo" >React App</h3>
          <span className="loginDesc">キャッチコピー</span>
        </div>
        <div className="loginRight" onSubmit={(e)=>handleSubmit(e)}>
          <form className="loginBox">
            <p className="loginMsg">Login</p>
            <input 
              type="email" 
              className="loginInput" 
              placeholder='E-mail'
              required
              ref={email}
              />
            <input 
              type="password" 
              className="loginInput" 
              placeholder='Password'
              required minLength="6"
              ref={password}/>
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
