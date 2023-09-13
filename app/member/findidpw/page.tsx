'use client'
import CertForm from '@/components/ui/cert/CertForm'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='pt-[56px]'>
      <div className='py-10 px-5'>
        <div className='relative'>
          <p className='text-[23px] leading-8 font-medium'>
            <strong>아이디</strong>가
            <br/>
            생각나지 않으세요?
          </p>
          <p className='text-[13px] leading-5 mt-2 text-[#767676]'>본인인증 후 아이디를 확인하실 수 있습니다.</p>
        </div>
      </div>

      <CertForm types={"/member/findidresult"}/>
      
      <div className='mt-10 relative py-5 px-7 border-[#e8e8e8] border-[1px] mx-5 mb-20 shadow-md rounded-lg'>
        <p className='text-[13px] leading-5 text-[#767676]'>
          <strong className='text-[14px] leading-6 text-black'>비밀번호가 생각나지 않으세요?</strong>
          <br/>
          본인인증 후 비밀번호를 변경하실 수 있습니다. 
        </p>
        <Link className='mt-4 inline-flex items-center text-[14px]' href={"/member/findpw"}>비밀번호 찾기 {">"}</Link>
      </div>
    </section>
  )
}

export default page