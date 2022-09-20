import {
  HomeOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  WechatOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom'

import { ROUTES } from 'utils/constants/routes'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

export const menuItems: MenuItem[] = [
  getItem(<Link to={ROUTES.home}>Home</Link>, 'home', <HomeOutlined />),
  getItem(<Link to={ROUTES.todos}>Todos</Link>, 'todos', <UnorderedListOutlined />),
  getItem(<Link to={ROUTES.settings}>Settings</Link>, 'settings', <SettingOutlined />),
  getItem(<Link to={ROUTES.chat}>Chat</Link>, 'chat', <WechatOutlined />),
]
