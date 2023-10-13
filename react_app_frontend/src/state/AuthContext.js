import { useReducer } from "react";
import {createContext} from "react";
import AuthReducer from "./AuthReducer";

// どのコンポーネントからもアクセスできる状態
// 最初のユーザー状態を定義
const initialState = {
  user: null,
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