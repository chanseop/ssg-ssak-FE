'use client'

import React from 'react'
import {Switch} from "@nextui-org/switch";

function serviceagree() {

  return (
    <div>

      <div className='px-[20px] pt-[40px] pb-[8px] font-medium'>
        <strong>신세계포인트 제휴사간 통합 서비스</strong>
      </div>

      <div className='flex justify-between px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col w-[284px]'>
          <p className='h-[48px] text-sm'>
            [선택] 신세계포인트↔SSG.COM 옴니버스를 위한 개인정보 제공 동의
          </p>
          <div className='mt-[4px] text-xs text-gray-500'>
          내용보기 {'>'}
          </div>
        </div>
        <div>
            <button>
            <Switch defaultSelected color="danger"></Switch>
            </button>
          </div>
      </div>

      <div className='px-[20px] py-[6px] text-[11px] text-gray-500 bg-[#f5f5f5]'>
          변경일:2023년 08월 21일
      </div>

        <div className='pt-[40px] pl-[20px] pb-[10px] font-semibold text-[14px]'> 
          <strong>사이트 이용 약관 동의</strong>
        </div>

        <div className='flex flex-1 flex-wrap justify-between px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>

            <div className='flex-col items-center leading-6'>
              <p className='text-[12px] font-medium'>이마트 사이트 이용 약관 <br /> emart.com</p>
              <p className='mt-[4px] text-xs text-gray-500'>내용보기{' >'}</p>
            </div>

            <div>
              <button>
              <Switch defaultSelected color="danger"></Switch>
              </button>
            </div>

        </div>

        <div className='px-[20px] py-[6px] text-[11px] text-gray-500 bg-[#f5f5f5]'>
          변경일:2023년 08월 21일
      </div>

      <div className='flex flex-1 flex-wrap justify-between px-[20px] py-[16px] border-t border-t-[#e5e5e5]'>
        <div className='flex-col items-center leading-6'>
          <p className='text-[12px] font-medium'>신세계백화점 사이트 이용 약관 <br />shinsegae.com</p>
          <p className='mt-[4px] text-xs text-gray-500'>내용보기{' >'}</p>
        </div>

        <div>
          <button>
          <Switch defaultSelected color="danger"></Switch>
          </button>
        </div>
      </div>

        <div className='px-[20px] py-[6px] text-[11px] text-gray-500 bg-[#f5f5f5]'>
          변경일:2023년 08월 21일
        </div>

  <div className='pt-[32px] pb-[80px] px-[32px]'>
    <div>
      <h3 className='text-[12px] pb-[8px]'>[유의사항]</h3>
    </div>
    <div className='text-[10px]'>
      <li>관련 법령에 의거하여 동의는 언제든지 수정하실 수 있습니다.</li>
      <li className='mt-[4px]'>스위치를 클릭하여 활성화 모드이면 동의한 것으로, 비활성화 모드이면 거절한 것으로 반영됩니다.</li>
      <li className='mt-[4px]'>SSG.COM 가입을 하셔야 통합 서비스 제공이 가능하며, SSG.COM 휴면회원이 되시면 개인정보는 제공되지 않습니다.</li>
      <li className='mt-[4px] text-[#eb0000]'>개인정보 제3자 제공 및 활용 동의에 동의하지 않으시더라도 신세계포인트의 기본 서비스는 이용하실 수 있습니다.</li>
      <li className='mt-[4px]'> 이마트 또는 신세계백화점을 통해 신세계 유니버스 클럽에 가입한 회원의 경우, 해당 클럽을 먼저 탈회해 주셔야 각 사이트 이용 동의 철회가 가능합니다. <br /> 클럽 탈회는 가입처에 문의해 주세요.</li>
    </div>
  </div>

    </div>
  )
}

export default serviceagree