import { useLayoutEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AuthLayout } from 'layouts/Auth'
import { signIn } from 'store/auth'
import { ROUTES } from 'utils/constants/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

export const AuthRoute = () => {
  const token = LocalStorage.getAuthToken()

  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [token])

  if (!token && !isAuth)
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    )

  return <Navigate to={ROUTES.home} />
}
