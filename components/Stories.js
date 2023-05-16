"use client"
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import Story from './Story';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  const {data: session} = useSession();
  useEffect(() => {
    const storyUsers = minifaker.array(20,(i)=>(
        {
            username: minifaker.username({locale:'en'}),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id:i
        }
    ));
    setStoryUsers(storyUsers);
  }, []);
  return (<div className='flex space-x-2 p-6 select-none bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
    {session &&(
      <Story key={session.user.uid} username={session.user.username} img={session.user.image} isUser="true"></Story>
    )}
    {storyUsers.map((user)=>(
        <Story key={user.id} username={user.username} img={user.img}></Story>
    ))}
  </div>)
}
