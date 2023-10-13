// ユーザー入力に応じたアクションの設定
// アクションの名前をTypeで宣言

export const LoginStart = (user) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginError = (error) => ({
type: "LOGIN_ERROR",
  payload: error,
});