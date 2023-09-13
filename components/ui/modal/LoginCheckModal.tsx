'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function LoginCheckModal({errMsg,modalStatus,setModalStatus}:{errMsg:string,modalStatus:boolean,setModalStatus:React.Dispatch<React.SetStateAction<boolean>>}) {
  const router=useRouter();

  return (
    <>
    {
      modalStatus ?
      <div className='bg-black/[.80] w-full h-full z-10 fixed top-0 left-0'>
        <div className='flex justify-center relative items-center w-full h-full'>
          <div className='bg-white absolute w-[18rem] h-[11rem] rounded-lg '>
            <div className='p-[2rem] pb-0'>
              <p className='font-semibold text-[13px]'>{errMsg}</p>
            </div>
            <div className='flex pt-[2rem] justify-start gap-4 pl-[22px]'>
              <div className='border w-[7rem] h-[40px] rounded-lg text-center pt-2 text-[13px] border-slate-600' 
              onClick={()=>{
                setModalStatus(false)
              }}>닫기</div>
              <div className='border w-[7rem] h-[40px] rounded-lg text-center pt-2 text-[13px] bg-black text-white' onClick={()=>router.push('/login')}>로그인</div>
            </div>
          </div>
        </div>
      </div>
      :null
    }
    </>
  )
}

export default LoginCheckModal