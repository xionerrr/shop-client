import { useLayoutEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

import { MessagesInput } from './components/MessageInput'
import { Messages } from './components/Messages'
import * as S from './styles'

const newSocket = io('http://localhost:8000/')

export const Chat = () => {
  const [socket, setSocket] = useState<Socket>()

  const handleSendMessage = (message: string) => () => {
    socket?.emit('message', message)
  }

  useLayoutEffect(() => {
    setSocket(newSocket)
  }, [socket])

  if (socket)
    return (
      <S.Chat>
        <MessagesInput handleSendMessage={handleSendMessage} />
        <Messages socket={socket} />
      </S.Chat>
    )

  return null
}
