import React from 'react'
import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'
import { SignupType } from '@/types/signup/SignupType'

function SignupSuccess(props: {signUpData: SignupType, setSignUpData: React.Dispatch<React.SetStateAction<SignupType>>}) {
  const iafter="after:bg-[url('/images/signup/ilogo.png')] after:bg-[98%_auto]"
  const { signUpData, setSignUpData } = props;

  return (
    <section>
      {/* TODO:커스텀 UI사용 */}
      {/* 가입완료및 사용자 환영멘트 */}
      <div className='px-5'>
        <div className='relative'>
          <p className='text-[18px] leading-5 mt-2 font-medium'>
            <strong>{signUpData.userName}</strong>
            , {signUpData.userId} ID로<br/>
            <span>신세계포인트 <strong>통합 회원 가입</strong>이</span><br/>
            완료되었습니다.
          </p>
        </div>
      </div>

      <div className='p-5'>
        <div className='border-b-2 border-b-black text-[17px] font-semibold leading-9 pb-2'>회원정보</div>
        <div className='pt-4 text-[12px]'>
          <p className='pb-3'>
            <strong>휴대폰 번호</strong>
            <br />
            {signUpData.phoneNumber}
          </p>
          <p className='pb-3'>
            <strong>주소</strong>
            <br />
            {signUpData.zonecode} <br />
            {signUpData.address} <br />
            {signUpData.detailaddress}
          </p>
          <p className='pb-3'>
            <strong>이메일</strong>
            <br />
            {signUpData.email} <br />
          </p>
        </div>
      </div>

      <div className='p-5'>
        <div className='border-b-2 border-b-black text-[17px] font-semibold leading-7'>광고정보 수신동의 <br />동의일자 2023.09.04</div>
        <div className='pt-4 text-[12px]'>
          <p className='pb-3'>
            <strong>동의</strong>
            <br />
            이메일, 문자, DM, TM
          </p>
          <p className='pb-3'>
            <strong>비동의</strong>
          </p>
        </div>
      </div>

      <div className=' p-4'>
        <div className='pb-4 font-medium'>
          <strong>{signUpData.userName}</strong>님, <br />
          통합 ID로 더 다양한 서비스를 <br />
          이용할 수 있습니다.
        </div>
        <div className='flex bg-[#f7a65b] rounded-lg w-full h-[40px] gap-4'>
          <Image 
          src='/images/signup/emart.png'
          alt='이마트로고'
          width={94}
          height={156}
          ></Image>
          <p className='text-[12px] font-semibold py-3'>이마트</p>
        </div>
      </div>
    </section>
  )
}

export default SignupSuccess