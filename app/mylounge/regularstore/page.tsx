import React from 'react'
import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'

function regularstore() {
  return (
    <>
    <div className='regular_reg01 mt-[106px] px-[20px] py-[40px]'>
      <p className='text-[20px] font-[550]'>나의 단골 매장</p>
    </div>

    <div className='regular_reg02 pb-[65px]'>
      <ul className='pb-[24px]'>
        <li className='border-t py-[8px] w-full inline-table min-h-[82px] relative box-border'>
          <div className='regular_location pl-[90px] pr-[65px] h-[65px] table-cell align-middle'>
              <Image
              src={`/images/mylounge/starbucks.png`}
              alt='로고이미지'
              width={50}
              height={50}
              className='absolute left-[20px] top-1/2 mt-[-26px] border-[#d5d5d5] border rounded-full'>
              </Image>
            <p className='text-[13px] font-semibold leading-6 w-[235px]'>월드마크센텀</p>
            <p className='text-[12px] font-semibold text-[#767676] leading-[21px] w-[235px]'>부산 해운대구 센텀동로 23(우동, 대우월드마크센텀아파트)</p>
            <button className='absolute right-[30px] top-1/2 mt-[-13px]'>
              <Image
              src={`/images/mylounge/regularrm.png`}
              alt='단골매장삭제'
              width={20}
              height={26}>
            </Image>
            </button>
          </div>
        </li>

        <li className='border-y py-[8px] w-full inline-table min-h-[82px] relative box-border'>
          <div className='regular_location pl-[90px] pr-[65px] h-[65px] w-[390px] table-cell align-middle'>
              <Image
                src={`/images/mylounge/hotel.png`}
                alt='로고이미지'
                width={50}
                height={50}
                className='absolute left-[20px] top-1/2 mt-[-26px] border-[#d5d5d5] border rounded-full'>
              </Image>
            <p className='text-[13px] font-semibold leading-6 w-[235px]'>센텀 프리미어호텔점</p>
            <p className='text-[12px] font-semibold text-[#767676] leading-[21px] w-[235px]'>부산 해운대구 우동 1521번지</p>
            <button className='absolute right-[30px] top-1/2 mt-[-13px]'>
              <Image
              src={`/images/mylounge/regularrm.png`}
              alt='단골매장삭제'
              width={20}
              height={26}>
              </Image>
            </button>
          </div>
        </li>

      </ul>
      <div className='px-[20px]'>
      <Linearbutton contents='단골 매장 등록하기' url='/mylounge/findstore'></Linearbutton>
      </div>
    </div>
    </>
  )
}

export default regularstore