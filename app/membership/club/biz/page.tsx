import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Whitebutton from '@/components/ui/button/Whitebutton'
import Linearbutton from '@/components/ui/button/Linearbutton'

function bizclub() {
  return (
    <>
    <main className='mt-[106px]'>
    <div>

      <li className='text-[#5c1880] w-full h-[174x] bg-[#efe8f3] py-[30px] px-[30px] relative list-none'>
          <span>
            <span className='tit text-[19px] font-semibold pb-[4px] leading-[26px] w-[240px]'>비즈 클럽</span>
            <span className='txt text-[14px] leading-[21px] pt-[6px] block w-[240px] tracking-tighter'>
              개인 사업자도 편리하게!
              <br />
              세금계산서 발행 서비스,
              <br />
              이제 모바일로 관리하세요.
            </span>
          </span>
          <span className=''>
            <Image
            src={"/images/spoint/clubbiz.png"}
            alt={"비즈 클럽"}
            width={110}
            height={110}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[260px]'>
            </Image>
          </span>
      </li>

      <div className='pt-[24px] px-[20px] pb-[60px]'>
        <p className='text-[14px] leading-[24px] font-semibold'>
        개인 사업자 고객님들을 위한
        <br />
        편리한 세금계산서 발행 서비스입니다.
        </p>

        <ul className='pt-[24px] pb-[16px] text-[12px] text-[#767676] font-semibold'>
          <li>· 가입 시 비즈 클럽 모바일 카드가 발급되며, <span className='text-[#F40000]'>사업자등록증 지참 후 이마트 매장 내 고객만족센터에 방문해서 세금계산서 발행을 위한 등록 절차를 진행</span>해 주세요.</li>
          <li>· 비즈 클럽 카드를 추가 발급하는 경우에도 사업자등록증 지참 후 이마트 매장 내 고객만족센터에 방문해서 세금계산서 발행을 위한 등록 절차를 진행해 주세요.</li>
          <li>· 비즈 클럽 가입 시 등록하신 이메일 주소로 세금계산서가 발송되며, 약 1~2주 정도 소요됩니다.</li>
          <li>· 세금계산서 발행 거래의 포인트 적립 건은 개인 포인트 적립내역에 합산됩니다.</li>
          <li>· 혜택은 이마트 매장에서만 적용됩니다.</li>
        </ul>

        <Whitebutton contents="비즈 클럽 이용 방법" url="/"/>
        <Linearbutton contents="가입하기" url="/membership/club/biz/mod"/>
      </div>
    </div>
    </main>
    </>

  )
}

export default bizclub