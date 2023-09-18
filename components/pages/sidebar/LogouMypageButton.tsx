import React from 'react'
import styles from '@/components/widget/SideMenu.module.css'
// import Logo from '@/components/ui/header/Logo'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { userType } from '@/types/user/userType'

function LogouMypageButton({user,point}:{user:userType,point:number}) {
  return (
    <>
      {/* 로그인 회원가입 버튼 div */}
      <div className={styles.lnb_top}>
          <div className={styles.top_cnt}>
            <div >
              <div className="text-[17px] "><strong>{user.userName}</strong>님 반갑습니다.</div>
              <div className='flex pt-2 text-[24px] font-bold gap-2'>
                {point}
                <div className='bg-[url("https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png")] bg-no-repeat bg-[100%_auto] w-[30px]'></div>
              </div>
            </div>
            <div className={styles.bnt_box}>
              <div className={styles.btn_primary1} onClick={()=>signOut({callbackUrl: '/'})}>로그아웃</div>
              <Link className={styles.btn0} href={"/mypage"}>마이페이지</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default LogouMypageButton