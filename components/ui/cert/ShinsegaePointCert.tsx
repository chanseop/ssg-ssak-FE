'use client'
import Whitebutton from '@/components/ui/button/Whitebutton';
import { SignupType } from '@/types/signup/SignupType';
import React, { useState } from 'react'

function ShinsegaePointCert(props: {signUpData: SignupType, setSignUpData: React.Dispatch<React.SetStateAction<SignupType>>}) {
  const data = [
    {id: 1, title: '[필수] 신세계포인트 회원 이용약관'},
    {id: 2, title: '[필수] 개인정보 수집 및 이용동의'},
    {id: 3, title: '[필수] 이마트/신세계 공통 개인정보 수집 및 이용 동의'},
    {id: 4, title: '[필수] 통합회원 서비스 제공 개인정보 제3자 제공 동의'},
    {id: 5, title: '[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의'},
    {id: 6, title: '[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의'},
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
      <div className='border w-full h-[40px] border-black flex justify-center items-center bg-slate-200'>
        <label className='w-full text-center'>
            <input type='checkbox' name='select-all' className='appearance-none '
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === data.length ? true : false} />
          <span className='align-top pl-[10px] text-[14px] font-semibold'>모든 동의합니다.</span>
        </label>
      </div>
      <p className='text-[9px] pt-2 font-semibold'>※ 전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며, 개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도 피수 서비스 이용은 가능합니다.</p>
      <h3 className='text-[18px] pb-[17px] font-semibold pt-10'>신세계포인트 통합회원</h3>
      <p className='text-[9px] font-semibold pb-6'>(주)이마트, (주)신세계, (주)경주신세계,(주)신세계동대구복합환승센터 귀종</p>
      <div className='pb-4'>
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
    </div>
  )
}

export default ShinsegaePointCert