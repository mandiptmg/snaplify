import './globals.css'
import Provider from './Provider'

export const metadata = {
  title: ' Snaplify',
  description: 'Generated by mandip',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={'bg-white/80'}>
          {' '}
          <Provider>{children}</Provider>
      </body>
    </html>
  )
}
