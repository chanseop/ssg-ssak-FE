'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/components/widget/SideMenu.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoginCheckModal from '@/components/ui/modal/LoginCheckModal'

function FavoriteMenu() {
  const [isLogin, setIsLogin] =useState<Boolean>(false)
  const session=useSession();
  const router=useRouter();
  const [modaltext,setModalText]=useState<string>("");
  const [modalIsOpen,setModalStatus]=useState<boolean>(false)
  const modalStatus=(modaltext:string,modalIsOpen:boolean)=>{
    setModalText(modaltext)
    setModalStatus(modalIsOpen)
  }

  useEffect(()=>{
    setIsLogin(session.status==="authenticated")
  },[session])

  return (
    <>
      <LoginCheckModal errMsg={modaltext} modalStatus={modalIsOpen} setModalStatus={setModalStatus}/>
      <div className='lnb_favorite bg-[#fff9ea] relative pt-[26px] pb-[24px]'>
          <div className='lnb_favorit_list px-[10px]'>
            <div className='favorit_list_cnt flex'>
              <div className={styles.menu_box}>
                <div className={styles.menu} onClick={isLogin?()=>router.push("/mypoint/pnthistory"):()=>router.push("/login")}>
                  <Image
                  src="/images/sidemenu/point_image.png"
                  alt="포인트 내역"
                  width={40}
                  height={40}
                  ></Image>
                  포인트 내역
                </div>
              </div>
              <div className={styles.menu_box}>
                <div className={styles.menu} onClick={isLogin?()=>router.push("/mypoint/chgpntpwdcert"):()=>router.push("/login")}>
                  <Image 
                  src="/images/sidemenu/point_pw_change.png"
                  alt="포인트 비밀번호 변경"
                  width={40}
                  height={40}
                  ></Image>
                  포인트 비밀번호 변경
                </div>
              </div>
              <div className={styles.menu_box}>
                <div className={styles.menu} onClick={isLogin?()=>router.push("/mylounge/receipt"):()=>router.push("/login")}>
                  <Image
                    src="/images/sidemenu/smart_reciept.png"
                    alt="스마트 영수증"
                    width={40}
                    height={40}
                    ></Image>
                    스마트 영수증
                </div>
              </div>
            </div>
          </div>
          
          <div className='select_txt_box pt-[18px] pb-[58px] h-[80px] mx-[24px] border-dashed border-[1px] border-[#f8b404] flex'>
            <button className='ico_btn ml-2 boder-solid border-[1px] left-[10px] border-[#f8b404] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
              <div onClick={isLogin ? ()=>null : ()=>modalStatus("로그인 해주세요.",true)}>
                <Image 
                  src="/images/sidemenu/favorit_plus.png"
                  alt="즐겨찾기 메뉴 선택"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </button>
            <span className='txt text-[11px] ml-[6px] leading-5 tracking-[-.5px] font-[500]'>
              <button className='txt_line0 text-[13px] font-[700] bg-[#f1d284]'>즐겨찾기 메뉴 선택</button>
              에서<br/>
              나만의 즐겨찾기 메뉴를 설정할 수 있어요!
            </span>
          </div>
        </div>
    </>
  )
}

export default FavoriteMenu