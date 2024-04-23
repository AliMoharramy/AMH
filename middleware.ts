import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/lib/data";
import { cookies } from "next/headers";
import { decrypt } from "./app/lib/data";

const protectedRoutes = ["/todo"];
const publicRoutes = ["/login", "/shop", "/"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoutes = publicRoutes.includes(path);

  const redirectResponse = NextResponse.redirect("localhost:3000/todo");
  redirectResponse.headers.set("x-middleware-cache", "no-cache");

  const cookie = cookies().get("session")?.value;
  let session;
  if (cookie !== undefined) {
    session = await decrypt(cookie);
  } else {
    session = undefined;
  }

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (
    isPublicRoutes &&
    session &&
    !request.nextUrl.pathname.startsWith("/todo")
  ) {
    return NextResponse.redirect(new URL("/todo", request.nextUrl));
  }
  return await updateSession(request);
  //return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
