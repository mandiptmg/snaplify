import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const session = await getSession({ req: request })

  // If session exists, redirect authenticated users away from login and signup pages
  if (
    session &&
    ['/login', '/signup'].includes(request.pathname.toLowerCase())
  ) {
    return NextResponse.redirect('/')
  }

  // Allow the request to proceed
  return NextResponse.next()
}
