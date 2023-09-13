'use client'
import { ErroLogoInFormType } from '@/types/login/errorType';
import { LogInFormDataType } from '@/types/login/formType';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function LoginForm() {

  const query = useSearchParams();
  const callBackUrl = query.get('callbackUrl');
  const router = useRouter();

  const [loginData, setLoginData] = useState<LogInFormDataType>({
    loginId: '',
    password: '',
    isAutoId: false,
    isAutoLogin: false
  });

  const [errorText, setErrorText] = useState<ErroLogoInFormType>({
    loginId: '',
    password: '',
  });

  const [pwType, setPwType] = useState<boolean>(true);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if(name === 'isAutoId' || name === 'isAutoLogin') {
      // console.log(name, e.target.checked)
      setLoginData({
        ...loginData,
        [name]: e.target.checked
      })
    } else {
      // console.log(name, value)
      setLoginData({
        ...loginData,
        [name]: value
      })
      setErrorText({
        ...errorText,
        [name]: ''
      })
    }
  }

  const handleLocalStorage = (loginId: String) => {
    localStorage.setItem('autoLogin', loginId.toString())
  }

  const handlePwType = () => {
    setPwType(!pwType)
  }

  const handleLoginFetch = async () => {
    let errText: ErroLogoInFormType = {
      loginId: '',
      password: '',
    }
    if(loginData.isAutoId) handleLocalStorage(loginData.loginId)
    if(loginData.loginId === '' || loginData.loginId === undefined) errText.loginId = '아이디를 입력해주세요'
    if(loginData.password === '' || loginData.password === undefined) errText.password = '비밀번호를 입력해주세요'
    if(errText.loginId !== '' || errText.password !== '') {
      setErrorText(errText)
      return
    } else {
      // console.log(loginData)
      const result = await signIn('credentials', {
        loginId: loginData.loginId,
        password: loginData.password,
        redirect: true,
        callbackUrl: callBackUrl ? callBackUrl : '/'
      })
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const autoLogin = localStorage.getItem('autoLogin') || '';
      console.log("localStorage",autoLogin.length > 0 ? autoLogin : 'no data');
      if(autoLogin) {
        setLoginData({
          ...loginData,
          loginId: autoLogin,
          isAutoId: true
        })
      }
    }    
  },[])

  return (
    <>
      <form className='flex flex-col gap-3 w-full pt-10'>
        <input 
          type="text" 
          name="loginId" 
          id="loginId" 
          placeholder='아이디' 
          className='w-full rounded-3xl bg-white p-3 text-sm border border-black-500'
          defaultValue={loginData.loginId}
          onChange={handleOnChange}
        />
        <p className='text-red-500 text-xs'>{errorText.loginId}</p>
        <input 
          type={pwType ? 'password' : 'text'}
          name="password" 
          id="password" 
          className='w-full rounded-3xl bg-white p-3 text-sm border border-black-500'
          onChange={handleOnChange}
        />
        <p className='text-red-500 text-xs'>{errorText.password}</p>
        <button className='absolute right-16 top-[276px]' type="button" onClick={handlePwType}>
          <Image src="/images/login/pwhidden.jpg" alt="비밀번호 hidden" width={20} height={20} />
        </button>
        <div className='flex justify-between'>
          <div className='flex justify-start items-center gap-3'>
            <input 
              className='w-[22px] h-[22px] rounded-full checked:bg-[url("/images/login/checkLogo.jpg")] checked:bg-[12px_] checked:bg-[top_5px_left_4px] checked:bg-black checked:bg-no-repeat appearance-none border border-black cursor-pointer'
              type="checkbox" 
              name="isAutoId" 
              id="isAutoId" 
              checked={loginData.isAutoId&&true}
              onChange={handleOnChange}
            />
            <label className='text-[13px] font-bold' htmlFor="isAutoId">아이디 저장</label>
          </div>
          <div className='flex justify-start items-center gap-3 pr-11'>
            <input 
              className='w-[22px] h-[22px] rounded-full checked:bg-[url("/images/login/checkLogo.jpg")] checked:bg-black checked:bg-no-repeat checked:bg-[12px_] checked:bg-[top_5px_left_4px] appearance-none border border-black cursor-pointer'
              type="checkbox" 
              name="isAutoLogin" 
              id="isAutoLogin" 
              onChange={handleOnChange}/>
            <label className='text-[13px] font-bold' htmlFor="isAutoLogin">자동 로그인</label>
          </div>
        </div>
        <button type="button" className='w-full rounded-3xl bg-linear_110 text-black p-3 text-lg font-extrabold mt-5 border border-black-500' onClick={handleLoginFetch}>
          로그인
        </button>
        <ul className='flex justify-evenly text-center pt-8 font-bold text-sm'>
          <li className='border border-white border-r-slate-200 pr-6' onClick={()=>router.push("/member/findidpw")}>아이디찾기</li>
          <li className='border border-white border-r-slate-200 pr-6' onClick={()=>router.push("/member/findpw")}>비밀번호 찾기</li>
          <li onClick={()=>router.push("/member/join")}>회원가입</li>
        </ul>
        {/* <p>LOGIN ID : {loginData.loginId}</p>
        <p>PASSWORD : {loginData.password}</p>
        <p>IS AUTO ID : {loginData.isAutoId ? 'true' : 'false'}</p>
        <p>IS AUTO LOGIN : {loginData.isAutoLogin ? 'true' : 'false'}</p> */}
      </form>
      <div className='px-2 py-20 '>
        <h3 className='font-bold text-sm pb-4'>간편 로그인</h3>
        <ul className='flex justify-between pt-3'>
          <li className='bg-[url("/images/login/oauthlogo.png")] bg-[left_0px_top_-56px] relative block overflow-hidden bg-[99%_auto] w-12 h-12 cursor-pointer' onClick={()=>router.push('https://www.naver.com')}></li>
          <li className='bg-[url("/images/login/oauthlogo.png")] bg-[left_0px_top_-113px] relative block overflow-hidden bg-[99%_auto] w-12 h-12 cursor-pointer' onClick={()=>router.push('https://www.kakaocorp.com/')}></li>
          <li className='bg-[url("/images/login/oauthlogo.png")] bg-[left_0px_top_-169px] relative block overflow-hidden bg-[99%_auto] w-12 h-12 cursor-pointer' onClick={()=>router.push('https://www.apple.com/')}></li>
        </ul>
      </div>
    </>
  )
}

export default LoginForm