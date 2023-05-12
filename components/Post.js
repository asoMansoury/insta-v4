import {HeartIcon,ChatBubbleBottomCenterTextIcon,BookmarkIcon} from '@heroicons/react/24/outline'
export default function Post({caption,img,username,userImg,id}) {
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
        <div className='flex justify-between p-x-4 pt-4'>
          <div className='flex space-x-4'>
            <HeartIcon className='btn'></HeartIcon>
            <ChatBubbleBottomCenterTextIcon className='btn'></ChatBubbleBottomCenterTextIcon>
          </div>
          <BookmarkIcon className='btn'></BookmarkIcon>
        </div>
    </div>
  )
}
