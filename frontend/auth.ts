import { PrismaClient } from "@prisma/client";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, openAPI } from "better-auth/plugins";
import { sendEmail } from "./actions/email";

const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
plugins:[openAPI()],   // api/auth/reference 
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