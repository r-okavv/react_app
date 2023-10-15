import { useReducer } from "react";
import {createContext} from "react";
import AuthReducer from "./AuthReducer";

// どのコンポーネントからもアクセスできる状態
// 最初のユーザー状態を定義
const initialState = {
  user: {
  _id:"651d551a2af3e55a681c14f2",
  username:"tanaka",
  email:"test4@example.com",
  password:"password4",
  profilePicture:"",
  coverPicture:"",
  followers:[],
  followings:[],
  // followings:["651d55602af3e55a681c14fa"],
  isAdmin:false
  },
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
// createContext関数でグローバルコンテキストを作成できる
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};