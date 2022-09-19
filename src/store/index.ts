import { combineReducers, configureStore } from '@reduxjs/toolkit'

import AuthSlice from './auth'
import UISlice from './ui'

import { authAPI } from 'services/auth'
import { todoAPI } from 'services/todo'

const rootReducer = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
  [UISlice.name]: UISlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [todoAPI.reducerPath]: todoAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authAPI.middleware, todoAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
