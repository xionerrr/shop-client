import { Button, Form, Typography } from 'antd'
import { useState } from 'react'

import { SignIn, T_SignInForm } from './SignIn'
import { SignUp, T_SignUpForm } from './SignUp'
import * as S from './styles'

export const Auth = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const [signInForm] = Form.useForm<T_SignInForm>()
  const [signUpForm] = Form.useForm<T_SignUpForm>()

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
        {isActive ? <SignUp signUpForm={signUpForm} /> : <SignIn signInForm={signInForm} />}
      </S.AuthInner>
    </S.Auth>
  )
}
