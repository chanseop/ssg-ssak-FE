'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CouponList from '../coupon/CouponList'
import CouponListWrap from '../coupon/CouponListWrap'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

function Benecoupon() {
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
  return (
    <>
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
            <div onClick={()=>route.push('/couponpage')}>
            <p className='pr-2 text-[12px] text-[#767676]'>더 많은 쿠폰 보기{'>'}
            </p>
            </div>
          </div>
        </div>

        {/* 쿠폰 list div */}
        <CouponListWrap isLogin={isLogin} modalStatus={modalStatus}/>
      </div>
    </>
  )
}

export default Benecoupon