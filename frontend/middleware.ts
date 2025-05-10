import { betterFetch } from "@better-fetch/fetch";
import { NextRequest, NextResponse } from "next/server";
import type { Session } from "@/auth";

const authRoutes = ["/sign-in", "/sign-up"];
const passwordRoutes = ["/forgot-password", "/reset-password"];
const publicRoutes = [...authRoutes, ...passwordRoutes];
const adminRoutes = ["/admin"];

export default async function authMiddleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const isAuthRoute = authRoutes.includes(pathName);
    const isPasswordRoute = passwordRoutes.includes(pathName);
    const isPublicRoute = publicRoutes.includes(pathName);
    const isAdminRoute = adminRoutes.includes(pathName);

    try {
        // Fetch the current user session using the request cookies
        const { data: session } = await betterFetch<Session>(
            "/api/auth/get-session",
            {
                baseURL: process.env.BETTER_AUTH_URL,
                headers: {
                    //get the cookie from the request
                    cookie: request.headers.get("cookie") || "",
                },
            },
        );
        // If user is logged in and tries to access auth/password routes, redirect to home
        if (session?.user && (isAuthRoute || isPasswordRoute)) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        // If no user session and trying to access non-public route, redirect to sign-in
        if (!session?.user && (!publicRoutes)) {
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }

        // Special handling for reset-password route
        if (pathName === "/reset-password") {
            // Get token from URL query parameters
            const token = request.nextUrl.searchParams.get("token");

            // If no token provided, redirect to forgot-password page
            if (!token) {
                return NextResponse.redirect(new URL("/forgot-password", request.url));
            }
        }

        // if user is not admin should not acces the users table 
        if (isAdminRoute && session?.user.role !== "admin") {
            return NextResponse.redirect(new URL("/", request.url));
        }

        // Continue to the requested page if all checks pass
        return NextResponse.next();

    } catch (error) {

        console.error("Middleware error:", error);

        // If error occurs on public route, still allow access
        if (isPublicRoute) {
            return NextResponse.next();
        }

        // For any other error, redirect to sign-in page
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
}

export const config = {
    // Matches all paths except:
    // - API routes
    // - Next.js static files
    // - Next.js image optimization
    // - Favicon
    // - Various image file extensions
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};