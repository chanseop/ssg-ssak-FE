'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react';

function HeaderUserStatus({point}:{point:number}) {

  
  return (
    <>
      <div className='flex gap-1'>
        <Image
        src="/images/home/homebarcode.png"
        alt="바코드이미지"
        width={27}
        height={15}
        ></Image>
        {point}
        <Image
        src="https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png"
        alt="포인트로고이미지"
        width={25}
        height={22}
        ></Image>
      </div>
      
      
    </>
  )
}

export default HeaderUserStatus