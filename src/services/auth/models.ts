export interface I_LocalSignInResponse {
  access_token: string
  refresh_token: string
}

export interface I_LocalSignInRequest {
  email: string
  password: string
}
