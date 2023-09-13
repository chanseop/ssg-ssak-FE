import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PointidType } from '@/types/membership/PointidType'
import { pointidData } from '@/datas/membership/PointidData'

function pointid() {
  return (
    <>
    <main className='mt-[106px]'>
      <div className='px-[20px] py-[40px]'>
        <p className='text-[19px] font-semibold'>
          신세계포인트 통합ID 하나면
          <br />
          <strong className='font-550 text-[#04857f]'>신세계가 한 손안에 쓱-</strong>
        </p>

        <p className='text-[14px] text-[#767676] pt-[8px] leading-[24px] tracking-tighter'>
        하나의 ID로 이마트, 신세계백화점, SSG.COM 등
        <br />
        다양한 제휴사의 혜택과 온라인 서비스를
        <br />
        간편하게 이용하실 수 있습니다. 
        </p>
    </div>
    {/* pl-py-[20px] */}
    <div>
      <div>
        <h3 className='tit text-[18px] px-[20px] pb-[10px] font-semibold'>신세계포인트 통합 ID 서비스 TIP</h3>
        <ul className='mx-[20px] mb-[80px]'>
          {
              pointidData.map((e:PointidType) => (
            <li key={e.id} className='block mt-2 min-h-[146px] border relative'>
            <div className='py-[20px]'>
              <Link href={e.url} target='_blank'>
                <Image
                src={e.imgUrl}
                alt={e.imgAlt}
                width={70}
                height={70}
                className='border border-[#e8e8e8] rounded-[23px] bg-white mx-[20px] float-left'>
                </Image>
                <span>
                  <strong>{e.name}</strong>
                </span>
                <p className='text-[11px] text-[#767676] font-semibold pt-[4px] leading-[20px] '>
                  {e.text1}
                <br />
                  {e.text2}
                <br />
                  {e.text3}
                </p>
              </Link>
            </div>

            <div className='state absolute w-[70px] h-[28px] box-border text-center pt-3px border text-[11px] leading-[28px] bg-[#04857f] text-white left-5 top-[100px]'>
              가입하기
            </div>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
      </main>
    </>

  )
}

export default pointid