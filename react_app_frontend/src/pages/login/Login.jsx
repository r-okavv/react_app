import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { loginCall } from '../../ActionCalls';
import { AuthContext } from '../../state/AuthContext';
import "./Login.css"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  // ログインボタンをクリックした際にリロードされると入力された値が消えてしまうためイベントを取得しpreventDefaultを使用する
// submitボタンをクリックした時にLoginCallsが呼ばれるようにする
const handleClick = (e) => {
  e.preventDefault();
  loginCall(
    { email: email.current.value, password: password.current.value },
    dispatch
  );
};

console.log(user);

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo" >React App</h3>
          <span className="loginDesc">キャッチコピー</span>
        </div>
        <div className="loginRight" onSubmit={(e)=>handleClick(e)}>
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
