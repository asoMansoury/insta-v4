import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [    
        GoogleProvider({      
            clientId: process.env.Google_Client_ID,      
            clientSecret: process.env.Google_SECRET,     
            }),    // ...add more providers here  
        ],
})

export { handler as GET, handler as POST }