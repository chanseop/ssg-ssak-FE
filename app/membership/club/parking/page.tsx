import React from 'react'
import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'

function parking() {
  return (
    <>
    <main className='mt-[106px]'>
    <li className='text-[#623f00] w-full h-[174px] mb-[8px] bg-[#f6f1e7] pt-[30px] pb-[24px] px-[30px] relative list-none'>
          <span>
            <span className='tit font-semibold pb-[6px] leading-[26px] w-[240px] text-[19px]'>차량서비스</span>
            <span className='txt text-[14px] leading-[24px] pt-[6px] block w-[240px] font-semibold'>
              주차를 빠르고 편리하게!
              <br />
              이마트·신세계백화점에서
              <br />
              자동으로 주차 정산 받으세요.
            </span>
          </span>
          <span className=''>
            <Image
            src={"/images/spoint/clubcar.png"}
            alt={"차량서비스 클럽"}
            width={110}
            height={110}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-7 left-[260px]'>
            </Image>
          </span>
      </li>

      <div className='pt-[24px] px-[20px] pb-[60px]'>
        <p className='text-[14px] font-semibold pb-[24px]'>
          미리 차량 정보를 입력하면 번거로운 과정 없이
          <br />
          자동으로 주차 정산을 하실 수 있어요.
        </p>

        <Linearbutton contents='가입하기' url='/membership/club/parking/detail' />
      </div>
    </main>
    </>
  )
}

export default parking