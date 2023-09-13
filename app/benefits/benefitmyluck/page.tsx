import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'

function benefitmyluck() {
  return (

    <div className='mt-[105px]'>
      <LoginRedirectModal />
      <div className=' px-[20px] py-[40px]'>
        <Image
          src={`/images/benefits/myluck.png`}
          alt='운수대통'
          width={350}
          height={292}>
        </Image>

        <p className='text-[24px] font-[550px] text-center mt-[24px]'>신세계포인트 <span>운세서비스</span></p>
        <p className='text-[20px] font-medium text-center mt-[8px]'>2023년 무료 신토정비결</p>
        <p className='text-[14px] text-[#767676] text-center pt-[8px]'>오늘의 운세, 오늘의 띠별운세
          <br />
          오늘의 타로, 신년타로 제공
        </p>
      </div>

      <div className='btn_box px-[20px] pb-[40px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <Link href={"https://shinsegaepoint.sinbiun.com/mobile/"} target='_blank'>
            <button>
              나의 운세 보러가기
            </button>
            </Link>
        </div>
      </div>

      <div role='notice box' className='px-[20px] pt-[32px] pb-[80px]'>
        <h3 className='text-[13px] font-semibold pb-[8px]'>유의사항</h3>
        <li className='text-[10px] text-[#767676]'>운세의 모든 서비스는 신세계포인트와 제휴를 맺은 (주)고든에서 제공 및 관리합니다.</li>
        <li className='text-[10px] text-[#767676] mt-[4px]'>
          서비스 이용 관련 자세한 내용은 (주)고든으로 문의해주시기 바랍니다.
          <br />
          (주)고든 고객센터:070-7600-9624
          </li>
      </div>


    </div>
  )
}

export default benefitmyluck