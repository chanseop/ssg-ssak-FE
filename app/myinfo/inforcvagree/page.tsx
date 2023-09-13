'use client'
import { useState } from 'react';
import Link from 'next/link'
import React from 'react'

function page() {

  const data = [
    {id: 1, title: '이메일'},
    {id: 2, title: '문자'},
    {id: 3, title: 'DM'},
    {id: 4, title: 'TM'}
  ];

    // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState<number[]>([]);

    // 체크박스 단일 선택
  const handleSingleCheck =  (checked:any, id:number) => {
    if (checked) {
    // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
    // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !==id));
    }
  };

    // 체크박스 전체 선택
  const handleAllCheck = (checked:any) => {
    if(checked) {
    // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray:any = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
    // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  return (
  <div className='mt-[109px] font-sans'>
        <div className='px-[20px] py-[40px] border-t'>
          <strong className='text-[18px] text-[#ea035c] font-bold'>
            나에게 딱 알맞는 정보
          <span className='text-black'>
            를 원한다면-
          </span>
          </strong>
      <dt className='text-[13px] pt-[8px] text-gray-500'>
          광고정보 수신동의를 하시면 신세계포인트의
          <br />
          다양한 혜택과 소식을 받으실 수 있습니다.
      </dt>
        </div>

      <div className='px-[20px] pb-[40px]'>
        <h1 className='border-b border-black pb-[12px] font-bold text-[15px]'>
          등록된 연락처 정보를 확인하세요.
        </h1>
      <dt className='text-[12px] pt-[16px] font-semibold'>
        휴대폰 번호
      </dt>
      <dl className='text-[12px] pb-[16px] text-gray-500'>010-1234-1234</dl>
      <dt className='text-[12px] pb-[16px] font-semibold'>
        이메일
      <dl className='text-[12px] pb-[16px] text-gray-500'>jskim4695@naver.com</dl>
      </dt>
      <dt className='text-[12px]'>
        주소
      <dl className='text-[12px] text-gray-500'>부산 강서구 신호산단1로,*****</dl>
      </dt>
        </div>

    <div className='px-[24px] py-[20px] mx-[20px] border rounded-[8px] shadow-[0_3px_8px_rgba(0,0,0,.08)]'>
      <strong className='text-[13px]'>
        연락처 정보 변경이 필요하시나요?
      </strong>
      <div className='text-[12px]'>
          회원정보 수정 메뉴에서 변경하실 수 있습니다.
      </div>
      <br />
      <Link href="/info" className='text-[13px]'>
      회원정보 수정 {'>'}
      </Link>
      </div>

      <div className='px-[20px] py-[40px]'>
        <div className='mb-[22px]'>
        <label className='pt-[1px]'>
        <input className='w-[22px] h-[22px] appearance-none border rounded-full
        checked:bg-black'
        id ="checkbox1"
        type ="checkbox" />
        <span className='text-[11px] pl-[1px]'>[선택]혜택제공 및 분석을 위한 개인정보 제공 및 이용 동의</span>
        </label>
        </div>
        <div>
        <label className='pt-[1px]'>
        <input className='w-[22px] h-[22px] appearance-none border rounded-full
        checked:bg-black'
        id ="checkbox2"
        type ="checkbox" />
        <span className='text-[11px] pl-[1px]'>[선택]이마트/신세계 공동 개인정보 수집 및 이용 동의</span>
        </label>
      </div>

        <div>
          <div className='mt-[8px] ml-[11px] pt-[8px] pb-[8px] pl-[20px] border-l border-black'>
            <p className='text-[14px] mb-[16px]'>
              신세계포인트 광고정보 수신동의
            </p>
          <div>
        <label>
          <input type='checkbox' name='select-all' className='w-[18px] h-[18px] appearance-none border rounded-full checked:bg-black'
          onChange={(e) => handleAllCheck(e.target.checked)}
    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
          checked={checkItems.length === data.length ? true : false} />
        <span className='text-[11px]'>전체동의</span>
        </label>
      </div>
        <div role='check_group_box' className='flex mt-[10px]'>
          {data?.map((data, key) => (
              <div key={key} className=' w-[55px]'>
                <input type='checkbox' name={`select-${data.id}`} className='w-[18px] h-[18px] appearance-none border rounded-full checked:bg-black relative'
                  onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
    // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                  checked={checkItems.includes(data.id) ? true : false} />
                <label className='before text-[11px] pl-[2px]'>
                  {data.title}
                </label>
              </div>
          ))}
        </div>
        </div>

{/*           <div>
            <input type="checkbox" />
            <label className='text-[11px]'>전체동의</label>
            <br />

            <div className='flex mt-[10px]'>
              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>이메일</label>
              </div>

              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>문자</label>
              </div>

              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>MD</label>
              </div>

              <div>
              <input type="checkbox" className='border-solid w-18 h-18'/>
              <label className='text-[11px]'>TD</label>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      <div className='text-[11px] px-[20px]'>
        당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보, 소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인 포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트 고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다.
        <br />
        ※ 서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.
      </div>

      <div className='px-[20px] py-[40px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>

      <div className='pt-[32px] pb-[80px] px-[20px] bg-[#FBFBFB]'>
        <h3 className='text-[13px] pb-[8px] font-bold'>[유의사항]</h3>
        <li className='text-[10px] pl-[7px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>광고정보 수신거부와 관계없이 회원 및 서비스 정책 변경, 주문/배송 안내, 법적 의무사항 등 안내성 고지 사항은 정상 발송됩니다.
        </li>
        <li className='text-[10px] pl-[7px] mt-[4px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>광고정보 수신거부 전 예약 발송된 광고 메시지가 있는 경우 약 1-2일 동안 발송될 수 있습니다.
        </li>
      </div>
      
  </div>
  )
}

export default page