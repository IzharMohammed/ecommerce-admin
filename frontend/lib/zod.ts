import { z } from "zod";

const getNameSchema = () =>
    z.string({ required_error: "Name is required" })
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters")

const getEmailSchema = () =>
    z.string({ required_error: "Email is required" }).min(1, "Email is required").email()

const getpasswordSchema = (type: "password" | "confirmPassword") =>
    z.string({ required_error: `${type}: is required` })
        .min(8, `${type} must be atleast 8 characters`)
        .max(32, `${type} can not exceed 32 characters`);

export const signUpSchema = z.object({
    name: getNameSchema(),
    email: getEmailSchema(),
    password: getpasswordSchema("password"),
    confirmPassword: getpasswordSchema("confirmPassword")
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    })

export const signInSchema = z.object({
    email: getEmailSchema(),
    password: getpasswordSchema("password"),
})

export const forgotPasswordSchema = z.object({
    email: getEmailSchema()
})

export const resetPasswordSchema = z.object({
    password: getpasswordSchema("password"),
    confirmPassword: getpasswordSchema("confirmPassword"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    })