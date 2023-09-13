'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'

function myevent() {

  const pathname=usePathname()

  return (
  <>

    <div role="tablist" className='flex flex-row mt-[110px] h-[44px] basis-1/2 text-center text-[#505050] text-[14px]'>
      <LoginRedirectModal/>
      <div role="tab" className={pathname==='/benefits/myevent' ?`basis-1/2 text-center text-[14px] font-semibold text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
        <Link href="/benefits/myevent">
          참여한 이벤트(0)
        </Link>
      </div>

      <div role="tab" className={pathname==='/benefits/winevent' ?`basis-1/2 text-center text-[14px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6 font-semibold` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
        <Link href='/benefits/winevent'>
          당첨확인(0)
        </Link>
      </div>
    </div>

    <div className='pt-[16px] pb-[60px]'>
      <div className='py-[40px] mx-[40px] mb-[60px] border border-dashed'>
        <p className='pt-[64px] text-center'>참여한 이벤트가 없습니다.</p>
      </div>
    </div>

    </>
  )
}

export default myevent