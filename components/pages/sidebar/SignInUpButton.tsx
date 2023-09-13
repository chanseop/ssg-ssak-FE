import React from 'react'
import styles from '@/components/widget/SideMenu.module.css'
// import Logo from '@/components/ui/header/Logo'
import Link from 'next/link'

function SignInUpButton() {
  return (
    <>
      {/* 로그인 회원가입 버튼 div */}
      <div className={styles.lnb_top}>
          <div className={styles.top_cnt}>
            <div className={styles.app_btn_box}>
              <p className={styles.login_txt}>로그인해 주세요.</p>
            </div>
            <div className={styles.bnt_box}>
              <Link className={styles.btn_primary} href={"/login"}>로그인</Link>
              <Link className={styles.btn0} href={"/member/join"}>회원가입</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignInUpButton