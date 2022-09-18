import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AuthLayout } from 'layouts/Auth'
import { MainLayout } from 'layouts/Main'
import { Auth } from 'pages'
import { signIn } from 'store/auth'
import { LocalStorage } from 'utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const token = LocalStorage.getAuthToken()

  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [token])

  if (!token && !isAuth)
    return (
      <AuthLayout>
        <Auth />
      </AuthLayout>
    )

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
