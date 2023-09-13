'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'

function LoginRedirectModal() {
  const session=useSession();


  return (
    <>
    {
      session.status==="authenticated"
      ?
      null
      :
      redirect(`/login`)
    }
    </>
  )
}

export default LoginRedirectModal