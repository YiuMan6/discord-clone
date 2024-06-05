import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// this file no need to to protected
const publicRouteList = createRouteMatcher(['/sign-in', '/sign-up','/api/uploadthing']);



export default clerkMiddleware((auth, request) => {
  if(!publicRouteList(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}