import { combineReducers, configureStore } from '@reduxjs/toolkit'

import AuthSlice from './auth'
import UISlice from './ui'

const rootReducer = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
  [UISlice.name]: UISlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
