import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    
    emailAndPassword:{
        enabled: true,
        requireEmailVerification:true
    },
    emailVerification:{
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async({user,token})=>{
            const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
            await sendEmail({
                to: user.email,
                subject: "Verify youur email address",
                text:`Click the link to verify ur email:${verificationUrl}`
            })
        }
    }
} satisfies BetterAuthOptions);