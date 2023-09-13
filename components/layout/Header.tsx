'use client'
import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import { usePathname } from 'next/navigation';
import { eventsLayoutData } from '@/datas/event/eventLayoutData';
import ThreeHeaderBottom from './ThreeHeaderBottom';
import { MypointLayoutData } from '@/datas/mypoint/MypointLayoutData';
import OverflowHeaderBottom from './OverflowHeaderBottom';
import { MyinfoLayoutData } from '@/datas/myinfo/myinfoLayoutData';
import { BenefitsLayoutData } from '@/datas/benefits/BenefitsLayoutData';
import { MyloungeLayoutData } from '@/datas/mylounge/MyloungeLayoutData';
import { SpointLayoutData } from '@/datas/spoint/SpointLayoutData';
import { MembershipLayoutData } from '@/datas/membership/MembershipLayoutData';
import { MypageLayoutData } from '@/datas/mypage/MypageLayoutData';

function Header() {
  const pathname=usePathname().split('/')[1];
  // console.log(pathname);
  
  return (
    <header className='main_header'>
      <HeaderTop/>
      {
        pathname==="" || pathname==="couponpage"
        ? <HeaderBottom/>     //true 홈 헤더 바텀 가져오기
          
        : pathname==="event"  //false일때는 pathname이 event 인가? 다시 3항 연산자
        ? <ThreeHeaderBottom data={eventsLayoutData}/>  //true 이면 eventbottom가져오고

        : pathname==="mypoint"        // false이면 pathname이 mypoint냐?
        ? <OverflowHeaderBottom data={MypointLayoutData}/>  //true 이면 mypointbottom가져오고

        : pathname==="benefits"
        ? <OverflowHeaderBottom data={BenefitsLayoutData}/>

        : pathname==="mylounge"
        ? <OverflowHeaderBottom data={MyloungeLayoutData}/>

        : pathname==="spoint"
        ? <OverflowHeaderBottom data={SpointLayoutData}/>

        : pathname==="membership"
        ? <OverflowHeaderBottom data={MembershipLayoutData}/>

        : pathname==="mypage"
        ? <OverflowHeaderBottom data={MypageLayoutData}/>

        : pathname==="myinfo"
        ? <OverflowHeaderBottom data={MyinfoLayoutData}/> //true 이면 myinfobottom가져오고
        :null    //false이면 null

      }
      
    </header>
  )
}

export default Header