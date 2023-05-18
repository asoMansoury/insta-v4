'use client';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from "./Post"
import { useEffect, useState } from "react";
import { db } from "@/firebase";

export default function Posts() {
  const posts = [
    {
        id: 1,
        username: 'codewinders',
        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
        img:"https://images.unsplash.com/photo-1675434704167-1038d492c86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        caption:"Thanks for your interest in coding, I hope you enjoyed it!"
    },
    {
        id: 2,
        username: 'asomansour',
        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
        img:"https://images.unsplash.com/photo-1683839380874-bb8dcb29172e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        caption:"It's a great and pretty nature scene I've seen in my life!"
    }
  ]
  const [postsFirebase,setPostsFirebase] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db,"posts"),orderBy("timestamp","desc")),(snapshotEquals) => {
        setPostsFirebase(snapshotEquals.docs);
      }
    );
  }, [])
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id}
                  id={post.id}
                  username={post.username}
                  userImg={post.userImage}
                  caption={post.caption}
                  img={post.img}
                  ></Post>
        ))}
    </div>
  )
}
