import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { menuItems } from './data'
import { I_MainLayoutProps } from './models'
import * as S from './styles'

export const MainLayout = ({ children }: I_MainLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const location = useLocation()

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev)
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
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <S.Background>{children}</S.Background>
          </Layout.Content>
          <Layout.Footer>Todos (AntD + React + Nest)</Layout.Footer>
        </Layout>
      </Layout>
    </S.MainLayout>
  )
}
