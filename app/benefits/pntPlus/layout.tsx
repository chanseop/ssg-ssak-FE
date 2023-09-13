'use client'

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function ServiceAgreeLayout({children}:
  {children: React.ReactNode},) {
    
      const pathname=usePathname()

  return (
  <div className="mt-[105px]">

      <div role="tablist" className='flex flex-row h-[44px] basis-1/2 text-center text-[#505050] text-[14px]'>

          <div role="tab" className={pathname==='/benefits/pntPlus/attend' ?`basis-1/2 text-center text-[14px] font-semibold text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
          <Link href="/benefits/pntPlus/attend">
            출석체크
            </Link>
          </div>

          <div role="tab" className={pathname==='/benefits/pntPlus/roulette' ?`basis-1/2 text-center text-[14px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6 font-semibold` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
          <Link href='/benefits/pntPlus/roulette'>
            럭키룰렛
            </Link>
          </div>

    </div>

    {children}

  </div>
  )
}