import Linearbutton from '@/components/ui/button/Linearbutton'
import Link from 'next/link'
import React from 'react'

function SignupLoadMap() {
  const libefore="before:absolute before:left-[10px] before:top-[20%] before:w-[60px] before:h-[62px] before:bg-[url('/images/signup/join.png')] before:bg-no-repeat before:bg-[100%_auto]"

  return (
    <section className='pt-[56px]'>
      <div className='py-10 px-5'>
        <p className='text-[22px] leading-[34px] font-medium break-keep'>
          신세계포인트<br/>
          <strong>통합ID 회원가입</strong>
          으로<br/>
          다양한 혜택을 누리세요!<br/>
        </p>
      </div>
      <div className='pt-0 px-5 pb-10'>
        <ol className='mt-[-10px]'>
          <li className={`relative h-[92px] pl-[90px] border-b-1 border-b-[#e8e8e8] ${libefore}`}>
            <span className='inline-block align-top text-[12px] leading-3 pt-[36px] pr-[9px] '>STEP. 1</span>
            <span className='inline-block align-top text-[16px] leading-[26px] font-semibold pt-[30px]'>본인인증</span>
          </li>
          <li className={`relative h-[92px] pl-[90px] border-b-1 border-b-[#e8e8e8] ${libefore}`}>
            <span className='inline-block align-top text-[12px] leading-3 pt-[36px] pr-[9px]'>STEP. 2</span>
            <span className='inline-block align-top text-[16px] leading-[26px] font-semibold pt-[30px]'>약관동의</span>
          </li>
          <li className={`relative h-[92px] pl-[90px] border-b-1 border-b-[#e8e8e8] ${libefore}`}>
            <span className='inline-block align-top text-[12px] leading-3 pt-[36px] pr-[9px]'>STEP. 3</span>
            <span className='inline-block align-top text-[16px] leading-[26px] font-semibold pt-[30px]'>정보입력</span>
          </li>
          <li className={`relative h-[92px] pl-[90px] border-b-1 border-b-[#e8e8e8] ${libefore}`}>
            <span className='inline-block align-top text-[12px] leading-3 pt-[36px] pr-[9px]'>STEP. 4</span>
            <span className='inline-block align-top text-[16px] leading-[26px] font-semibold pt-[30px]'>가입완료</span>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default SignupLoadMap