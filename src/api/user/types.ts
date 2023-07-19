export interface loginForm {
  username: string
  password: string
}

export interface loginResponseData {
  code: number,
  data: dataType
}

interface dataType {
  token?: string,
  message?: string
}

// 服务器返回类型
export interface userResponseData {
  code: number,
  data: user
}

interface user {
  checkUser: userInfo
}

interface userInfo {
  userId: number,
  avatar: String,
  username: String,
  password: String,
  desc: String,
  roles: String[],
  buttons: String[],
  routes: String[],
  token: String
}
