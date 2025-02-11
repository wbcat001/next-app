// import { PrismaAdapter } from "@auth/prisma-adapter"
// import bcrypt from 'bcrypt'
// import {NextAuthConfig} from 'next-auth'
// import Credentials from 'next-auth/providers/credentials'
// import GitHubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'


// import prisma from '@/lib/prisma'


// const options: NextAuthConfig= {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         Credentials({
//         id: "credentials",
//         name: "Credentials",
//         credentials:{
//             email: {label: "Email", type: "text"},
//             password: {label: "Password", type: "password"}
//         },
        
        
//         async authorize(credentials) {
        
//             if (!credentials.email || !credentials.password){
//                 throw new Error("Missing credentials")
        
//             }
            
//             const user = await prisma.user.findUnique({
//                 where: {
//                     email: credentials.email as string
//                 }
//             })
            
//             if (!user || !user.hashedpassword){
//                 throw new Error("Email does not exist")
//             }

//             const isCorrectPassword = await bcrypt.compare(credentials.password as string, user.hashedpassword )

//             if (!isCorrectPassword){
//                 throw new Error("Password is incorrect")
//             }

//             return user;
//         },
//         }),

//         GitHubProvider({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET,
//         }),
//         GoogleProvider({
//         clientId: process.env.GOOGLE_ID,
//         clientSecret: process.env.GOOGLE_SECRET,
//         }),

        

//     ],
//     pages: {
//         signIn: "/auth/signin",
//     },
//     debug: process.env.NODE_ENV === "development",
//     session: {
//         strategy: "jwt",

//     },
    

//     secret: process.env.NEXTAUTH_SECRET,
//     callbacks: {
//         async jwt({token, user, account, profile}){
//             if(user){
//                 token.user = user;
//                 const u = user as any;
//                 token.role = u.role;
//             }

//             if(account){
//                 token.acccesTokeen = account.access_token;
//             }
//             return token;
//         },

//         async session({session, user, token}){
//             token.accessToken
//             return {
//                 ...session,
//                 user:{
//                     ...session.user,
//                     role: token.role,
//                 }
//             }
//         }
//     }
// }

// export default options;