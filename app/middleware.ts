import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {

    const token: boolean = req.cookies.has("authToken");

    const securePaths = ['/projects'];

    const isProtected = securePaths.some(path => req.nextUrl.pathname.startsWith(path))

    if (isProtected && !token) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/projects/:path*"],
}