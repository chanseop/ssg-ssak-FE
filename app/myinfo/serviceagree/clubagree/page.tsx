'use client'

import React from 'react'
import {Switch} from "@nextui-org/switch";

function clubagree() {
  return (
    <div>

      <div>
      <p className='text-[10.5px] mt-[20px] ml-[20px] text-[#eb0000]'>
        ※ 각 클럽 서비스별 하단 확인 버튼을 눌러야 변경 내용이 저장됩니다.
      </p>
      </div>


        <div className='px-[20px] pt-[40px] pb-[8px] font-medium text-[15px]'>
        <strong>맘키즈 클럽</strong>
      </div>

      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-[13px] '>
            [선택] 맘키즈 클럽 헤택을 위한 부가 정보 수집 및 이용 동의
          </p>
          <div className='mt-[4px] text-xs text-gray-500'>
          내용보기 {'>'}
          </div>
        </div>
        <div className='toggle_btn ml-[10px] relative'>
        <Switch defaultSelected color="danger"></Switch>
        </div>
      </div>

      <div className='mx-[20px] border-b border-black h-[48px] bg-[#fbfbfb] content-center'>
          <button className='text-sm font-bold px-[110px] py-3.5'>
          나의 자녀 정보 열기
          </button>
      </div>

      <div>
      <ul className='pt-[16px] pb-[24px] px-[20px] text-[#767676]'>
        <li className='pl-[7px] text-[9px]'>맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px]'>자녀 정보는 최대 2명까지 입력하실 수 있습니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px]'>맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
          <br /> (온 오프라인 옴니동의 시 SSG.COM 이용 가능)
        </li>
      </ul>
      </div>
      
      <div  className='btn_box px-[20px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>

      <div>
      <div className='px-[20px] pt-[40px] pb-[8px] font-medium text-[15px]'>
        <strong>차량 서비스</strong>
      </div>

      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-sm'>
            [선택] 차량 서비스 헤택을 위한 부가 정보 수집 및 이용 동의
          </p>
          <div className='mt-[4px] text-xs text-gray-500'>
          내용보기 {'>'}
          </div>
        </div>
        <div className='toggle_btn ml-[10px] relative'>
        <Switch defaultSelected color="danger"></Switch>
        </div>
      </div>

      <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-sm'>
            [선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용 동의
          </p>
          <div className='mt-[4px] text-xs text-gray-500'>
          내용보기 {'>'}
          </div>
        </div>
        <div className='toggle_btn ml-[10px] relative'>
        <Switch defaultSelected color="danger"></Switch>
        </div>
      </div>

      <div className='mx-[20px] border-b border-black h-[48px] bg-[#fbfbfb] content-center'>
          <button className='text-sm font-bold px-[110px] py-3.5'>
          나의 차량 정보 열기
          </button>
      </div>
      
      <div>
      <ul className='pt-[16px] pb-[24px] px-[20px]'>
        <li className='pl-[7px] text-[9px] text-[#767676]'>이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가 자동으로 정산됩니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px] text-[#767676]'>-자녀 정보는 최대 2명까지 입력하실 수 있습니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px] text-[#767676]'>-맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.</li>
        <li className='pl-[7px] text-[9px] mt-[4px] font-semibold'>차량번호는 최대 1대까지 입력이 가능하며, 임시번호 및 외교차량 등 일부 차량번호는 등록되지 않습니다.</li>
      </ul>
      </div>

      <div  className='btn_box px-[20px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>
      
      <div>
      <div className='px-[20px] pt-[40px] pb-[8px] font-medium text-[15px]'>
        <strong>뷰티 클럽</strong>
      </div>

    <div>
        <div className='flex px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
          <div className='flex-col w-[284px]'>
            <p className='text-sm'>
              뷰티 클럽 가입
            </p>
          </div>
          <div className='toggle_btn ml-[10px] relative'>
          <Switch defaultSelected color="danger"></Switch>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div id='brand_info' className='p-[20px] bg-[#fbfbfb]'>
        <strong className='text-[13px] font-semibold'>
          해당브랜드
        </strong>
        <ul id='list_cnt' className='text-[12px]'>
          <li className='mt-[8px] inline-block w-1/3'>아모레퍼시픽</li>
          <li className='mt-[8px] inline-block w-1/3'>이자녹스</li>
          <li className='mt-[8px] inline-block w-1/3'>더샘</li>
          <li className='mt-[8px] inline-block w-1/3'>수려한</li>
          <li className='mt-[8px] inline-block w-1/3'>토니모리</li>
          <li className='mt-[8px] inline-block w-1/3'>더페이스샵</li>
          <li className='mt-[8px] inline-block w-1/3'>이니스프리</li>
          <li className='mt-[8px] inline-block w-1/3'>비욘드</li>
          <li className='mt-[8px] inline-block w-1/3'>미샤</li>
          <li className='mt-[8px] inline-block w-1/3'>엔프라니</li>
          <li className='mt-[8px] inline-block w-1/3'>네이저리퍼블릭</li>
        </ul>
      </div>
    </div>

    <div className='pt-[16px] px-[20px] pb-[24px]'>
      <p className='text-[11px]'>이마트 매장에서 브랜드 화장품 구매 시 신세계포인트 2~5% 추가 적립 혜택을 받을 수 있습니다.</p>
    </div>
    <div  className='btn_box px-[20px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>

      <div>
        <div className='px-[20px] pt-[40px] pb-[8px] font-medium text-[15px]'>
          <strong>비즈 클럽</strong>
        </div>
        <div>
          <ul className='pt-[16px] pb-[24px] px-[20px] text-[#767676] border-t border-t-[#e5e5e5]'>
              <li className='pl-[7px] text-[9px]'>개인 사업자 고객님들을 위한 편리한 세금계산서 발행 서비스입니다.</li>
              <li className='pl-[7px] text-[9px] mt-[4px]'>비즈 클럽 가입 시 등록하신 이메일 주소로 세금계산서가 발송되며, 약 1~2주 정도 소요됩니다.</li>
              <li className='pl-[7px] text-[9px] mt-[4px]'>세금계산서 발행 거래의 포인트 적립 건은 개인 포인트 적립내역에 합산됩니다.</li>
              <li className='pl-[7px] text-[9px] mt-[4px]'>혜택은 이마트 매장에서만 적용됩니다.</li>
          </ul>
        </div>
      </div>

      <div className='btn_box px-[20px] pb-[80px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            비즈 클럽 바로가기
          </button>
        </div>
      </div>


      </div>
      
    </div>
  )
}

export default clubagree