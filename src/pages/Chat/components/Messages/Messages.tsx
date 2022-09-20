import { useEffect, useState } from 'react'

import { I_MessagesProps } from './models'
import * as S from './styles'

export const Messages = ({ socket }: I_MessagesProps) => {
  const [messages, setMessages] = useState<string[]>([])

  const messageListener = (message: string) => {
    setMessages((prev) => [...prev, message])
  }

  useEffect(() => {
    socket.on('message', messageListener)

    return () => {
      socket.off('message', messageListener)
    }
  }, [messageListener])

  return (
    <S.Messages>
      {messages.map((message, index) => {
        return <div key={index}>{message}</div>
      })}
    </S.Messages>
  )
}
