'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { IngEventData } from '@/datas/event/ingEventData'
import Link from 'next/link'

function EventDetail() {
  const params=useSearchParams();
  const img=params.get('eventNo')
  // const data=ingEventData[0]
  const data=IngEventData[0]
  // console.log(data);
  
  
  

  return (
    <div className='pt-[110px]'>
      <div className='p-[20px] pt-[36px] relative'>
        <p className='text-[18px] pr-[50px] leading-[26px] font-semibold'>{data.title}</p>
        <p className='pt-1 text-[13px] leading-[21px]'>
          기간 : 
          <span>{data.regdate}</span>
        </p>
        <p className='bg-[url("/images/event/share.png")] bg-contain bg-no-repeat pl-[20px] absolute right-[20px] top-[39px] h-[19px] text-[15px] '>공유</p>
      </div>
      <Image
      src={`/images/event/${img}.jpg`}
      alt='맘키즈클럽 플러스고객을 위한 8월 2차 혜택 안내입니다.'
      width={732}
      height={11550}
      >
      </Image>
      <div className=' py-4 px-6 fixed bottom-0 text-center w-full left-0 bg-white z-10 '>
        <div className='p-[15px] pt-[12px] border border-[#bcbcbc] rounded-lg text-[14px] font-semibold'>
          <Link href={'https://emartapp.emart.com/event/detail/momKidsplus_02.do'}>더 많은 상품 보기</Link>
        </div>
      </div>
      
    </div>
  )
}

export default EventDetail