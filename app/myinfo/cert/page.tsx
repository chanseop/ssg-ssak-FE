import React from 'react'
import CertForm from '@/components/ui/cert/CertForm'

function cert() {
  return (
    <>
    <main className='mt-[106px]'>
      <div className='px-[20px] py-[40px]'>
          <p className='text-[25px] font-semibold'>본인인증</p>
          <p className='text-[13px] pt-[8px] font-semibold text-[#767676]'>
            개인정보 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는 인증수단을 선택해주세요.
          </p>
      </div>
        <CertForm types={"/myinfo/cert"}/>

    </main>
    </>
  )
}
//modify로 이어짐
export default cert