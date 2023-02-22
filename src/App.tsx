// import { Sparkle } from 'phosphor-react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './styles/app.css'

export function App() {
  return <RouterProvider router={router} />
}
