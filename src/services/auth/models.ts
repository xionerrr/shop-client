export interface I_LocalSignInResponse {
  access_token: string
  refresh_token: string
}

export interface I_LocalSignInRequest {
  email: string
  password: string
}

export interface I_LocalSignUpResponse {
  access_token: string
  refresh_token: string
}

export interface I_LocalSignUpRequest {
  email: string
  password: string
}
