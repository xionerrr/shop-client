import { ChangeEvent, useState } from 'react'

import { I_MessageInputProps } from './models'
import * as S from './styles'

export const MessagesInput = ({ handleSendMessage }: I_MessageInputProps) => {
  const [messageValue, setMessageValue] = useState<string>('')

  const handleChangeMessageValue = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.currentTarget.value)
  }

  return (
    <S.MessageInputInner>
      <S.MessageInput
        placeholder='Type message here'
        value={messageValue}
        onChange={handleChangeMessageValue}
      />
      <S.SendMessageButton onClick={handleSendMessage(messageValue)}>Send</S.SendMessageButton>
    </S.MessageInputInner>
  )
}
