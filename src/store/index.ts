import { combineReducers, configureStore } from '@reduxjs/toolkit'

import AuthSlice from './auth'
import UISlice from './ui'

import { authAPI } from 'services/auth'

const rootReducer = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
  [UISlice.name]: UISlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
