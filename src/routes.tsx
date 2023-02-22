import { createBrowserRouter } from 'react-router-dom'
import { Login } from './components/Login'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Status } from './pages/Status'
import { Timeline } from './pages/Timeline'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/home',
        element: <Timeline />,
      },

      {
        path: '/status',
        element: <Status />,
      },
    ],
  },
])
