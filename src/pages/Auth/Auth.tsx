import { Button } from 'antd'
import { useState } from 'react'

import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import * as S from './styles'

export const Auth = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleToggleActiveTab = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <S.Auth>
      <Button onClick={handleToggleActiveTab}>Toggle active tab</Button>
      {isActive ? <SignUp /> : <SignIn />}
    </S.Auth>
  )
}
