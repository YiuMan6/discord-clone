import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const initProfile = async() => { 
    const user = await currentUser()


    if (!user) { 
        return redirectToSignIn()
    }

    // match the data with logged data and data base. if found which means that user is registered 
    const profile = await db.profile.findUnique({
        where: {
            userId:user.id
        }
    })


    if (profile) {
        return profile
    }

    // // othwise create a new profile 
    const newProfile = await db.profile?.create({
        data: {
            userId: user.id,
            name: `${user.fullName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        }
    })
    return newProfile
}