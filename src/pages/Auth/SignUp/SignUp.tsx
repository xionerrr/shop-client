import { Button, Form, Input } from 'antd'
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface.d'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { I_SignUpProps } from './models'
import * as S from './styles'

import { T_AuthForm } from '../models'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { authAPI } from 'services/auth'
import { signIn } from 'store/auth'
import { ROUTES } from 'utils/constants/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

export const SignUp = ({ authForm }: I_SignUpProps) => {
  const [localSignUp, { data: localSignUpData }] = authAPI.useLocalSignUpMutation()

  const dispatch = useStoreDispatch()

  const navigate = useNavigate()

  const onFinish = (values: T_AuthForm) => {
    if (values.password === values.passwordConfirm)
      localSignUp({
        email: values.email,
        password: values.password,
      })
  }

  const onFinishFailed = (errorInfo: ValidateErrorEntity<T_AuthForm>) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    if (localSignUpData) {
      LocalStorage.setAuthToken(localSignUpData.access_token)
      dispatch(signIn())
      navigate(ROUTES.home)
    }
  }, [localSignUpData])

  return (
    <S.SignUp>
      <Form
        name='basic'
        style={{ minWidth: 425 }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        form={authForm}
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
        <Form.Item
          label='Confirm Password'
          name='passwordConfirm'
          rules={[{ required: true, message: 'Please confirm your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='ghost' htmlType='submit'>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </S.SignUp>
  )
}
