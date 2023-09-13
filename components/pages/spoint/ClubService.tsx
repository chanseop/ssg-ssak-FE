import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function ClubService() {
  return (
    <div>
    <ul className='pb-[60px] font-semibold'>
      <li className='text-[#00635e] w-full h-[156px] mb-[8px] bg-[#e6f3f3] pt-[30px] pb-[24px] px-[30px] relative'>
        <Link href={'/membership/club/momkids'} className='pt-[4px]'>
          <span>
            <span className='tit font-semibold pb-[4px] leading-[26px] w-[240px]'>맘키즈 클럽</span>
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
            <span className='text-[11px] pt-[10px] font-semibold absolute bottom-[20px] left-[285px]'>바로가기 {'>'}</span>
          </span>
        </Link>
      </li>

      <li className='text-[#623f00] w-full h-[156px] mb-[8px] bg-[#f6f1e7] pt-[30px] pb-[24px] px-[30px] relative'>
        <Link href={'/membership/club/parking'} className='pt-[4px]'>
          <span>
            <span className='tit font-semibold pb-[4px] leading-[26px] w-[240px]'>차량서비스</span>
            <span className='txt text-[12px] leading-[21px] pt-[6px] block w-[240px]'>
              주차를 빠르고 편리하게
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
            width={90}
            height={90}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[268px]'>
            </Image>
            <span className='text-[11px] pt-[10px] font-semibold absolute bottom-[20px] left-[285px]'>바로가기 {'>'}</span>
          </span>
        </Link>
      </li>

      <li className='text-[#d9044b] w-full h-[156px] mb-[8px] bg-[#fde6ef] pt-[30px] pb-[24px] px-[30px] relative'>
        <Link href={'/membership/club/beauty'} className='pt-[4px]'>
          <span>
            <span className='tit font-semibold pb-[4px] leading-[26px] w-[240px]'>뷰티 클럽</span>
            <span className='txt text-[12px] leading-[21px] pt-[6px] block w-[240px]'>
              아름다움을 꿈꾸는 당신께!
              <br />
              이마트 뷰티 클럽에 가입하고
              <br />
              스마트하게 제품도 구매하세요.
            </span>
          </span>
          <span className=''>
            <Image
            src={"/images/spoint/clubbeauty.png"}
            alt={"뷰티 클럽"}
            width={90}
            height={90}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[268px]'>
            </Image>
            <span className='text-[11px] pt-[10px] font-semibold absolute bottom-[20px] left-[285px]'>바로가기 {'>'}</span>
          </span>
        </Link>
      </li>

      <li className='text-[#5c1880] w-full h-[156px] mb-[8px] bg-[#efe8f3] pt-[30px] pb-[24px] px-[30px] relative'>
        <Link href={'/membership/club/biz'} className='pt-[4px]'>
          <span>
            <span className='tit font-semibold pb-[4px] leading-[26px] w-[240px]'>비즈 클럽</span>
            <span className='txt text-[12px] leading-[21px] pt-[6px] block w-[240px]'>
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
            width={90}
            height={90}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[268px]'>
            </Image>
            <span className='text-[11px] pt-[10px] font-semibold absolute bottom-[20px] left-[285px]'>바로가기 {'>'}</span>
          </span>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default ClubService