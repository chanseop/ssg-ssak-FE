import Linearbutton from '@/components/ui/button/Linearbutton'
import Redbutton from '@/components/ui/button/Redbutton'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import React from 'react'

function Convertpntlist() {
  return (
    <section className='pt-[106px]'>
      <LoginRedirectModal/>
      <div className='p-4 py-10'>
        <p className='text-[19px] font-medium pb-3'> 여기저기 흩어져 있는 포인트를 <br /> 신세계포인트로 <strong className='text-red-500'>한 곳에 모아보세요.</strong> </p>
        <p className='text-[13px] font-semibold text-slate-500'> 알뜰하게 적립한 포인트를 모두 모아<br />자주 사용하는 포인트로 전환해 보세요.</p>
      </div>
      {/* 포인트 조회 방법 설명 사진 */}
      <div 
      className=' relative 
      before:absolute before:top-[50px] before:w-[18px] before:h-[14px] before:bg-[url("/images/mypoint/allow.png")] before:bg-no-repeat before:bg-[100%_auto] before:left-[120px] 
      after:absolute after:top-[50px] after:w-[18px] after:h-[14px] after:bg-[url("/images/mypoint/allow.png")] after:bg-no-repeat after:bg-[100%_auto] after:right-[120px] 
      '>
        <ol className='flex p-4 px-8 justify-between'>
          <li className='w-20 h-[103px] before:bg-[url("https://m.shinsegaepoint.com/img/switch_step_icon.5f917029.png")] before:mb-2 before:w-[80px] before:h-[80px] before:block before:bg-[245px_auto] before:bg-no-repeat'>
            <span className='text-[12px] text-red-600 block text-center'>포인트 선택</span>
          </li>
          <li className='w-20 h-[103px] before:bg-[url("https://m.shinsegaepoint.com/img/switch_step_icon.5f917029.png")] before:mb-2 before:w-[80px] before:h-[80px] before:block before:bg-[245px_auto] before:bg-top before:bg-no-repeat'>
            <span className='text-[12px] text-red-600 block text-center'>포인트 입력</span>
          </li>
          <li className='w-20 h-[103px] before:bg-[url("https://m.shinsegaepoint.com/img/switch_step_icon.5f917029.png")] before:mb-2 before:w-[80px] before:h-[80px] before:block before:bg-[245px_auto] before:bg-right-top before:bg-no-repeat'>
            <span className='text-[12px] text-red-600 block text-center'>포인트 전환</span>
          </li>
        </ol>
      </div>

      <div className='p-4'>
        <Redbutton contents='한 번에 조회하기' url="mypoint/converpntlist"/>
      </div>

      <div className='py-2'>
        <div className='flex relative py-3 px-3 gap-2 border border-y-[#767676] border-opacity-25'>
          <p className='bg-[url("/images/mypoint/samsungcard.png")] w-[50px] h-[60px] bg-no-repeat bg-[98%_auto] '></p>
          <p className='pt-3 font-semibold'>삼성카드 포인트</p>
          <span className='absolute top-7 right-5 text-[12px] text-[#767676] font-semibold'> 조회하기{'>'}</span>
        </div>
        <div className='flex relative py-3 px-3 gap-2 border border-y-[#767676] border-opacity-25'>
          <p className='bg-[url("/images/mypoint/okcashback.png")] w-[50px] h-[60px] bg-no-repeat bg-[98%_auto] '></p>
          <p className='pt-3 font-semibold'>OK캐쉬백 포인트</p>
          <span className='absolute top-7 right-5 text-[12px] text-[#767676] font-semibold'> 조회하기{'>'}</span>
        </div>
        <div className='flex relative py-3 px-3 gap-2 border border-y-[#767676] border-opacity-25'>
          <p className='bg-[url("/images/mypoint/360reward.png")] w-[50px] h-[60px] bg-no-repeat bg-[98%_auto] '></p>
          <p className='pt-3 font-semibold'>360 리워드 포인트</p>
          <span className='absolute top-7 right-5 text-[12px] text-[#767676] font-semibold'> 조회하기{'>'}</span>
        </div>
      </div>

      <div className='p-4 relative pb-20'>
        <Linearbutton contents='전환하기' url="/mypoint/converpntlist" />
        <p className='text-[12px] text-[#767676] font-semibold absolute right-4 '>포인트 한번에 조회하기 동의 철회 {'>'}</p>
      </div>
      
    </section>
  )
}

export default Convertpntlist