import { createAsyncThunk } from '@reduxjs/toolkit'

import { pushMessageToChat, setChatMessages } from './slice'

import { E_Chat, I_ChatMessage } from 'models/chat'
import { socket } from 'services/socket'

export const subscribe = createAsyncThunk('chat', async (_, { dispatch }) => {
  socket.on(E_Chat.getChatMessages, (data: { messages: I_ChatMessage[] }) => {
    console.log(data)
    dispatch(setChatMessages(data.messages))
  })

  socket.on(E_Chat.getChatMessage, (data: { message: I_ChatMessage }) => {
    dispatch(pushMessageToChat(data.message))
  })
})

export const unsubscribe = () => {
  socket.off(E_Chat.getChatMessages)
  socket.off(E_Chat.getChatMessage)
}
