
import Linearbutton from '@/components/ui/button/Linearbutton'
import React from 'react'

function FindPwResult() {
  return (
    <section className='pt-[76px]'>
      <div className='py-10 px-5'>
        <div className='text-[20px] leading-7 break-keep'>
          <strong>새로운 비밀번호</strong>를 입력해주세요.
          <br/>
          <p className='text-[13px] pt-2 text-[#767676]'>비밀번호 입력 시 아래의 유의사항을 꼭 확인해 주세요.</p>
        </div>
      </div>
      <div className='pt-0 px-5 pb-[60px]'>
        <div className='mb-10'>
          <div className='form_box pb-4'>
            <p className='pb-2 text-[13px] left-5'>비밀번호</p>
            <div>
              <input type="text" minLength={8} placeholder='비밀번호를 입력해주세요.' className='text-[13px] font-semibold text-[#767676] border w-full h-10 rounded-lg pl-3' />
            </div>
          </div>
          <div className='form_box pb-4'>
            <p className='pb-2 text-[13px] left-5'>비밀번호 확인</p>
            <div>
              <input type="text" minLength={8} placeholder='입력하신 비밀번호를 다시 한번 입력해주세요.' className='text-[13px] font-semibold text-[#767676] border w-full h-10 rounded-lg pl-3' />
            </div>
          </div>
        </div>

        <Linearbutton contents='확인' url={"/"}/>
      </div>
    </section>
  )
}

export default FindPwResult