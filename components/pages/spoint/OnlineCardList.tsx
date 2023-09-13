import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sonlinecardListData } from '@/datas/spoint/SonlinecardListData'
import { sonlinecardType } from '@/types/spoint/SonlinecardType'

function OnlineCardList() {
  return (
    <ul className='mb-[-30px]'>
    {
      sonlinecardListData.map((e:sonlinecardType) => (
        <li key={e.id} className='inline-block align-top w-[80px] mb-[20px] mr-[40px] ml-[3px]'>
          <Link href={e.url} rel="noopener noreferrer" className='block relative w-[80px] h-[106px]' target="_blank">
            <span>
              <Image
              src={e.imgUrl}
              alt={e.imgAlt}
              width={80}
              height={80}
              className='border border-[#e8e8e8] rounded-[23px] bg-white mx-[20px]'>
              </Image>
            </span>
            <span className='block text-center text-[12px] leading-[20px] pt-[8px] w-[114px] h-[28px] ml-[3px] font-semibold'>
              {e.name}
            </span>
          </Link>
        </li>
      ))
    }
    </ul>
  )
}

export default OnlineCardList