'use client'
import React, { useState } from 'react'

function SnsAcceptCert() {
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
    <>
      <div className='px-[20px] py-[40px] font-semibold'>
        <div className='mb-[22px]'>
          <label className='pt-[1px]'>
            <input className='w-[22px] align-top mr-2 mt-1 h-[22px] appearance-none border-[1px] rounded-full border-black
            checked:bg-black'
            id ="checkbox1"
            type ="checkbox" />
            <span className='text-[11px] pl-[1px]'>[선택]혜택제공 및 분석을 위한 개인정보 제공 및 이용 동의</span>
          </label>
        </div>
        <div>
          <label className='pt-[1px]'>
            <input className='w-[22px] align-top mr-2 mt-1 h-[22px] appearance-none border-[1px] rounded-full border-black
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
                {/* // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제) */}
                <input type='checkbox' name='select-all' className='w-[18px] align-top mr-2 mt-1 h-[18px] appearance-none border border-black rounded-full checked:bg-black'
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false} />
                <span className='text-[11px]'>전체동의</span>
              </label>
            </div>
          <div role='check_group_box' className='flex mt-[10px]'>
            {data?.map((data, key) => (
                <div key={key} className=' w-[60px] mr-2'>
                  <input type='checkbox' name={`select-${data.id}`} className='w-[18px] align-top mr-1 mt-1 h-[18px] appearance-none border border-black rounded-full checked:bg-black relative'
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
      </div>
    </div>
    </>
  )
}

export default SnsAcceptCert