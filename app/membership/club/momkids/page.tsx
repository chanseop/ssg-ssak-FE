import React from 'react'
import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'

function momkids() {
  return (
    <>
    <main className='mt-[106px]'>
      <div>
        <li className='text-[#00635e] w-full h-[156px] mb-[8px] bg-[#e6f3f3] pt-[30px] pb-[24px] px-[30px] relative list-none'>
          <span>
            <span className='tit font-semibold pb-[4px] text-[20px] leading-[26px] w-[240px]'>맘키즈 클럽</span>
            <span className='txt text-[12px] leading-[21px] pt-[6px] block w-[240px]'>
              아이와 엄마가 모두 행복한 라이프!
              <br />
              매월 다양한 이마트 맘키즈 클럽 혜택을
              <br />
              받아보세요.
            </span>
          </span>
          <span className=''>
            <Image
            src={"/images/spoint/clubmomkids.png"}
            alt={"맘키즈 클럽"}
            width={90}
            height={90}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[268px]'>
            </Image>
          </span>
        </li>
      </div>

      <div className='text-[14px] leading-[24px] font-semibold tracking-tighter pt-[24px] px-[20px] pb-[60px]'>
        <p>맘키즈 클럽은 임산부와 만 13세 이하의 자녀를 두신
          <br />회원님께만 드리는 이마트만의 회원제 혜택 서비스입니다.
        </p>
        <p>※ 이마트와 SSG.COM 이마트몰에서 모두 혜택 이용 가능합니다.
          <br /> (단, 온↔오프라인 옴니동의에 동의한 고객에 한하여 적용됩니다.)
        </p>

        <Linearbutton contents='가입하기' url='/membership/club/momkids/detail' />
      </div>
    </main>
    </>
  )
}

export default momkids