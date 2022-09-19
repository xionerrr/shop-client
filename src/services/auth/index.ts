import { createApi } from '@reduxjs/toolkit/query/react'

import {
  I_LocalSignInRequest,
  I_LocalSignInResponse,
  I_LocalSignUpRequest,
  I_LocalSignUpResponse,
} from './models'

import { baseQuery } from '../utils'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  endpoints: (build) => ({
    localSignIn: build.mutation<I_LocalSignInResponse, I_LocalSignInRequest>({
      query: (body) => ({
        url: 'auth/local/login',
        method: 'POST',
        body,
      }),
    }),
    localSignUp: build.mutation<I_LocalSignUpResponse, I_LocalSignUpRequest>({
      query: (body) => ({
        url: 'auth/local/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})
