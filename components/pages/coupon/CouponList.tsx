'use client'
import React, { useEffect, useState } from 'react'
import CouponListWrap from './CouponListWrap'
import { useSession } from 'next-auth/react';
import LoginCheckModal from '@/components/ui/modal/LoginCheckModal';

function CouponList() {
  const [isLogin, setIsLogin] =useState<Boolean>(false)
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

  return (
    <>
      <LoginCheckModal errMsg={modaltext} modalStatus={modalIsOpen} setModalStatus={setModalStatus}/>
      <div className='coupon_list_wrap p-5 pt-6'>
        {/* 정렬div */}
        <div className='coupon_search flex justify-between border h-[40px] w-full border-white border-b-black'>
          <div>
            <select className='text-[14px] font-semibold' name="쿠폰 정렬" id="couponsort">
              <option value="end">마감임박</option>
              <option value="new">최신순</option>
            </select>
          </div>
          <div className='text-[14px] font-semibold flex'>
            <p className='pr-2' onClick={isLogin ? ()=>null : ()=>modalStatus("쿠폰 다운을 위해 먼저 로그인해 주세요.",true)}>전체다운</p>
            <p className='bg-[url("/images/coupon/downloadlogo.png")] bg-no-repeat bg-[19px_auto] pr-5'></p>
          </div>
        </div>

        {/* 쿠폰 list div */}
        <CouponListWrap isLogin={isLogin} modalStatus={modalStatus}/>
      </div>
    </>
  )
}

export default CouponList