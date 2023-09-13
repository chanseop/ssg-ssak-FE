'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import PostCodeDaum from '@/components/widget/PostCodeDaum';
import { DaumAddressType } from '@/types/signup/DaumAddressType';
import Linearbutton from '@/components/ui/button/Linearbutton';


function mod() {

  const [isView, setIsView] = useState<boolean>(false);
  const [address, setAddress] = useState<DaumAddressType>();

  const handleOpenModal = () => {
      setIsView(!isView);
  }
  return (
    <>
    <main className='mt-[106px]'>
      <li className='text-[#5c1880] w-full h-[130px] mb-[8px] bg-[#efe8f3] pt-[30px] pb-[24px] px-[30px] relative list-none'>
        <span>
          <span className='tit font-semibold pb-[4px] leading-[26px] w-[240px]'>비즈 클럽</span>
          <span className='txt text-[18px] leading-[21px] pt-[6px] block w-[240px] font-semibold tracking-tighter'>
            개인 사업자를 위한
            <br />
            편리한 세금계산서 발행 서비스
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
        </span>
      </li>

      <div className='pt-[17px] px-[20px] pb-[40px]'>
        
        <div className='form_box pb-[16px]'>
          <p className='pb-[8px] text-[12px] font-[550]'>회사명</p>
          <form>
            <input type="text"
            className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto'/>
          </form>
        </div>

        <div className='form_box pb-[16px]'>
          <p className='pb-[8px] text-[12px] font-[550]'>사업자 등록번호</p>
          <form>
            <input type="text"
            className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto'/>
          </form>
        </div>

        <div className='form_box pb-[16px]'>

          <form>
            <input type="text"
            className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto'/>
          </form>
        </div>

        <div className='pb-[16px]'>
        <p className='pb-[8px] text-[12px] font-[550]'>회사주소</p>
        <div className='flex justify-between gap-2'>
          <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-[70%]'>
            <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text" readOnly value={address?.zonecode??""}  placeholder='우편번호'/>
          </div>
          <button className='rounded-lg w-28 h-11 text-center border mt-[10px] text-[13px] font-semibold border-[#EAEAEA]' onClick={handleOpenModal}>
            우편번호찾기
          </button>
        </div>
        <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full relative'>
          <input className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' type="text" readOnly value={address?.address??""}  />
        </div>
        </div>
        

        <div className='pb-[16px]'>
        <p className='pb-[8px] text-[12px] font-[550]'>이메일</p>
        <label className='inline-block mr-1'>
            <input type="text" placeholder=''
            className='w-[163px] h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
            <span className='text-[13px] ml-1'>@</span>
        </label>
        <div className='inline-block'>
          <label>
            <input type="text" placeholder=''
            className='w-[164px] h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
          </label>
        </div>

          <div className='select_box mt-2'>
            <select name="이메일 선택" className='w-full h-[48px] border border-[#e8e8e8] rounded-[8px] text-[14px] font-semibold pr-[32px] pl-[15px]'>
              <option value="01">직접입력</option>
              <option value="02">naver.com</option>
              <option value="03">daum.net</option>
              <option value="04">gmail.com</option>
              <option value="05">kakao.com</option>
            </select>
          </div>
      </div>

      <Linearbutton contents='저장하기' url='null'/>

      <div className='pt-[32px] pb-[80px] px-[20px]'>
        <ul className='text-[10px] text-[#767676] font-semibold tracking-tighter'>
          <li>가입 시 비즈 클럽 모바일 카드가 발급되며, 사업자등록증 지참 후 이마트 매장 내 고객만족센터에 방문해서 세금계산서 발행을 위한 등록 절차를 진행해 주세요.</li>
          <li className='mt-[4px]'>비즈 클럽 카드를 추가 발급하는 경우에도 사업자등록증 지참 후 이마트 매장 내 고객만족센터에 방문해서 세금계산서 발행을 위한 등록 절차를 진행해 주세요.</li>
          <li className='mt-[4px]'>회사 정보는 나이스평가정보㈜ 법인실명정보를 통해 인증하고 있습니다.</li>
          <li className='mt-[4px]'>온라인 등록 인증 오류 시 나이스평가정보㈜ 고객만족센터 1600-1522로 문의해 주세요.</li>
        </ul>
      </div>

        
      </div>
      <div className={`${isView? "fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-5" : "hidden"}`} onClick={handleOpenModal}>
      </div>


    </main>
    </>
  )
}

export default mod