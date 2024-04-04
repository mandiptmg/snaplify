'use client'
import { AppProvider } from '@/context/Context'
const Provider = ({ children }) => {
  return (
    <div>
      <AppProvider>{children}</AppProvider>
    </div>
  )
}

export default Provider
