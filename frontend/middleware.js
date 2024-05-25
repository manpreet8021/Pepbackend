import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.cookies.get('PEPRELIER-AUTH')?.value
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if(!auth){
      return NextResponse.redirect(new URL('/login' , request.url))
    }
  }

  if(request.nextUrl.pathname === '/admin') {
    return NextResponse.rewrite(new URL('/' , request.url))
  }

  if(request.nextUrl.pathname === '/user' || request.nextUrl.pathname === '/booking') {
    if(!auth) {
      return NextResponse.redirect(new URL('/login' , request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/signup', '/user', '/booking']
}