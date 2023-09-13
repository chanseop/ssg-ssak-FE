import React from 'react'
import ClubService from '@/components/pages/spoint/ClubService'

function club() {
  return (
    <>
    <main className='mt-[106px]'>
      <div className='px-[20px] py-[40px]'>
        <p className='text-[19px] font-semibold'>
        <strong className='font-550 text-[#04857f] font-semibold'>클럽 서비스</strong>
          에 가입하고
        <br />
          다양한 혜택을 받아보세요.
        </p>
        
        <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
          고객님의 취향에 따른 맞춤 클럽 혜택으로
        <br />
          더욱 알뜰하고 편리한 서비스를 경험하실 수 있습니다.
        </p>
      </div>

      <h3 className='text-[17px] font-semibold pt-[40px] px-[20px] pb-[16px]'>이런 클럽은 어때요?</h3>

      <ClubService />

    </main>
    </>
  )
}

export default club