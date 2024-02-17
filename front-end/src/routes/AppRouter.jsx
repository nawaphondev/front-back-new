import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import AccountLayout from '@/layout/AccountLayout'
import MainLayout from '@/layout/MainLayout'
import AdminLayout from '@/layout/AdminLayout'


import ProductPage from '@/pages/ProductPage'
import ErrorBoundary from '@/pages/ErrorBoundary'
import Landing from '@/pages/Landing'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import CheckOutPage from '@/pages/user/CheckOut'
import OrderDetails from '@/pages/user/OrderDetails'
import CartPage from '@/pages/user/CartPage'

import UserDashBoard from '@/components/UserDashboard'
import UserOrders from '@/components/UserOrders'
import UserProfile from '@/components/UserProfile'
import UserAddress from '@/components/UserAddress'
import AdminProductList from '@/components/productTable/AdminProductList'
import ProductForm from '@/components/forms/ProductForm'
import AdminDashboard from '@/components/AdminDashboard'
import UserCard from '@/components/UserCard'


const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Landing /> },
      { path: '/home', element: <HomePage /> },
      { path: 'login', element: <LoginPage />},
      { path: 'register', element: <RegisterPage />},
      { path: 'about', element: <AboutPage />},
      { path: 'product/:id', element: <ProductPage />},
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Navigate to='/home' /> },
      { path: '/home', element: <HomePage /> },
      { path: 'login', element: <Navigate to='/' />},
      { path: 'register', element: <Navigate to='/' />},
      { path: 'about', element: <AboutPage />},
      { path: 'product/:id', element: <ProductPage />},
      { path: 'cart', element: <CartPage />},
      { path: '/checkout', element: <CheckOutPage />},
      { path: 'order/:id', element: <OrderDetails />},
      { path: 'account',
        element: <AccountLayout />,
        children: [
          { index: true, element: <UserDashBoard />},
          { path: '/account/orders', element: <UserOrders />},
          { path: '/account/profile', element: <UserProfile />},
          { path: '/account/address', element: <UserAddress />},
          { path: '/account/card', element: <UserCard />},
        ]
      }
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'login', element: <Navigate to='/' />},
      {
        children: [
          { path: "products", element: <AdminProductList /> },
          { path: "products/add", element: <ProductForm title="Add" /> },
          { path: "products/:id", element: <ProductForm title="Edit"/> }
        ]
      },
    ]
  }
])


export default function AppRouter() {
  const {user} = useAuth()

  const finalRouter = !user?.id ? guestRouter : user.userType === 'ADMIN' ? adminRouter : userRouter

  
  return (
    <RouterProvider router={finalRouter} />
  )
}
