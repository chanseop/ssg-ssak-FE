import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='bg-white border'>
      <div className='footer_box relative p-6'>
        <ul className='terms flex gap-4 pb-5'>
          <Link className='text-sm font-bold' href="/stplat/terms"><li>서비스 이용 약관</li></Link>
          <Link className='text-sm font-bold text-red-700' href="/stplat/policy"><li >개인정보 처리방침</li></Link>
          
        </ul>
        <div className='footer_info mb-5'>
          <p className='block tracking-[0.5px] text-[14px] leading-[1em] pb-2 text-sm font-bold'>신세계포인트 고객센터</p>
          <button className='inline-block text-[27px] leading-[1em] align-top font-semibold tracking-normal'>1899-4349</button>
          <p className='inline-block text-xs line-height font-semibold mt-[-27px] ml-[16px]'>
            운영시간
            <span> : </span>
            <em> 09</em>
            시 - 
            <em> 18</em>
            시
            <br />
            점심시간 
            <span> : </span>
            <em>12</em>
            시 -
            <em>13</em>
            시
            <br />
            (공휴일 제외)
          </p>
        </div>

        <div className='txt_cnt text-[11px] mr-[9px] text-slate-600 mb p-[3px] leading-5'>
          <p className='txt pb-1'>
            <span className='txt0 block'>㈜이마트 서울시 중구 세종대로 7길 37(순화동)</span>
            <span className='txt1 inline-block align-top mr-[9px]'>대표자 : 강희석</span>
            <span className='txt2 inline-block align-top'>사업자등록번호 : 206-86-50913</span>
          </p>
          <p className='copyright text-[10px]'>COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.</p>
        </div>
        
        <div className='wa_mark absolute bottom-8 right-4'>
          <Link href="http://www.wa.or.kr/board/list.asp?BoardID=0006">
            <Image className='w-[67px]' 
            src="https://m.shinsegaepoint.com/img/wa_mark.144ed89e.png" 
            alt="(사)한국장애인단체총연합회 한국웹접근성인증평가원 웹 접근성 우수사이트 인증마크 (WA인증마크)" 
            width={100}
            height={100}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer