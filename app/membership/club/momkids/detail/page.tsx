'use client'

import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { CertDataType } from '@/types/login/CertDataType';
import Linearbutton from '@/components/ui/button/Linearbutton';

function momdetail(props: {types:string}) {

  const types=props.types
  
  const [certData, setCertData] = useState<CertDataType>({
    cert: 'phone',
    gender: 'M',
    foreigner: "no",

  });

  const liOn="bg-black text-white"
  const liOff="bg-[#f5f5f5]"


  const  handleChecked= async (e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
    const target = e.currentTarget;
    const id = target.dataset.id;
    const value = target.getAttribute('value');

    if(id!==undefined && id==="gender" && value!==null){
      setCertData({
        ...certData,
        gender:value});
    }
    
  }

  return (
    <>
    <main className='mt-[106px]'>

    <li className='text-[#00635e] w-full h-[156px] mb-[8px] bg-[#e6f3f3] pt-[30px] pb-[24px] px-[30px] relative list-none font-semibold'>
          <span>
            <span className='tit font-semibold pb-[4px] leading-[26px] w-[240px] text-[13px]'>맘키즈 클럽</span>
            <span className='txt text-[18px] leading-[28px] pt-[6px] block w-[240px]'>
              우리 아이를 위한
              <br />
              맘키즈 클럽 혜택
            </span>
          </span>
          <span className=''>
            <Image
            src={"/images/spoint/clubmomkids.png"}
            alt={"맘키즈 클럽"}
            width={90}
            height={90}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-7 left-[268px]'>
            </Image>
          </span>
      </li>

      <div className='pt-[17px] px-[20px] pb-[45px]'>
        <li className='agree_form relative mb-[10px] list-none'>
          <div className='check_box'>
            <input id='checkbox1' className='align-middle w-[22px] h-[22px] appearance-none border rounded-full
            checked:bg-[url("/images/login/checkLogo.jpg")] checked:bg-[12px_] checked:bg-[top_5px_left_4px] checked:bg-black checked:bg-no-repeat'
            type ="checkbox" />
            <label className='pl-[10px] align-top'>
              <span className='text-[11px] font-semibold'> [선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의 </span>
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
        <div className='mt-[40px]'>
          <div className='flex flex-wrap pb-[16px]'>
            <div className='flex flex-wrap space-x-6'>
              <p className='pb-[8px] text-[13px] font-[550]'>자녀1</p>
              <div className='flex flex-col pb-[16px]'>
                <ul className='flex space-x-2'>
                  <li value='M' data-id="gender" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[141px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.gender==="M"?liOn:liOff}`}>남자</li>
                  <li value='W' data-id="gender" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[141px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.gender==="W"?liOn:liOff}`}>여자</li>
                </ul>
                <div className='flex'>
                  <form className='mt-2'>
                  <input name='phone' type="number" placeholder='생년월일 ex) 20170201'
                  className='w-[290px] h-[48px] border border-black-500 px-[10px] rounded-[8px] text-[14px] tracking-tighter font-semibold'/>
                  </form>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className='mt-[40px]'>
          <div className='flex flex-wrap pb-[16px]'>
            <div className='flex flex-wrap space-x-6'>
              <p className='pb-[8px] text-[13px] font-[550]'>자녀2</p>
              <div className='flex flex-col pb-[16px]'>
                <ul className='flex space-x-2'>
                  <li value='M' data-id="gender" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[141px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.gender==="M"?liOn:liOff}`}>남자</li>
                  <li value='W' data-id="gender" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[141px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.gender==="W"?liOn:liOff}`}>여자</li>
                </ul>
                <div className='flex'>
                  <form className='mt-2'>
                  <input name='phone' type="number" placeholder='생년월일 ex) 20170201'
                  className='w-[290px] h-[48px] border border-black-500 px-[10px] rounded-[8px] text-[14px] tracking-tighter font-semibold'/>
                  </form>
                </div>
            </div>
            </div>
          </div>
        </div>

        <ul className='text-[12px] text-[#767676] font-semibold pb-[24px]'>
          <li>· 맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.</li>
          <li>· 자녀 정보는 최대 2명까지 입력하실 수 있습니다.</li>
          <li>· 맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
            <br />(온·오프라인 옴니동의 시 SSG.COM 이용 가능)
          </li>
        </ul>

        <Linearbutton contents='저장하기' url='null' />
      </div>
    </main>
    </>
  )
}

export default momdetail