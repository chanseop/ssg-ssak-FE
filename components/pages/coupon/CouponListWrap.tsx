import React from 'react'
import Image from 'next/image'
import { couponListdata } from '@/datas/coupon/CouponListData'
import { couponListType } from '@/types/coupon/CouponListType'

function CouponListWrap({isLogin,modalStatus}:{isLogin:Boolean,modalStatus:any}) {
  return (
    <>
      <ul>
          {
            couponListdata.map((e:couponListType)=>(
              <li key={e.id} className='border border-[#e8e8e8] border-x-white pt-4'>
                <div className='align-top inline-block'>
                  {/* 할인사진및 브랜드 사진 */}
                  <div className='relative'>
                    <Image
                      className='rounded-lg'
                      src={e.imageUrl1}
                      alt={e.imageAlt1}
                      width={80}
                      height={80}>
                    </Image>
                  </div>
                  <Image
                    className='block'
                    src={e.imageUrl2}
                    alt={e.imageAlt2}
                    width={79}
                    height={40}>
                  </Image>
                </div>
                {/* 쿠폰안에 정보 */}
                <div className='pl-[18px] inline-block align-top w-[75%]'>
                  <p className='text-[12px] text-[#767676] font-semibold'>{e.brand}</p>
                  <p className='pt-2 pb-3 text-[16px] font-semibold'>{e.title}</p>
                  <p className='text-[11px] text-[#767676] '>
                    {e.date} 
                    <span className='text-[#dbdbdb]'>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <span className=' text-[#c85208] font-semibold'>
                        {e.restdate<=30?`${e.restdate}일 남음`:null}
                      </span>
                    </span>
                  </p>
                  {/* 브랜드 로고 및 다운로드 로고 */}
                  <div className='flex justify-between mt-3 h-[48px] items-center border border-white border-t-[#e8e8e8] w-full '>
                    <div>
                      <Image
                        src={e.imageUrl3}
                        alt={e.imageAlt3}
                        height={20}
                        width={20}
                      ></Image>
                    </div>
                    <div onClick={isLogin ? ()=>null : ()=>modalStatus("쿠폰 다운을 위해 먼저 로그인해 주세요.",true)}>
                      <Image
                        src="/images/coupon/downloadlogo.png"
                        alt="다운로드로고"
                        width={20}
                        height={20}
                      >
                      </Image>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
    </>
  )
}

export default CouponListWrap