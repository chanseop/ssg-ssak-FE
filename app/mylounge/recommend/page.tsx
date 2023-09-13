import React from 'react'
import Image from 'next/image'

function recommend() {

  const noTxtLogo="after:absolute after:left-[50%] after:w-[48px] after:h-[48px] after:bg-[url('/images/mypoint/noTxtLogo.jpg')] after:bg-cover after:translate-x-[-50%] after:top-0"

  return (
    <>
    <div className='mt-[105px] text-[20px] px-[20px] py-[40px]'>
      <p>
      <strong className='txt_line0 pk relative z-1 align-top pl-[1px] pr-[4px] 
      after:bg-[#fed6e8] after:content:"" after:inline-block after:absolute after:w-full after:h-[15px] after:z-[-1] after:bottom-0 after:left-0'>김진성</strong>
      고객님을 위한
      <br />
      추천 서비스!
      </p>
    </div>
    <div className='pb-[40px]'>
      <div className='py-[40px] mx-[20px] mb-[60px] border border-dashed'>
      <div className='text-[#767676] align-middle text-center px-0 text-[12px] font-semibold break-keep'>
        <p className={`relative pt-16 ${noTxtLogo}`}>
        추천 서비스 정보가 없습니다.
        </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default recommend