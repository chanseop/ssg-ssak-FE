'use client'
import React, { useEffect, useState } from 'react'
import {usePathname} from 'next/navigation'
import Logo from '@/components/ui/header/Logo'
import Link from 'next/link'
import HeaderUserStatus from './HeaderUserStatus'
import SideMenu from '../widget/SideMenu'
import HeaderPathName from '../ui/header/HeaderPathName'
import BottomCard from './BottomCard'
import { useSession } from 'next-auth/react'
import { userType } from '@/types/user/userType'


export default function HeaderTop() {
  const [isLogin, setIsLogin] =useState<Boolean>(false)
  const [isOpened, setIsOpened] =useState<Boolean>(false)
  const [bottomCard,setBottomCard]=useState<string>("hidden")

  const [user,setUser]=useState<userType>(
    {
      userName:"",
      userBarcodeNumber:"0"
    }
  );
  const pathname = usePathname();
  const session=useSession();
  const token=session.data?.user["token"]
  
  const [point,setPoint]=useState<number>(-1);
  const getPoint = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/point/possible`,{
          method:'GET',
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then(response=>response.json())
        .then(data=>{
          // console.log(data);
          setPoint(data.possiblePoint)
        })

    } catch (error) {
        console.log('point/possible 에러나면 이쪽으로');
        
    }
  }
  const getFetch = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user`,{
          method:'GET',
          headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
          }
        })
        .then(response=>response.json())
        .then(data=>setUser(data))
        
    } catch (error) {
        // console.log(error);
    }
  }
  
  // console.log(user);
  
  
  useEffect(()=>{
    if(!token) return
    getFetch()
    getPoint()

    setIsLogin(session.status==="authenticated")
    if(isOpened) { //조건문은 true
      document.body.style.overflow = "hidden";
      // console.log("222222",isLogin); // isLogin true 
    } else {
      document.body.style.overflow = "auto";
      // console.log("3333",isLogin);
    }
    
  },[isOpened,session])

  

  const handleSideMenu=()=>{
    setIsOpened(!isOpened) //true

  }
  // console.log('44444',isOpened);
  const handleBottomCard=()=>{
    if(bottomCard==="hidden"){
      setBottomCard("")
    }else if(bottomCard===""){
      setBottomCard("hidden")
    }
  }

  return (
    <>
    <SideMenu isLogin={isLogin} isOpened={isOpened} setIsOpened={setIsOpened} user={user} point={point}/>
    <div className='header_top w-auto h-8 flex justify-between items-center pl-4 pr-4'>
      { pathname ==='/'
      ?
      <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'}/>
      : <HeaderPathName pathname={`${pathname}`} />}
      {/* 로그인 및 사이드 메뉴 */}
      <nav className='header_menu'>
        <ul className='flex gap-4 justify-center items-center'>
          <li className='text-sm font-medium'>
            {isLogin ?
            <div onClick={handleBottomCard}>
              <HeaderUserStatus point={point}/>
            </div>
            :<Link href='/login'>로그인</Link>}
          </li>
          <li onClick={handleSideMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none'>
              <path d="M4 5H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 12L20 12" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 19H20" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </li>
        </ul>
      </nav>
      </div>
      <BottomCard bottomCard={bottomCard} setBottomCard={setBottomCard} barcodenumber={user.userBarcodeNumber} point={point}/>
      
    </>
    
  )
}
