import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getServerSession } from './server/auth'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const session = await getServerSession()
    if (!session?.user) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard',
}