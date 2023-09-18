'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';


import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'
import { request } from 'http';

function beauty() {
  // const [point,setPoint]=useState<number>(-1);
  const session = useSession()

  const token=session.data?.user.token
  const postFetch = async () => {
    // console.log("token : ", token)
    try {
        await fetch('http://15.164.17.12:8000/api/v1/club/beauty',{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
      } catch (error) {
          console.log(error);

      }
    }

  useEffect(()=>{
    const getFetch = async () => {
      // console.log("token : ", token)
      try {
          await fetch('http://15.164.17.12:8001/api/v1/club/clublist',{
            method:'GET',
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response=>response.json())
          .then(data=>console.log(data))
        } catch (error) {
            console.log(error);
  
        }
      }
      getFetch()
  },[token])


  return (
    <>
    <main className='mt-[106px]'>
      <li className='text-[#d9044b] w-full h-[174x] bg-[#fde6ef] py-[32px] px-[30px] relative list-none'>
        <span>
          <span className='tit text-[19px] font-semibold pb-[4px] leading-[26px] w-[240px]'>뷰티 클럽</span>
          <span className='txt text-[14px] leading-[24px] pt-[6px] block w-[240px] tracking-tighter'>
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
          width={110}
          height={110}
          className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[268px]'>
          </Image>
        </span>
      </li>

      <div className='pt-[24px] px-[20px] pb-[60px]'>
        <p className='text-[14px] leading-[24px] font-semibold tracking-tighter'>
        이마트 매장에서 브랜드 화장품 구매 시
        <br />
        신세계포인트 2~5% 추가 적립 혜택을 받으실 수 있습니다. 
        </p>
      <div>

      <div id='brand_info' className='pt-[40px] pb-[24px]'>
        <div className='pb-[8px] border-b border-black'>
          <strong className='text-[16px] font-semibold '>
            해당브랜드
          </strong>
        </div>
        <div id='list_cnt' className='text-[13px] border-b pt-[16px] px-[5px] pb-[8px]'>
          <li className='mt-[8px] inline-block w-1/3'>· 아모레퍼시픽</li>
          <li className='mt-[8px] inline-block w-1/3'>· 이자녹스</li>
          <li className='mt-[8px] inline-block w-1/3'>· 더샘</li>
          <li className='mt-[8px] inline-block w-1/3'>· 수려한</li>
          <li className='mt-[8px] inline-block w-1/3'>· 토니모리</li>
          <li className='mt-[8px] inline-block w-1/3'>· 더페이스샵</li>
          <li className='mt-[8px] inline-block w-1/3'>· 이니스프리</li>
          <li className='mt-[8px] inline-block w-1/3'>· 비욘드</li>
          <li className='mt-[8px] inline-block w-1/3'>· 미샤</li>
          <li className='mt-[8px] inline-block w-1/3'>· 엔프라니</li>
          <li className='mt-[8px] inline-block w-1/3'>· 네이저리퍼블릭</li>
        </div>
      </div>
      <div className='mt-6 bg-linear_110 text-center text-[14px] font-semibold h-[48px] rounded-[8px] leading-[48px]' onClick={()=>postFetch()}
      >가입하기</div>

      {/* <Linearbutton contents='가입하기' url='/membership/club' /> */}
    </div>
      </div>
    </main>
    </>
  )
}

export default beauty