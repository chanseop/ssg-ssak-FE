'use client'
import React, { useEffect, useState } from 'react'
import DropDownMenu from './DropDownMenu';
import { SideMenuListType } from '@/types/sidemenu/SideMenuListType';
import { loginSideMenu } from '@/datas/sidebar/loginSideMenuData';





function LoginSideMenu() {
  // const [data,setData]=useState<SideMenuListType[]>([]);

  
  // useEffect(() => {
  //   const getMyData = () => fetch('http://localhost:9000/mypage')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data)
  //   })
  //   getMyData()
  // }, [])
  // console.log(data);
  
  
  return (
    <div className='pt-[40px] px-[20px] pb-[35px]'>
      <h3 className='pb-2 text-[15px] font-semibold border border-white border-b-black'>마이페이지</h3>
      {
        loginSideMenu.map((item:SideMenuListType,idx)=>(
          <DropDownMenu 
            key = {idx}
            innerData = {item}
          />
        ))
      }
    </div>

  )
}

export default LoginSideMenu


