'use client'

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

//mamber/changePwd로 이어짐

export default function ServiceAgreeLayout({children}:
  {children: React.ReactNode},) {
    
      const pathname=usePathname()

  return (
  <div className='mt-[105px]'>

      <div className='px-[20px] py-[40px]'>
          <p className='text-[25px] font-semibold'>본인인증</p>
          <p className='text-[13px] pt-[8px] font-semibold text-[#767676]'>
            개인정보 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요.
          </p>
      </div>

      <div className='flex mx-[20px] basis-1/2'>
        <ul className='flex'>
          <li className='basis-1/2 border h-[88px] w-[171px] rounded-[6px] pt-[53px] text-center text-[12px] font-semibold'>
            <Link href="/myinfo/changepwd">휴대폰인증</Link></li>
          <li className='basis-1/2 border h-[88px] w-[171px] rounded-[6px] pt-[53px] text-center text-[12px] font-semibold'>
          <Link href="/myinfo/changepwd/cardauth">카드인증</Link></li>
        </ul>
      </div>

    {children}

      <div role='notice box' className='px-[20px] pt-[32px] pb-[80px]'>
        <h3 className='text-[14px] font-semibold pb-[8px]'>[유의사항]</h3>
        <li className='text-[12px] text-[#767676]'>본인 명의의 인증 수단 정보를 정확히 입력해 주세요.</li>
        <li className='text-[12px] text-[#767676] mt-[4px]'>법인명의 휴대전화(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</li>
        <li className='text-[12px] text-[#767676] mt-[4px]'>인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.</li>
      </div>

  </div>

  )
}