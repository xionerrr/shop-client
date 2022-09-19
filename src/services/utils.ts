import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { LocalStorage } from 'utils/helpers/localStorage'

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_LINK,
  prepareHeaders: (headers) => {
    const accessToken = LocalStorage.getAuthToken()
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})
