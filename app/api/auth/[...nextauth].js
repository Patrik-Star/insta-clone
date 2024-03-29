import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin"
  }

}
export default NextAuth(authOptions)


// theme: {
//   logo: 'https://links.papareact.com/jjm',
//   brandColor: '#F13287',
//   colorScheme: 'auto'
// }
