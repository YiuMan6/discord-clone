import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth as clerkAuth} from '@clerk/nextjs/server';
 
const f = createUploadthing();
 
const handleAuth = () => {
    const userId = clerkAuth()
    if (!userId) throw new Error("Authentication failed")
    return { userId:userId.userId }
}
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  serverImage: f({ image: { maxFileSize: "4MB",maxFileCount:1 } })
    .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    messageFile: f(["image", "pdf"])
        .middleware(() => handleAuth())
    .onUploadComplete(()=>{})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;