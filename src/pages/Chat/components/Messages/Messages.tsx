import { useEffect, useState } from 'react'

import * as S from './styles'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { I_ChatMessage } from 'models/chat'

export const Messages = () => {
  const [messages, setMessages] = useState<I_ChatMessage[]>([])

  const chatMessages = useStoreSelector((state) => state.chat.chatMessages)

  useEffect(() => {
    if (chatMessages) setMessages(chatMessages)
  }, [chatMessages])

  return (
    <S.Messages>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <div>Message: {message.text}</div>
            <div style={{ fontSize: '12px' }}>Sender: {message.author}</div>
          </div>
        )
      })}
    </S.Messages>
  )
}
