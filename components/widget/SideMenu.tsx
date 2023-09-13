'use client'

import React, { useEffect } from 'react'
import styles from './SideMenu.module.css'
import Logo from '../ui/header/Logo'
import { usePathname } from 'next/navigation'
import SignInUpButton from '../pages/sidebar/SignInUpButton'
import FavoriteMenu from '../pages/sidebar/FavoriteMenu'
import SideBarMenuWrap from '../pages/sidebar/SideBarMenuWrap'
import Image from 'next/image'
import LogouMypageButton from '../pages/sidebar/LogouMypageButton'

function SideMenu(props: {isLogin:Boolean, isOpened: Boolean, setIsOpened:React.Dispatch<React.SetStateAction<Boolean>>}) {
	
	const {isOpened, setIsOpened}=props
  const isLogin=props.isLogin;
  const pathname=usePathname();
  

  useEffect(()=>{
    if(isOpened===true){
      setIsOpened(!isOpened)
    }
  },[pathname])
  
  
  return (
		<>
      {/* opacity div */}
      <div className={isOpened ? styles.overlay : ''} onClick={()=>setIsOpened(!isOpened)}>
			</div>
      {/* sidemenu 안에 div */}
      <div className={isOpened ? `${styles.sidemenuwrap} ${styles.open} scrollbar-hide` : `${styles.sidemenuwrap}` }>
        <div className={`${styles.lnb_header} flex justify-between`}>
          <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'} />
          <div className='pr-6' onClick={()=>setIsOpened(!isOpened)}>
            <Image
            src="/images/sidemenu/ximage.png"
            alt='닫힘버튼'
            width={15}
            height={15}></Image>
          </div>
        </div>

        {/* 로그인 회원가입 버튼 div */}
        {
          isLogin
          ?
          <LogouMypageButton/>
          :
          <SignInUpButton/>
        }
        {/* 즐겨찾기 div */}
        <FavoriteMenu />
        {/* 메뉴 리스트 */}
        <SideBarMenuWrap isLogin={isLogin}/>

			</div>
      
    </>
    
  )
}

export default SideMenu