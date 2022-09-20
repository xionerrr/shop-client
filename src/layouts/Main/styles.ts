import { Button } from 'antd'
import styled from 'styled-components'

export const MainLayout = styled.div`
  min-height: 100vh;
`

export const Logo = styled.div`
  height: 32px;
  margin: 16px;

  background: rgba(255, 255, 255, 20%);
`

export const Background = styled.div`
  height: 100%;
  padding: 32px;
`

export const SignOut = styled.div`
  height: 100%;
  min-height: 36px;
  max-height: 48px;
  margin-top: 16px;
`

export const SignOutButton = styled(Button)`
  width: 100%;
  height: 100%;

  font-size: 14px;
  color: #fff;

  background-color: #002140;
  border: 0;

  &:hover {
    background-color: #002140;
  }
`
