import { Outlet } from 'react-router-dom'

import { MainLayout } from 'layouts/Main'

export const LayoutRoute = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
