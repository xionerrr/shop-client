import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_InitialState } from './models'

import { I_ChatMessage } from 'models/chat'

const initialState: I_InitialState = {
  chatMessages: [],
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatMessages: (state, action: PayloadAction<I_ChatMessage[]>) => {
      state.chatMessages = action.payload
    },
    pushMessageToChat: (state, action: PayloadAction<I_ChatMessage>) => {
      state.chatMessages.push(action.payload)
    },
  },
})

export const { setChatMessages, pushMessageToChat } = chatSlice.actions
