'use client'
import Header from '@/components/Header';
import { signIn,getProviders } from 'next-auth/react';
export default async function Signin() {
  const providers = await getProviders();
  return (
    <>
        <Header></Header>
        <div className='flex justify-center space-x-7 mt-20'>
          <img className='hidden object-cover rotate-6 md:inline-flex md:w-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pT-7_j48vXau5BSMC9cDaGOMZ14ecSEOTA&usqp=CAU" alt="instahgram image"></img>
          <div className=''>
            {
              Object.values(providers).map(provider => (
                <div className='flex flex-col items-center' key={provider.id}>
                  <img className='w-32 object-cover ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pT-7_j48vXau5BSMC9cDaGOMZ14ecSEOTA&usqp=CAU'></img>
                  <p className='text-sm italic my-10 text-center'>This app is created for learning purposes</p>
                  <button onClick={()=>signIn()} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}
