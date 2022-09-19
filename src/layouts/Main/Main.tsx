import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { menuItems } from './data'
import { I_MainLayoutProps } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { signOut } from 'store/auth'
import { ROUTES } from 'utils/constants/routes'

export const MainLayout = ({ children }: I_MainLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const dispatch = useStoreDispatch()

  const location = useLocation()
  const navigate = useNavigate()

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  const handleSignOut = () => {
    dispatch(signOut())
    navigate(ROUTES.auth)
  }

  return (
    <S.MainLayout>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
          <S.Logo />
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[location.pathname.split('/')[1]]}
            selectedKeys={[location.pathname.split('/')[1]]}
            items={menuItems}
          />
          <S.SignOut>
            <S.SignOutButton onClick={handleSignOut}>Sign out</S.SignOutButton>
          </S.SignOut>
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <S.Background>{children}</S.Background>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Todos (AntD + React + Nest)</Layout.Footer>
        </Layout>
      </Layout>
    </S.MainLayout>
  )
}
