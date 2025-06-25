// Sẽ được phép truy cập vào trang này nếu chưa đăng nhập

import Paths from '@/configs/route'
import { lazy } from 'react'
import { type RouteObject } from 'react-router'
// Lazy load
const LoginPage = lazy(() => import('@/pages/Login'))

const AuthenticationRoutes: RouteObject[] = [
  {
    loader: () => {
      // Check if the user is authenticated
    },
    children: [
      {
        index: true,
        path: Paths.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]

export default AuthenticationRoutes
