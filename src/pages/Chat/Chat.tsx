import { useLayoutEffect } from 'react'

import { MessagesInput } from './components/MessageInput'
import { Messages } from './components/Messages'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { E_Chat } from 'models/chat'
import { socket } from 'services/socket'

export const Chat = () => {
  const dispatch = useStoreDispatch()

  const handleSendMessage = (message: string) => () => {
    socket.emit(E_Chat.sendChatMessage, { text: message })
  }

  useLayoutEffect(() => {
    dispatch(subscribe())
    socket.emit(E_Chat.requestChatMessages)

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  if (socket)
    return (
      <S.Chat>
        <MessagesInput handleSendMessage={handleSendMessage} />
        <Messages />
      </S.Chat>
    )

  return null
}
