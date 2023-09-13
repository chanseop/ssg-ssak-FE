'use client'
import React, { useState } from 'react'

function PhoneCert() {
  const data = [
    {id: 1, title: '[필수] 휴대전화 인증 서비스 이용약관'},
    {id: 2, title: '[필수] 고유식별정보 처리 동의'},
    {id: 3, title: '[필수] 통신사 이용약관 동의'},
    {id: 4, title: '[필수] 개인정보 수집/이용동의'}
  ];

  const [checkItems, setCheckItems] = useState<number[]>([]);

  const handleSingleCheck = (checked:any, id:number) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !==id));
    }
  };

  const handleAllCheck = (checked:any) => {
    if(checked) {
      const idArray:any = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else { setCheckItems([]);
    }
  }


  return (
    <div className='px-[20px]'>
      <h3 className='text-[18px] pb-[17px] font-semibold'>휴대전화 인증 약관</h3>
      <div className='mb-[17px] pb-[17px] border-b-2'>
        <label>
          <input type='checkbox' name='select-all' className='w-[22px] h-[22px] appearance-none border-[#505050] border-[1px] rounded-full checked:bg-black'
          onChange={(e) => handleAllCheck(e.target.checked)}
          checked={checkItems.length === data.length ? true : false} />
        <span className='align-top pl-[10px] text-[14px] font-semibold'>모든약관에 동의합니다.</span>
        </label>
      </div>
        <ul>
          {data?.map((data) => (
            <li key={data.id}>
              <div  className='mb-[13px]' >
                  <input type='checkbox' name={`select-${data.id}`} className='w-[22px] h-[22px] appearance-none border-[1px] border-[#505050] rounded-full checked:bg-black'
                    onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                    checked={checkItems.includes(data.id) ? true : false} />
              <label>
                    <span className='align-top text-[12px] pl-[10px] font-semibold'>{data.title}</span>
              </label>
              </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PhoneCert