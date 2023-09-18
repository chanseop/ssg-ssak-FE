'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { memstoreListData } from '@/datas/spoint/MemberstoreListData';
import { memstoreListType } from '@/types/spoint/MemberstoreListType';

// import { useSession } from 'next-auth/react';

function memberstore() {

  // const session = useSession()
//  console.log(session)
 
  const getFetch = async () => {
    // console.log(session.data?.user.token)
    try {
        const res = await fetch(`http://15.164.17.12:8001/api/v1/franchise`,{
          method:'GET',
          headers:{
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${session.data?.user.token}`
          }
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
        
      } catch (error) {
        // console.log(error);
        return
    }
  }

  useEffect(()=>{
    getFetch()
  },[])

  const bell="before:w-[32px] before:h-[32px] before:bg-[url('/images/spoint/bell.png')] before:bg-cover before:bg-no-repeat before:inline-block"

  return (
    <>
      <main className='pt-[106px]'>
        <div className='p-4'>
          <div className={`bg-[#f8b404] w-full h-[88px] rounded-lg p-4 relative ${bell}`}>
            <div className=' pl-10 absolute top-4'>
              <strong className="text-[13px] pl-1 align-top">앗! 알림 설정 잊지마세요!</strong>
              <p className='text-[11px] pl-1'>PUSH 알림 설정하시고 <br />나의 포인트 소식과 혜택을 놓치지 마세요</p>
              <button className='absolute top-3 -right-24'>
                <Image
                src={`/images/spoint/pushcurser.png`}
                alt='좋아요'
                width={75}
                height={48}>
                </Image>
              </button>
            </div>
          </div>
        </div>

        <div className='px-[20px] py-[40px]'>
          <p className='text-[19px] font-semibold'>
            생활에서 취향까지
            <br />
            <strong className='font-550 text-[#a16c0c]'>일상에 신세계를 더합니다.</strong>
          </p>

          <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
          일상의 쇼핑부터 내 취향에 어울리는 맞춤 쇼핑까지
          <br />
          다양한 신세계포인트 가맹점을 만나보세요.
          </p>
        </div>

          <h3 className='text-[17px] font-semibold px-[20px] pb-[16px]'>신세계포인트 가맹점 안내</h3>

        <div className='point_info_list pd_b60 bg-[#fbfbfb] pt-[24px] pb-[60px] px-[10px] relative'>
          <ul className='mb-[-30px]'>
          {
            memstoreListData.map((e:memstoreListType) => (
              <li key={e.id} className='inline-block align-top w-[80px] mb-[20px] mr-[40px] ml-[3px]'>
                <Link href={e.url} rel="noopener noreferrer" className='block relative w-[80px] h-[106px]' target="_blank">
                  <span>
                    <Image
                    src={e.imgUrl}
                    alt={e.imgAlt}
                    width={78}
                    height={78}
                    className='border border-[#e8e8e8] rounded-[8px] bg-white mx-[20px]'>
                    </Image>
                  </span>
                  <span className='block text-center text-[12px] leading-[20px] pt-[8px] w-[114px] h-[28px] ml-[3px] font-semibold'>
                    {e.name}
                  </span>
                </Link>
              </li>
            ))
          }
          </ul>
          
              <p className='text-[11px] leading-[20px] text-[#767676] pt-[40px] font-semibold'>· 가맹점 로고 클릭 시 해당 가맹점 홈페이지로 연결됩니다.</p>
            </div>
      </main>
    </>
  )
}

export default memberstore