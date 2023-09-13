import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import React from 'react'

function pnttip() {
  return (
    <>
      <div className='mt-[105px] px-[20px] py-[40px]'>
        <LoginRedirectModal/>
        <p className='text-[18px] font-semibold'><strong className='text-[18px] text-[#ea035c] font-semibold'>포인트 적립</strong>도 스마트하게!</p>
        <p className='pt-[8px] text-[13px] text-gray-500'>보기만 해도 쌓이는 초간단 꿀팁을
          <br />
          지금 바로 확인하세요.
        </p>
      </div>

      <div  className='btn_box px-[20px] pb-[40px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인하기
          </button>
        </div>
      </div>

    </>
  )
}

export default pnttip