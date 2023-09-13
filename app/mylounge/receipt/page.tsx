'use client'

import React from 'react';
import { useState } from 'react';
import Linearbutton from '@/components/ui/button/Linearbutton';
import Image from 'next/image';
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal';

function receipt() {

/*   const[Checked, setChecked]=useState<boolean>(false);

  const handleCheck=()=>{
    setChecked(!Checked)
  } */

  const [termsChecked, setTermsChecked] = useState(false);
  const [CheckboxDisabled, setCheckboxDisabled] = useState(true);

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);

    if (!termsChecked) {
      setCheckboxDisabled(false);
    } else {
      setCheckboxDisabled(true);
    }
  };


  const filterImage="after:w-[20px] after:h-[19px] after:bg-[url('/images/mypoint/filterImage.png')] after:bg-cover after:bg-no-repeat after:inline-block"
  const plusLogo='before:bg-[url("/images/mypoint/plusLogo.jpg")] before:bg-cover before:bg-center before:bg-[length:7px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const minusLogo='before:bg-[url("/images/mypoint/minusLogo.jpg")] before:bg-auto before:bg-center before:bg-[length:16px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const noTxtLogo="after:absolute after:left-[50%] after:w-[48px] after:h-[48px] after:bg-[url('/images/mypoint/noTxtLogo.jpg')] after:bg-cover after:translate-x-[-50%] after:top-0"

  const noclick="border inline-block w-full h-[49px] text-center leading-[49px] bg-white"
  const clickred="border inline-block w-full h-[49px] text-center leading-[49px] text-white bg-[#ea035c]"
  return (
    <>
      <LoginRedirectModal/>    
      <div className='mt-[105px]'>
        <div className='px-[20px] py-[40px]'>
          <p className='text-[20px]'>    
            <strong className='font-semibold text-[#ea035c]'>
              가맹점 영수증
            </strong>
              모두 모여라!
          </p>
          <dt className='text-[13px] pt-[8px] text-gray-500 leading-[24px]'>
              신세계포인트를 적립했다면?
            <br />
              가맹점에서 쇼핑한 영수증을
            <br />
              한곳에 모아 스마트하게 확인하세요.
          </dt>
        </div>
      </div>

    {/* TODO : 체크박스 상태관리 필요 */}
    <div className='lounge_box2 px-[20px] pb-[25px]'>
      <ul className='agree_list_bnt h-10'>
        <li className='agree_form relative'>
          <div className='check_box'>
            <input id='checkbox1' className='align-middle w-[20px] h-[20px] appearance-none border rounded-full checked:bg-black border-black' type ="checkbox" checked={termsChecked}
            onChange={handleTermsChange} />
            <label className='pl-[10px] align-top'>
              <span className='text-[11px] font-semibold'>[선택] 전자영수증 조회를 위한 제 3자 제공동의</span>
            </label>
          </div>
            <button className='absolute right-0 bottom-1/2 w-[6px] h-[6px]'>
            <span className='relative box-border opacity-50'>
              <Image
                src={`/images/mylounge/vector.png`}
                alt='내용보기'
                width={6}
                height={6}>
              </Image>
            </span>
          </button>
        </li>
      </ul>

      <div className='check_box'>
        <input id='checkbox2'  disabled={CheckboxDisabled}
        className={`align-middle w-[20px] h-[20px] appearance-none border rounded-full checked:bg-black border-black `}
        type ="checkbox" /*{Checked? disabled:null}*//>
          <label className='pl-[10px] align-top'>
            <span className='text-[11px] font-semibold '>전체 선택</span>
          </label>
      </div>

      <div className='brand_info mt-[20px] mb-[25px]' >
        <ul id='list_cnt' className='text-[11px] text-[#767676]'>
        
          <div className='border inline-block w-1/3 h-[49px]'>
            <label className='border inline-block w-full h-[49px] text-center leading-[49px]'>
            <input type="checkbox"  disabled={CheckboxDisabled}
            className='appearance-none absolute left-5 w-[116px] h-[49px] text-center leading-[49px] checked:-z-1 checked:bg-[#ea035c] checked:text-white' />
            <span>(주)신세계푸드</span>
            </label>
          </div>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)신세계사이먼</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)신세계조선호텔</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)이마트</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)신세계</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)이마트에브리데이</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)이마트24</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)스타필드</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)신세계L&B</li>
          <li className='border inline-block w-1/3 h-[49px] text-center leading-[49px]'>(주)에스에스지닷컴</li>
        </ul>
      </div>
      <Linearbutton contents='저장하기' url='/'/>
    </div>



    <div className='px-[20px] pb-[40px]'>
      <div className='class_sch flex py-[14px] pr-[6px] items-center justify-between'>
          <div className='sort_select mr-[5px]'>
            <select className='z-[2px] h-[30px] pr-8 pl-[6px] text-[13px]' title="영수증 조회 기간 선택">
              <option value="7">1주일</option>
              <option value="1">1개월</option>
              <option value="3">3개월</option>
              <option value="6">6개월</option>
            </select>
          </div>
          <div className='term text-[12px] from-neutral-400 pr-10'>
            <p>2023-07-25 ~ 2023-08-25</p>
          </div>
          <button className='relative'>
            <span className={`top-0 h-0 font-[1px] left-[-999rem] indent-[-999em] overflow-hidden ${filterImage}`}></span>
          </button>
        </div>
      
        <div className='point_wrap'>
          {/* 포인트 내역 총 적립과 사용 */}
          <div className='point_total flex items-center bg-[#f8f8f8] h-9 px-2'>
            <p className={`mr-4 text-[#ea035c] text-[13px] font-semibold align-top ${plusLogo}`}>
              <span>적립</span>
              <span>0P</span>
            </p>
            <p className={`mr-4 text-[13px] font-semibold align-top ${minusLogo}`}>
              <span>사용</span>
              <span>0P</span>
            </p>
          </div>
        </div>

        <div className='brand_use_wrap02 border-b'>
          <div className='text-[#767676] align-middle text-center px-0 text-[12px] font-semibold break-keep py-[40px]'>
            <p className={`relative pt-16 ${noTxtLogo}`}>
            스마트 영수증 내역이 없습니다.
            </p>
          </div>
      </div>
    </div>

    <div className='pt-[32px] pb-[80px] px-[20px] bg-[#FBFBFB]'>
        <h3 className='text-[13px] pb-[8px] font-bold'>[유의사항]</h3>
        <li className='text-[11px] pl-[7px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>신세계포인트 제휴사 중 '전자 영수증 정보 제공 가능 제휴사'에 한해 제공됩니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>서비스 이용 동의 시 선택하신 제휴사에 한해 영수증 조회가 가능하며 서비스 해제 및 제휴사 선택을 변경하실 수 있습니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>스마트 영수증은 신세계포인트 적립 또는 사용한 구매 내역만 조회되며 포인트 선물 및 전환, 상품권 구매 내역은 제공되지 않습니다.
        </li>
      </div>
    </>
  )
}

export default receipt