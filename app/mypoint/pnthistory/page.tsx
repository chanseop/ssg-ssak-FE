import React from 'react'
import Card from '@/components/pages/mypoint/Card'
import PointList from '@/components/pages/mypoint/PointList'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'

async function pntHistory() {
  const receiptsEventLogo="before:bg-[url('/images/mypoint/receiptEventLogo.png')] before:absolute before:left-6 before:mt-[-20px] before:bg-no-repeat before:w-10 before:h-10 before:bg-cover before:top-1/2"
  

  return (
    <section className='pt-[106px]'>
      <LoginRedirectModal/>
      {/* 포인트 카드 형식 */}
      <Card types={"pnthistory"}/>
      {/* 신세계포인트 영수증 한 번에 모아보기 배너 */}
      <div className='collect_receipts_banner bg-[#fcebf1] h-[65px] relative'>
        <div className={`in_box pt-[12px] pl-[65px] my-0 mx-6 ${receiptsEventLogo} `}>
          <p className='text-[13px] font-semibold text-[#d9044b]'>내가 어디서 뭘 샀더라</p>
          <button className='text-xs font-semibold'>신세계포인트 영수증 한 번에 모아보기 {">"}</button>
        </div>
      </div>
      {/* 포인트 내역 리스트 */}
      <PointList />
    </section>
    
  )
}

export default pntHistory