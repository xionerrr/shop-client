import { Routes, Route } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { Auth, Home, NotFound, Settings, Todos } from 'pages'
import { ROUTES } from 'utils/constants/routes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path={ROUTES.auth} element={<Auth />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.todos} element={<Todos />} />
        <Route path={ROUTES.settings} element={<Settings />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  )
}
