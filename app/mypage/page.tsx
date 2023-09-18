'use client'

import Barcode from '@/components/ui/barcode/Barcode'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MypageType } from '@/types/mypage/Mypagetype'
import { MypageData } from '@/datas/mypage/MypageData'
import Barcode1 from 'react-barcode'


function mypage() {

  const cardPointLogo="after:ml-[7px] after:w-[44px] after:h-[41px] after:bg-[url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')] after:bg-no-repeat after:bg-cover"

  
  return (
    <>
    <main className='mt-[126px]'>
      <div className='cardbox bg-linear_93 m-auto overflow-hidden font-semibold rounded-3xl text-[14px] leading-6 mx-[30px] mb-[15px] h-full pb-[2px] shadow-md max-w-sm my-0 relative'>
        <div className='top_cnt flex items-center relative h-[40px] pr-[12px] pl-[20px] justify-between'>
          <h3 className='tit_img bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'>SHINSEGAE POINT</h3>
          <Link href='/mypoint/pnthistory'>
          <button className='btn_info w-[6px] h-[10px] bg-[url("/images/mylounge/vector.png")] bg-cover'>
            <span className='blind overflow-hidden border-0 absolute z-[-1px] w-[1px] h-[1px]'>포인트 히스토리</span>
          </button>
          </Link>
        </div>
          {/* 카드안에 바디 정보값 */}
        <div className='item_cnt relative bg-white rounded-[18px] m-h-[160px] h-[309px] mx-[2px] p-[24px]'>
          <div className='card_num'>
          <div>
            <dd className={`flex items-center text-[32px] leading-7 font-bold ${cardPointLogo}`}>
              33
            </dd>
        </div>

        <div className='flex text-[13px] text-[#767676]'>
          <p className='border-r pr-2'>내일 적립 예정 <span className='font-semibold text-black'>0P</span></p>
          <p className='pl-2'>다음달 소멸 예정 <span className='font-semibold text-black'>0P</span></p>
        </div>

      </div>

        <div className='pt-[2rem] rounded-lg'>
          <Barcode1
            value="9350-1200-1863-5388"
            format={"CODE128"}
            width={1.20}
            height={48}
            fontOptions={"bold"}
            displayValue={true} // 오타 수정
            textAlign={"right"}
            fontSize={13}
            margin={9}
          />
        </div>

        <ul className='flex justify-between text-[12px] mt-[20px]'>
          <Link href='/mypoint/pntgiftmain'>
          <li className='w-[85px] h-[60px] text-center'>
          <Image
            src="/images/mypage/present.png"
            alt="선물하기"
            width={40}
            height={40}
            className='mx-auto'>
          </Image>
            선물하기
          </li>
          </Link>

          <Link href='/mypoint/convertpntlist'>
            <li className='w-[85px] h-[60px] text-center'>
              <Image
                src="/images/mypage/convert.png"
                alt="전환하기"
                width={40}
                height={40}
                className='mx-auto'>
              </Image>
            전환하기
            </li>
          </Link>

          <Link href='/mypoint/savepoint'>
            <li className='w-[85px] h-[60px] text-center tracking-tighter'>
              <Image
                src="/images/mypage/recept.png"
                alt="영수증으로 적립"
                width={40}
                height={40}
                className='mx-auto'>
              </Image>
            <p>영수증으로 적립</p>
            </li>
          </Link>

        </ul>
        </div>
      </div>

      <div className='bg-[#F0F0F0] pt-[108px] px-[20px] font-semibold pb-[80px] mt-[-68px]'>
        <p>
          {/* TODO : z-index 배경에 덮히는 문제 해결해야 */}
          <strong className='txt_line0 pk relative align-top text-[18px] pl-[1px] pr-[4px]
          after:bg-[#fed6e8] after:content:"" after:inline-block after:absolute after:w-full after:h-[15px] after:z-[-2] after:bottom-0 after:left-0'>토마토</strong>
          님,
          <br />
          통합ID로 더 다양한 멤버십을 만나보세요!
        </p>

        <div className='mt-[22px]'>
        {
        MypageData.map((e:MypageType)=>(
              <div key={e.id}>
              <Link href={e.url}>
                <Image
                  src={e.imgUrl}
                  alt={e.imgAlt}
                  width={350}
                  height={308}
                  className='rounded-xl'>
                </Image>
              </Link>
            </div>
        ))
        }
        </div>
      </div>
    </main>
    </>
  )
}

export default mypage