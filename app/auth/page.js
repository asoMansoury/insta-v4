import React from 'react'
import {signIn,getServerSession} from 'next-auth';
import Signin from './signin';

export default function page() {


  return (
    <Signin ></Signin>
  )
}
