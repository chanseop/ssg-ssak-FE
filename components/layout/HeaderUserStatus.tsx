'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function HeaderUserStatus() {
  const [point,setPoint]=useState<number>(0);

  useEffect(()=>{
    const getPoint=()=>fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/log-in`)
    .then(response=>response.json)
    .then(data =>{
      console.log(data);
      // setPoint(data)
    })
    getPoint()
  },[])
  return (
    <>
      <div className='flex gap-1'>
        <Image
        src="/images/home/homebarcode.png"
        alt="바코드이미지"
        width={27}
        height={15}
        ></Image>
        53
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