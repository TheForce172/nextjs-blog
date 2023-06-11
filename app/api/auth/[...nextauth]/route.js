import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from '@/lib/mongodb';
import { checkPass } from '@/lib/bcrypt'
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
                // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object
            credentials: {
                username: { label: "Username", type: "text", placeholder: "User" },
                password: { label: "Password", type: "password" }
              },
            async authorize(credentials, req) {
             // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
            const client = await clientPromise;
            const db = client.db("TheForcesDen");
            const query = {"Username": credentials.username}
            const res = await db.collection("User").find(query);
            console.log(typeof res)
            if (res) {
            if (res != {}) {
                return null
            } else if (res.length() > 1) {
                throw Error(`Multiple users have the same username, this should not be possible.\n username is ${credentials.username}`)
            } else {
                const user = res[0]
                if (checkPass(credentials.password, user.password)) {
                    return { username : user.username, name: user.name}
                } else {
                    return false
                }
            }
        }
        }
    })
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: '/login',
      },
})

export { handler as GET, handler as POST }