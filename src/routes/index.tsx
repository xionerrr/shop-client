import { Routes, Route } from 'react-router-dom'

import { LayoutRoute } from './LayoutRoute'

import { Home, NotFound } from 'pages'
import { ROUTES } from 'utils/constants/routes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutRoute />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  )
}
