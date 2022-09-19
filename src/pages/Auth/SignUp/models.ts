import { FormInstance } from 'antd'

export type T_SignUpForm = {
  email: string
  password: string
}

export interface I_SignUpProps {
  signUpForm: FormInstance<T_SignUpForm>
}
