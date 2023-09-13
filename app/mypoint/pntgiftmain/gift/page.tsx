import Blackbutton from '@/components/ui/button/Blackbutton'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import React from 'react'

function page() {
  return (
    <section className='pt-[106px]'>
      <LoginRedirectModal/>
      {/* 포인트 선물 위에 말 */}
      <div className='p-4 pt-10'>
        <p className='text-[19px] font-semibold'>선물하기
        </p>
        <p className='pt-2 text-[13px] text-[#767676]'>신세계포인트를 선물 받으실 분의 <br />정보를 정확하게 입력해 주세요.</p>
      </div>
      
      {/* 선물할 주소록 입력창 */}
      <div className='p-4'>
        <div className='flex justify-between gap-2'>
          <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-[90%]'>
            <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text"   placeholder='-없이 휴대폰 번호를 입력해 주세요.'/>
          </div>
          <button className='rounded-lg w-20 h-11 text-center border mt-[10px] text-[13px] font-semibold border-[#EAEAEA]' >
            주소록
          </button>
        </div>
        <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full'>
          <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text"   placeholder='실명을 정확하게 입력해 주세요.'/>
        </div>
      </div>
      {/* 버튼 */}
      <div className='p-4'>
        <Blackbutton contents='조회하기' url='mypoint/pntgiftmain/gift'/>
      </div>
      
    </section>
  )
}

export default page