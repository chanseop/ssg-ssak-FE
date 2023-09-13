'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import Benecoupon from '@/components/pages/benefits/Benecoupon'



function mycoupon() {

  const pathname=usePathname()

  return (

  <>
    <div role="tablist" className='flex flex-row mt-[110px] h-[44px] basis-1/2 text-center text-[#505050] text-[14px]'>
      <LoginRedirectModal/>
      <div role="tab" className={pathname==='/benefits/mycoupon' ?`basis-1/2 text-center text-[14px] font-semibold text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
        <Link href="/benefits/mycoupon">
          사용가능 쿠폰 (0)
        </Link>
      </div>

      <div role="tab" className={pathname==='/benefits/endcoupon' ?`basis-1/2 text-center text-[14px] text-[#d9044b] pt-2.5 border-b border-b-[#d9044b] bg-[#fff3f8] leading-6 font-semibold` : `basis-1/2 text-center text-[#505050] text-[14px] pt-2.5 leading-6`}>
        <Link href='/benefits/endcoupon'>
          사용완료/기간만료 쿠폰 (0)
        </Link>
      </div>

  </div>

  <Benecoupon />

    </>
  )
}

export default mycoupon