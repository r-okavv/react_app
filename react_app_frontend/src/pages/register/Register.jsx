import React from 'react'
import "./Register.css"
import axios from "axios"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    // 入力されたパスワードと確認用パスワードの一致を確認する
    // setCustomValudityはその要素にカスタム検証メッセージを設定できるメソッド
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo" >React App</h3>
          <span className="loginDesc">キャッチコピー</span>
        </div>
        <div className="loginRight">
          <form className="loginBox"onSubmit={(e)=>handleClick(e)}>
            <p className="loginMsg">SignUp</p>
            <input type="text" 
              className="loginInput" 
              placeholder='User Name' 
              required
              ref={username}
              />
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
              required 
              minLength="6"
              ref={password}
              />
            <input 
              type="password" 
              className="loginInput" 
              placeholder='Password Confirmation' 
              required 
              minLength="6"
              ref={passwordConfirmation}
              />
            <button className="loginButton" type="submit">Submit</button>
            <button className="loginRegisterButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}