import { Button, Typography } from 'antd'
import styled from 'styled-components'

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  min-height: 100vh;
`

export const AuthInner = styled.div``

export const SwitchTabParagraph = styled(Typography.Paragraph)`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-end;

  font-size: 13px;
`

export const SwitchTabButton = styled(Button)`
  padding: 0;

  font-size: 13px;
`
