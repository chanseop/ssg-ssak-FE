'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LoginCheckModal from '@/components/ui/modal/LoginCheckModal';

function CouponTop() {
  const [addCoupon,setaddCoupon]=useState<string>('hidden');
  const [isLogin, setIsLogin] =useState<Boolean>(false)
  const route=useRouter();
  const session=useSession();

  const [modaltext,setModalText]=useState<string>("");
  const [modalIsOpen,setModalStatus]=useState<boolean>(false)
  const modalStatus=(modaltext:string,modalIsOpen:boolean)=>{
    setModalText(modaltext)
    setModalStatus(modalIsOpen)
  }

  useEffect(()=>{
    setIsLogin(session.status==="authenticated")
  },[session])

  // console.log(isLogin);
  
  const handleAddCoupon=()=>{
    if(addCoupon==""){
      setaddCoupon("hidden")
    }else{
      setaddCoupon("")
    }
  }

  

  


  return (
    <>
      <div>
        {/* 쿠폰top 소개글 */}
        <div className='pt-[7%] bg-[url("/images/coupon/couponhead.png")] bg-no-repeat bg-[100%_auto]'>
          <div className='bg-[#ff811d] py-[30px] px-[10px] text-center relative'>
            <strong className='text-[22px] mt-[15px] mb-2 pb-2'>쇼핑 할인에서 제휴 우대까지<br />신세계포인트 회원만<br />누릴 수 있는 혜택!</strong>
            <p className='text-[13px] pt-2 font-semibold'>원하는 쿠폰을 다운로드하고 <br />마이 쿠폰함에 쓱- 담아 사용해 보세요.</p>
          </div>
        </div>

        {/* 마이쿠폰함이동,쿠폰등록 */}
        <LoginCheckModal errMsg={modaltext} modalStatus={modalIsOpen} setModalStatus={setModalStatus}/>
        <div className='pb-[7%] bg-[url("/images/coupon/couponbot.png")] bg-no-repeat bg-[100%_auto] bg-bottom'>
          <div className='bg-[#ffc191] p-[10px] pb-[30px] relative'></div>
          <div className='relative bg-[#ffc191] pt-[6px] px-5 pb-[10px]'>
            <ul className='flex justify-center'>
              <li className='mr-[50px] text-[13px] w-[167px] text-center font-semibold' 
              onClick={isLogin ? ()=>route.push('/benefits/mycoupon') : ()=>modalStatus("마이쿠폰함 이용을 위해 먼저 로그인해 주세요.",true)}>
                <Image
                className='pt-3 ml-[45px] pb-2' 
                src="/images/coupon/mycoupon.png"
                alt="mycoupon"
                height={48}
                width={48}
                ></Image>
                마이쿠폰함으로 이동
              </li>
              <li className='text-[13px] w-[167px] text-center font-semibold' onClick={isLogin?handleAddCoupon:()=>modalStatus("쿠폰등록를 위해 먼저 로그인해 주세요.",true)}>
                <Image
                  className='pt-3 ml-[49px] pb-2' 
                  src="/images/coupon/addcoupon.png"
                  alt="mycoupon"
                  height={48}
                  width={48}
                ></Image>
                쿠폰 등록
              </li>
            </ul>
            {/* 쿠폰입력창 hidden */}
            <div className={`bg-white rounded-lg py-6 px-5 mt-4 ${addCoupon}`}>
              <p className='text-[15px] font-semibold leading-7'>신세계포인트 쿠폰 등록을 위해 <br /> <strong className='text-[#c85208]'>쿠폰 번호를 입력</strong>해 주세요.</p>
              <div className='mt-3'>
                <input className='border rounded-lg h-[48px] w-full px-4 text-[13px]' type="text" placeholder='대소문자 구분하여 정확히 입력해 주세요.'/>
              </div>
              <div className='flex mt-2 text-[13px] font-semibold'>
                <button className='mr-[5px] border bg-[#fff] border-[#bcbcbc] text-[#bcbcbc] rounded-lg text-center h-12 w-full p-3' onClick={handleAddCoupon}>다음에 하기</button>
                <button className='mr-[5px] border bg-linear_110 border-[#bcbcbc] rounded-lg text-center h-12 w-full p-3'>등록하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CouponTop