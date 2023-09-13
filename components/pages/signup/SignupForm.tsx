'use client'
import SnsAcceptCert from '@/components/ui/cert/SnsAcceptCert'
import Linearbutton from '@/components/ui/button/Linearbutton'
import React, { useState } from 'react'
import SignUp from '@/components/pages/signup/Signup'
import { SignupType } from '@/types/signup/SignupType'




function SignupForm(props: {signUpData: SignupType, setSignUpData: React.Dispatch<React.SetStateAction<SignupType>>}) {

  const iafter="after:bg-[url('/images/signup/ilogo.png')] after:bg-[98%_auto]"

  const {signUpData,setSignUpData}=props;

  

  const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;

    if( name === "phoneNumber" || name === "address" || name === "email" || name === "phone"){
      // console.log('111',name,value);
      
      setSignUpData({
        ...signUpData,
        [name]:value
      })
    } else {
      // console.log('222',name,value);
      setSignUpData({
        ...signUpData,
        [name]:value
      })
    }
  }

  return (
    <section>
      <form className='px-6 pb-10'>
        {/* 아이디 입력칸 */}
        <div>
          <p className='text-[14px] font-semibold'>아이디
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-[80%]'>
              <input onChange={handleOnChange} name='userId' className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="text" placeholder='영문,숫자 6~20자리 입력해주세요.'/>
              
            </div>
            <div className='rounded-lg w-20 h-11 text-center border mt-[10px] text-[13px] font-semibold border-[#EAEAEA]'>중복확인</div>
          </div>
        </div>
        
        {/* 비밀번호 입력칸 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>비밀번호
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full'>
              <input onChange={handleOnChange} name='userPassword' className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={6} maxLength={20} type="password" placeholder='영문,숫자 6~20자리 입력해주세요.'/>
              
            </div>
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>비밀번호 확인
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full'>
              <input onChange={handleOnChange} name='checkPassword' className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px]' minLength={8} maxLength={20} type="password" placeholder='대/소문자,숫자,특수문자 중 3가지 이상을 조합하여 8~20자리 입력해주세요.'/>
              
            </div>
          </div>
        </div>

        {/* 이름 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>이름
          <span className='text-red-500'>*</span>
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px] h-[48px] rounded-lg w-full '>
              <input onChange={handleOnChange} name='userName' className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' readOnly defaultValue={signUpData.userName} maxLength={20} type="text" placeholder='이름을 입력해주세요.'/>
              
            </div>
          </div>
        </div>

        {/* 휴대폰번호 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>휴대폰번호
          </p>
          <div className='flex justify-between gap-2'>
            <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full'>
              <input onChange={handleOnChange} name='phoneNumber' className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' readOnly defaultValue={signUpData.phoneNumber} placeholder='휴대폰번호를 입력해주세요.'  maxLength={20} type="number" />
            </div>
          </div>
        </div>
        
        {/* 이메일 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>이메일주소
          </p>
          <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full'>
            <input onChange={handleOnChange} name="email" className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' placeholder='이메일' type="email" />
          </div>
        </div>

        {/* 주소입력 */}
        <div className='pt-6'>
          <p className='text-[14px] font-semibold'>자택주소
          <span className='text-red-500'>*</span>
          </p>
          <SignUp signUpData={signUpData} setSignUpData={setSignUpData}/>
          <div className=' mt-2 border-[2px]  h-[48px] rounded-lg w-full'>
            <input onChange={handleOnChange} name="detailaddress" className=' text-[12px] font-semibold align-middle w-full pl-3 h-[45px] ' placeholder='상세주소' type="text" />
          </div>
        </div>
      </form>
      <SnsAcceptCert/>
    </section>
  )
}

export default SignupForm