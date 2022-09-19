import { createApi } from '@reduxjs/toolkit/query/react'

import { I_Todo } from './models'

import { baseQuery } from '../utils'

export const todoAPI = createApi({
  reducerPath: 'todoAPI',
  baseQuery,
  endpoints: (build) => ({
    getTodos: build.query<I_Todo[], void>({
      query: () => ({
        url: 'todos',
      }),
    }),
  }),
})
