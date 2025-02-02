import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        const callbackUrl = encodeURIComponent(req.nextUrl.pathname); // Save last visited URL
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url));
    }

    return NextResponse.next();
}

// Apply middleware to protected routes
export const config = {
    matcher: ["/repos", "/dashboard"], // Add any protected pages
};
