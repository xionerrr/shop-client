import { createSlice } from '@reduxjs/toolkit'

import { I_UIState } from './models'

const initialState: I_UIState = {
  test: false,
}

const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTrueTest: (state) => {
      state.test = true
    },
  },
})

export const { setTrueTest } = UISlice.actions

export default UISlice
