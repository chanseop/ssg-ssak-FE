import React from 'react'
import Link from 'next/link'
import CouponList from '../coupon/CouponList'
import CouponListWrap from '../coupon/CouponListWrap'

function Benecoupon() {
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
            <Link href={'/couponpage'}>
            <p className='pr-2 text-[12px] text-[#767676]'>더 많은 쿠폰 보기{'>'}
            </p>
            </Link>
          </div>
        </div>

        {/* 쿠폰 list div */}
        <CouponListWrap/>
      </div>
    </>
  )
}

export default Benecoupon