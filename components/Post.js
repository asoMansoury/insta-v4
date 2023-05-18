'use client'
import { db } from '@/firebase';
import {HeartIcon,ChatBubbleBottomCenterTextIcon,BookmarkIcon, } from '@heroicons/react/24/outline'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import {useSession} from 'next-auth/react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

export default function Post({caption,img,username,userImg,id}) {
  const {data: session} = useSession();
  const [comment,setComment] = useState("");
  const [comments,setComments] = useState([]);
  useEffect(()=>{
    const unsubscribe =onSnapshot(
     query(collection(db,"posts",id,"comments"),orderBy("timestamp","desc")),(snapshot) =>{
      setComments(snapshot.docs)
    }
    )

  },[db,id])
  async function sendComment(event){
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db,"posts",id,"comments",),{
      comment:commentToSend,
      username:session.user.username,
      userImage:session.user.userimage,
      timestamp:serverTimestamp()
    })
  }
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
        <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>
          {caption}
        </p>
        {
          comments.length>0 && (
            <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
              {
                comments.map((comment,index)=>(
                  <div className='flex items-center space-x-2 mb-2'>
                    <img className='h-7 rounded-full object-cover ' src={comment.data().userImage} alt='user-image'></img>
                    <p className='font-semibold '>{comment.data().username}</p>
                    <p className='flex-1 truncate'>{comment.data().comment}</p>
                    <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
                  </div>
                ))
              }
            </div>
          )
        }

        {/**Post input box */}
        {
          session && (
            <form className="flex items-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <input 
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                className='border-none flex-1 focus:ring-0' type="text" placeholder="Enter your comment"></input>
            <button type="submit" onClick={sendComment} disabled={!comment.trim()} className='text-blue-400 font-bold disabled:text-blue-200'>Post</button>
        </form>
          )
        }

    </div>
  )
}
