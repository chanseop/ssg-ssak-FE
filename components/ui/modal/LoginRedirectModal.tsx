'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

function LoginRedirectModal() {
  const {status}=useSession();
  const router = useRouter();
  const [timeoutID ,setTimeID]=useState<any>()

  // console.log('timeoutID',timeoutID)
  useEffect(()=>{
    if(status === 'authenticated') {
      clearTimeout(timeoutID)
      // console.log('123123123');
      
      return
    } else {
      // console.log('@@@@@@@@@');
      setTimeID(setTimeout(()=>{router.push("/login")},1000))
    }
  },[status])
    

  return (
    <>
    </>
  )
}

export default LoginRedirectModal