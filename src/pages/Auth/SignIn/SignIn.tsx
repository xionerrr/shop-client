import { Button, Form, Input } from 'antd'
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface.d'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { I_SignInProps, T_SignInForm } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { authAPI } from 'services/auth'
import { signIn } from 'store/auth'
import { ROUTES } from 'utils/constants/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

export const SignIn = ({ signInForm }: I_SignInProps) => {
  const [localSignIn, { data: localSignInData }] = authAPI.useLocalSignInMutation()

  const dispatch = useStoreDispatch()

  const navigate = useNavigate()

  const onFinish = (values: T_SignInForm) => {
    localSignIn({
      email: values.email,
      password: values.password,
    })
  }

  const onFinishFailed = (errorInfo: ValidateErrorEntity<T_SignInForm>) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    if (localSignInData) {
      LocalStorage.setAuthToken(localSignInData.access_token)
      dispatch(signIn())
      navigate(ROUTES.home)
    }
  }, [localSignInData])

  return (
    <S.SignIn>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        form={signInForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='ghost' htmlType='submit'>
            SignIn
          </Button>
        </Form.Item>
      </Form>
    </S.SignIn>
  )
}
