'use client'
import Image from "next/image";
import {MagnifyingGlassIcon,PlusCircleIcon} from '@heroicons/react/24/outline'
import {HomeIcon} from '@heroicons/react/24/solid';
import {useSession,signOut,signIn} from 'next-auth/react';
export default function Header() {
    const {data: session} = useSession();

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                    layout="fill"
                    className="object-contain"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU"
                ></Image>
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image
                    layout="fill"
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                ></Image>
            </div>

            {/** Middle */}
            <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                    <MagnifyingGlassIcon className="h-5 text-gray-500"></MagnifyingGlassIcon>
                </div>
                <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"></input>
            </div>

            {/** Right side */}
            <div className="flex space-x-4 items-center">
                <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 "></HomeIcon>
                {session? (
                    <>
                        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 "></PlusCircleIcon>
                        <img
                            onClick={signOut}  
                            src={session.user.image} alt="" className="h-10 rounded-full cursor-pointer"></img>
                    </>
                ):(
                    <button onClick={signIn}>Sign In</button>
                )}

            </div>
        </div>
        </div>
  )
}
