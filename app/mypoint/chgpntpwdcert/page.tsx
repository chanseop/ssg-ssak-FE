import CertForm from '@/components/ui/cert/CertForm'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import React from 'react'

function page() {
  return (
    <section className='pt-[106px]'>
      <LoginRedirectModal/>
      <div className='p-4 py-10'>
        <p className='text-[22px] font-bold pb-3'> 포인트 비밀번호 변경</p>
        <p className='text-[13px] font-semibold text-slate-500'> 비밀번호 변경을 위해 본인인증을 진해하고 있습니다.<br />자주 사용하는 인증수단을 선택해주세요.</p>
      </div>

      <CertForm types={'pntpwdcert'}/>
    </section>
  )
}

export default page