'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';


function Card(props:{types:String}) {
  const {types}=props
  // console.log(types);
  const [point,setPoint]=useState<number>(0);
  const token=useSession().data?.user["token"];
  // console.log(token);
  
  
  const cardPointLogo="after:ml-[7px] after:w-[33px] after:h-[30px] after:bg-[url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')] after:bg-no-repeat after:bg-cover"

  
  useEffect(()=>{
    const getFetch = async () => {
      try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/point/possible`,{
            method:'GET',
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response=>response.json())
          .then(data=>setPoint(data.possiblePoint))
          
      } catch (error) {
          // console.log(error);
          return
      }
    }
    getFetch()
  },[token,point])

  

  return (
    <>
      {
        types==="pnthistory"?
        <div className='point_info_cardbox  p-6 bg-white'>
          <div className='cardbox bg-linear_93 m-auto  overflow-hidden rounded-3xl h-full pb-[2px] shadow-md max-w-sm my-0 '>
            <div className='top_cnt flex items-center relative h-[40px] pr-[12px] pl-[20px] justify-between'>
              <h3 className='tit_img bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'>SHINSEGAE POINT</h3>
              <button className='btn_info w-4 h-4 bg-[url("/images/mypoint/cardInfoLogo.png")] bg-cover'>
                <span className='blind overflow-hidden border-0 absolute z-[-1px] w-[1px] h-[1px]'>신세계포인트 상세 안내</span>
              </button>
            </div>
            <div className='item_cnt relative bg-white rounded-[18px] m-h-[160px] h-full mx-[2px] px-[20px] pb-[20px]'>
              <dl className='flex justify-between items-center pt-[24px] pb-[14px] '>
                <dt className='text-[13px] font-semibold leading-5'>사용 가능</dt>
                <dd className={`flex items-center text-[24px] leading-7 font-bold ${cardPointLogo}`}>{point}</dd>
              </dl>
              <dl className='flex mt-[3px] justify-between'>
                <dt className='grow-[1.3] shrink text-xs font-normal'>적립 예정</dt>
                <dd className='grow-[3.7] shrink text-[13px] font-bold text-right'>0P</dd>
              </dl>
              <dl className='flex mt-[3px] pb-0 '>
                <dt className='grow-[1.3] shrink text-xs font-normal text-left'>소멸 예정</dt>
                <dd className='grow-[3.7] shrink text-[13px] font-bold text-right'>
                  <span className='flex text-left justify-between'> <em className='text-[11px] leading-5 font-normal'>2023-09-01</em> <em >0P</em> </span>
                  <span className='flex text-left justify-between'> <em className='text-[11px] leading-5 font-normal'>2023-10-01</em> <em>0P</em> </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        :types==="cardmanage"?
        <>
        <p className='text-[14px] leading-6 mb-[15px] font-medium text-center'>
          <strong>총 3건의</strong> &nbsp;
          <span className='font-semibold'>신세계포인트 카드를 보유하고 있습니다.</span>
        </p>
        {/* 카드 정보 */}
        <div className='cardbox bg-linear_93 m-auto overflow-hidden font-semibold rounded-3xl text-[14px] leading-6 mb-[15px] h-full pb-[2px] shadow-md max-w-sm my-0 '>
          <div className='top_cnt flex items-center relative h-[40px] pr-[12px] pl-[20px] justify-between'>
            <h3 className='tit_img bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'>SHINSEGAE POINT</h3>
            <button className='btn_info w-14 h-6 bg-[url("/images/mypoint/barcodeImage.jpg")] bg-cover'>
              <span className='blind overflow-hidden border-0 absolute z-[-1px] w-[1px] h-[1px]'>신세계포인트 상세 안내</span>
            </button>
          </div>
          {/* 카드안에 바디 정보값 */}
          <div className='item_cnt relative bg-white rounded-[18px] m-h-[160px] h-full mx-[2px] px-[20px] pb-[1px] pt-[73px]'>
            <div className='card_num'>
              <p className='font-bold text-[19px]'>
                9350
                <span>-</span>
                1200
                <span>-</span>
                1863
                <span>-</span>
                5388
              </p>
              <button className='border bg-white right-[20px] top-[70px] absolute w-9 h-7 rounded pb-[1px] border-[#bcbcbc] text-xs font-semibold'>복사</button>
            </div>

            <dl className='flex justify-between items-center pt-[20px] pb-[5px] leading-6 mb-[15px] '>
              <dt className='text-[13px] font-semibold leading-5'>사용 가능</dt>
              <dd className={`flex items-center text-[16px] leading-7 justify-center font-medium ${cardPointLogo}`}>
                33
                </dd>
            </dl>
          </div>
        </div>
        </>
        :null
      }
    </>
    
  )
}

export default Card