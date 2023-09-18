'use client'

import React from 'react'
import ClubService from '@/components/pages/spoint/ClubService'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

function club() {

  const session = useSession()

  const token=session.data?.user.token
    const getFetch = async () => {
      // console.log("token : ", token)
      try {
          await fetch('http://15.164.17.12:8000/api/v1/club/clublist',{
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
  return (
    <>
    <main className='mt-[106px]'>
      <div className='px-[20px] py-[40px]'>
        <p className='text-[19px] font-semibold'>
        <strong className='font-550 text-[#04857f] font-semibold'>클럽 서비스</strong>
          에 가입하고
        <br />
          다양한 혜택을 받아보세요.
        </p>
        
        <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
          고객님의 취향에 따른 맞춤 클럽 혜택으로
        <br />
          더욱 알뜰하고 편리한 서비스를 경험하실 수 있습니다.
        </p>
      </div>


      <h3 className='text-[17px] font-semibold pt-[40px] px-[20px] pb-[16px]'>MY 클럽</h3>

      <div className='px-[20px]'>
      <Image
      src={`/images/spoint/clubbeauty.png`}
      alt='클럽 뷰티'
      width={70}
      height={70}>
      </Image>
      <span className='text-[12px] absolute left-8 top-[460px] font-semibold'>뷰티클럽</span>
      </div>


      <h3 className='text-[17px] font-semibold pt-[40px] px-[20px] pb-[16px]'>이런 클럽은 어때요?</h3>

      <ClubService />

    </main>
    </>
  )
}

export default club