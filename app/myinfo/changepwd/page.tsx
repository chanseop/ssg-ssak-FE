'use client'
import { useState } from 'react';
import React from 'react'

function changepwd() {

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
    <div>

      <div className='tab_box px-5 py-10'>

        <div className='form_box pb-[16px]'>
          <p className='pb-[8px] text-[12px] font-[550]'>이름을 입력해 주세요.</p>
          <form>
            <input type="text" placeholder='이름 입력'
            className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto'/>
          </form>
        </div>

        <div>
          <p className='pb-[8px] text-[12px] font-[550]'>성별을 선택해주세요.</p>

          <div className='flex pb-[16px]'>
            <ul className='flex space-x-2'>
              <li className='basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold'>남자</li>
              <li className='basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-[13px] text-center font-semibold'>여자</li>
            </ul>
          </div>

        <div>
          <p className='pb-[8px] text-[12px] font-[550]'>외국인 이신가요?</p>

          <div className='flex pb-[16px]'>
            <ul className='flex space-x-2'>
              <li className='basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold'>내국인</li>
              <li className='basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-[13px] text-center font-semibold'>외국인</li>
            </ul>
          </div>
        </div>

        <div className='pb-[16px]'>
          <p className='pb-[8px] text-[12px] font-[550]'>생년월일을 입력해주세요.(예:19990101)</p>
            <form>
              <input type="text" placeholder='법정생년월일 8자리'
              className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto'/>
            </form>
        </div>

        <div className='pb-[16px]'>
          <p className='pb-[8px] text-[12px] font-[550]'>본인명의의 휴대전화번호를 입력해주세요.</p>
          <div className='select_box'>
            <select name="휴대전화 통신사 선택" className='w-full h-[48px] border border-[#e8e8e8] rounded-[8px] text-[14px] font-semibold pr-[32px] pl-[15px]'>
              <option value="01">SKT</option>
              <option value="02">KT</option>
              <option value="03">LG U+</option>
              <option value="04">SKT 알뜰폰</option>
              <option value="05">KT 알뜰폰</option>
              <option value="06">LG U+ 알뜰폰</option>
            </select>
          </div>
            <form className='mt-2'>
              <input type="text" placeholder='-없이 휴대폰 번호 입력'
              className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto'/>
            </form>
          </div>
        </div>
      </div>

      <div className='px-[20px]'>
      <h3 className='text-[18px] pb-[17px] font-semibold'>휴대전화 인증 약관</h3>
      <div className='mb-[17px] pb-[17px] border-b'>
        <label>
          <input type='checkbox' name='select-all' className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'
          onChange={(e) => handleAllCheck(e.target.checked)}
          checked={checkItems.length === data.length ? true : false} />
        <span>모든약관에 동의합니다.</span>
        </label>
      </div>
        <ul>
          {data?.map((data) => (
            <li key={data.id}>
              <div  className='mb-[13px]' >
                  <input type='checkbox' name={`select-${data.id}`} className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'
                    onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                    checked={checkItems.includes(data.id) ? true : false} />
              <label>
                    <span className='before text-[12px] pl-[1px]'>{data.title}</span>
              </label>
              </div>
            </li>
          ))}
        </ul>
{/*         <h3 className='text-[18px] pb-[17px] font-semibold'>휴대전화 인증 약관</h3>
        <div className='pb-[17px] mb-[17px]  border-b'>
          <label className='pt-[1px]'>
            <input className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'
            id ="checkbox1"
            type ="checkbox" />
            <span className='text-[14px] pl-[1px]'>모든약관에 동의합니다.</span>
          </label>
        </div>

        <ul>
            <li className='mb-[16px]'>
              <input type="checkbox" className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'/>
              <span className='text-[12px]'>[필수] 휴대전화 인증 서비스 이용약관</span>
            </li>
            <li className='mb-[16px]'>
              <input type="checkbox" className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'/>
              <span className='text-[12px]'>[필수] 고유식별정보 처리 동의</span>
            </li>
            <li className='mb-[16px]'>
              <input type="checkbox" className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'/>
              <span className='text-[12px]'>[필수] 통신사 이용약관 동의</span>
            </li>
            <li>
              <input type="checkbox" className='w-[22px] h-[22px] appearance-none border rounded-full checked:bg-black'/>
              <span className='text-[12px]'>[필수] 개인정보 수집/이용동의</span>
            </li>
        </ul> */}
      </div>

        <div className='px-[20px] py-[40px]'>
          <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
            <button>
              인증번호 요청
            </button>
          </div>
        </div>
        
      </div>
      
  )
}

export default changepwd