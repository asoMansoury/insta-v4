"use client"
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import Story from './Story';
import { useEffect, useState } from 'react';
export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20,(i)=>(
        {
            username: minifaker.username({locale:'en'}),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id:i
        }
    ));
    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return (<div>
    {storyUsers.map((user)=>(
        <Story key={user.id} username={user.username} img={user.img}></Story>
    ))}
  </div>)
}
