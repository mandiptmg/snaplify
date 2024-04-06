'use client'
import { AppProvider } from '@/context/Context'
import { SessionProvider } from 'next-auth/react'
const Provider = ({ children }) => {
  return (
    <div>
      <AppProvider>
        <SessionProvider>{children}</SessionProvider>
      </AppProvider>
    </div>
  )
}

export default Provider
