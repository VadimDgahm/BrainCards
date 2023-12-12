export type SignUpRequest = {
  email: string
  password: string
}
export type LoginRequest = {
  email: string
  password: string
  rememberMe?: boolean
}
export type AuthMeResponse = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
