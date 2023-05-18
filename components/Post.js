import {HeartIcon,ChatBubbleBottomCenterTextIcon,BookmarkIcon, } from '@heroicons/react/24/outline'
import {useSession} from 'next-auth/react';

export default function Post({caption,img,username,userImg,id}) {
  const {data: session} = useSession();
  return (
    <div className='bg-white my-7'>
        {/**Post Header */}
        <div className="flex items-center p-5 border rounded-md">
            <img src={userImg} alt={username} className="h-12 rounded-full object-cover border p-1 mr-3"></img>
            <p className='font-bold flex-1'>{username}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/></svg>
        </div>

        {/** */}
        <img className='object-cover w-full' src={img}></img>

        {/**Post Buttons */}
        {
          session&& (
            <div className='flex justify-between p-x-4 pt-4'>
            <div className='flex space-x-4'>
              <HeartIcon className='btn'></HeartIcon>
              <ChatBubbleBottomCenterTextIcon className='btn'></ChatBubbleBottomCenterTextIcon>
            </div>
            <BookmarkIcon className='btn'></BookmarkIcon>
          </div>
          )
        }


        {/**Post comments */}
        <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

        {/**Post input box */}
        {
          session && (
            <form className="flex items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <input className='border-none flex-1 focus:ring-0' type="text" placeholder="Enter your comment"></input>
            <button className='text-blue-400 font-bold'>Post</button>
        </form>
          )
        }

    </div>
  )
}
