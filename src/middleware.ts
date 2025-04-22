import { statusNotFound } from "./lib/responseHandlers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const response = NextResponse.next();
    const { pathname } = request.nextUrl;
    const startTime = Date.now();

    // Set custom headers
    requestHeaders.set("x-powered-by", "MGalaCyber Development");
    requestHeaders.delete("server")

    // Set startTime to headers request
    request.headers.set("x-start-time", startTime.toString());

    // If path `/api/` but endpoint not found, use 404 JSON
    if (pathname.startsWith('/api')) {
        const response = await fetch(request.url)
        if (response.status === 404) {
            return statusNotFound(request, {});
        }
    
        return NextResponse.next()
    }

    return response;
}