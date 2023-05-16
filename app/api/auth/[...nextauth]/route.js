import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
export const authOptions = {
    providers:[    
        GoogleProvider({      
            clientId: process.env.Google_Client_ID,      
            clientSecret: process.env.Google_SECRET,     
            }),    // ...add more providers here  
        ],
        pages:{
            signIn: "/auth"
        },
        callbacks:{
            async session({session,token,user}){
                session.user.username = session.user.name.split(' ').join('').toLocaleLowerCase();
                session.user.uid = token.sub;
                return session;
            }
        }
  };
  
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }