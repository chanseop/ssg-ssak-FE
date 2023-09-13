import CouponList from '@/components/pages/coupon/CouponList'
import CouponTop from '@/components/pages/coupon/CouponTop'
import React from 'react'

function Coupon() {
  
  return (
    <section className='pt-[106px] pb-[50px]'>
      <CouponTop/>
      <CouponList/>
    </section>
    
  )
}

export default Coupon