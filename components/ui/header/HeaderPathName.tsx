'use client'

import React from 'react'
import {usePathname, useRouter} from 'next/navigation'
import styles from './HeaderPathName.module.css'
import { HeaderData } from '@/datas/headerdata/HeaderData'

function HeaderPathName(props :{pathname:string}) {
  const {pathname}=props
  const router=useRouter();
  // console.log(pathname);
  
interface HeaderPathnameType {
  id:number,
  pathname: string,
  title: string
}

// TODO:DATA에서 FITTER해서 RETURN 해주기
  const checkPathName=(urlname:String)=>{
    const headername = HeaderData.filter((data:HeaderPathnameType) => data.pathname === urlname);
    // console.log(headername);

    try {
      if((headername[0].title))return headername[0].title
    }
    catch (err) {
      return "otherpathname"
    }
      
  
      
    

    
  }

  const backPage=()=>{
    router.back()
  }

  return (
    <>
    <div>
      <button className={styles.back_btn} onClick={backPage}>뒤로가기</button>
      <h2 className={styles.gnb_tit}>{checkPathName(pathname)}</h2>
    </div>
    
    </>
    
  )
}

export default HeaderPathName