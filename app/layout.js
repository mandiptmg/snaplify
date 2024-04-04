import './globals.css'
import Provider from './Provider'
import SessionProviders from './SessionProvider'

export const metadata = {
  title: ' Snaplify',
  description: 'Generated by mandip',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={'bg-white/80'}>
        <SessionProviders>
          {' '}
          <Provider>{children}</Provider>
        </SessionProviders>
      </body>
    </html>
  )
}
