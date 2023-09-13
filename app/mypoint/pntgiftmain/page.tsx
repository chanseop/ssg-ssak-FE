import Linearbutton from '@/components/ui/button/Linearbutton'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import React from 'react'

function page() {
  const plusLogo='before:bg-[url("/images/mypoint/plusLogo.jpg")] before:bg-cover before:bg-center before:bg-[length:7px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const minusLogo='before:bg-[url("/images/mypoint/minusLogo.jpg")] before:bg-auto before:bg-center before:bg-[length:16px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const noTxtLogo="after:absolute after:left-[50%] after:w-[48px] after:h-[48px] after:bg-[url('/images/mypoint/noTxtLogo.jpg')] after:bg-cover after:translate-x-[-50%] after:top-0"

  return (
    <section className='pt-[106px]'>
      <LoginRedirectModal/>
      {/* 선물하기 위에 말 */}
      <div className='p-4 pt-10'>
        <p className='text-[19px] font-semibold'>마음을 담아 <br /> <strong className='text-red-600'>신세계포인트를 선물</strong>하세요.
        </p>
        <p className='pt-2 text-[13px] text-[#767676]'>신세계포인트 회원끼리 주고받는 <br />가장 실속있는 마음의 선물! <br />친구나 가족, 소중한 사람에게 선물해 보세요.</p>
      </div>
      <div className='p-4'>
        <Linearbutton contents='선물하기' url='pntgiftmain/gift' />
      </div>

      {/* 선물내역 */}
      <div className='p-4'>
        <p className='text-[14px] font-bold pb-4'>포인트 선물 내역을 확인하세요.</p>
        {/* 조회기간 */}
        <div className='flex justify-between border h-[48px] border-white border-t-black'>
          <select className=' pt-1 h-[40px]' name="기간선택" id="giftselect">
            <option value="all">전체</option>
            <option value="recieve">받은선물</option>
            <option value="give">보낸선물</option>
          </select>
          
          {/* 적립 사용 */}
          <div className='point_total flex items-center bg-[#f8f8f8] h-9 px-2'>
            <p className={`mr-4 text-[#ea035c] text-[13px] font-semibold align-top pt-2 ${plusLogo}`}>
              <span>적립</span>
              <span>0P</span>
            </p>
            <p className={`mr-4 text-[13px] font-semibold align-top pt-2 ${minusLogo}`}>
              <span>사용</span>
              <span>0P</span>
            </p>
          </div>
        </div>

        <div className='py-[88px] text-center border border-white border-t-[#767676] '>
        <p className={`relative pt-16 text-[14px] text-[#767676] ${noTxtLogo}`}>포인트 선물 내역이 없습니다.</p>
        </div>
      </div>
    </section>
  )
}

export default page