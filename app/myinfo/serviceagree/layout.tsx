'use client'

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function ServiceAgreeLayout({children}:
  {children: React.ReactNode},) {
    
      const pathname=usePathname()

  return (
  <div>

    <div className='mt-[109px] px-[20px] py-[40px] border-t'>
        <p className='text-[18px] font-semibold leading-9'>서비스 동의 관리</p>
        <p className='text-[13px] mt-[8px] text-gray-500'>신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다.</p>
    </div>

      <div role="tablist" className='flex flex-row h-[44px] basis-1/2 text-center  text-[#505050] font-semibold text-[13px] pt-2.5'>

          <div role="tab" className={pathname==='/myinfo/serviceagree' ?`basis-1/2 text-center text-[13px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8]` : `basis-1/2 text-center text-[#505050] text-[13px] pt-2.5`}>
          <Link href="/myinfo/serviceagree">
            서비스 동의
            </Link>
          </div>

          <div role="tab" className={pathname==='/myinfo/serviceagree/clubagree' ?`basis-1/2 text-center text-[13px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8]` : `basis-1/2 text-center text-[#505050] text-[13px] pt-2.5`}>
          <Link href='/myinfo/serviceagree/clubagree'>
            클럽 동의
            </Link>
          </div>

    </div>

    {children}

  </div>
  )
}