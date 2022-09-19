import { FormInstance } from 'antd'

export type T_SignInForm = {
  email: string
  password: string
}

export interface I_SignInProps {
  signInForm: FormInstance<T_SignInForm>
}
