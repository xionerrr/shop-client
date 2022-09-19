import { Form } from 'antd'
import { useEffect, useState } from 'react'

import { T_AuthForm } from './models'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import * as S from './styles'

export const Auth = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const [authForm] = Form.useForm<T_AuthForm>()

  const handleToggleActiveTab = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <S.Auth>
      <S.AuthInner>
        <S.SwitchTabParagraph>
          {isActive ? `Already have an account?` : `Don't have an account?`}
          <S.SwitchTabButton type='link' onClick={handleToggleActiveTab}>
            {isActive ? `Sign In` : `Sign Up`}
          </S.SwitchTabButton>
        </S.SwitchTabParagraph>
        {isActive ? <SignUp authForm={authForm} /> : <SignIn authForm={authForm} />}
      </S.AuthInner>
    </S.Auth>
  )
}
