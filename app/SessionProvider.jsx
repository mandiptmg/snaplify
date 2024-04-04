'use client'
import { SessionProvider } from 'next-auth/react'
const SessionProviders = ({ children }) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default SessionProviders
