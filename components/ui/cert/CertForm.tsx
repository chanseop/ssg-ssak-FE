'use client'
import { CertDataType } from '@/types/login/CertDataType';
import Link from 'next/link';
import React, { useState } from 'react'
import Linearbutton from '../button/Linearbutton';
import PhoneCert from '@/components/ui/cert/PhoneCert';
import { SignupType } from '@/types/signup/SignupType';

function CertForm(props: {types:string}) {
  const types=props.types
  // console.log(types);

  
  const [certData, setCertData] = useState<CertDataType>({
    cert: 'phone',
    gender: 'M',
    foreigner: "no",

  });
  // const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  //   const {name,value}=e.target;

  //   if( name === "phoneNumber" || name === "address" || name === "email" || name === "phone"){
  //     // console.log('111',name,value);
      
  //     setSignUpData({
  //       ...signUpData,
  //       [name]:value
  //     })
  //   } else {
  //     // console.log('222',name,value);
  //     setSignUpData({
  //       ...signUpData,
  //       [name]:value
  //     })
      
  //   }
  // }
  // console.log(signUpData);
  

  // 휴대폰인증, 카드인증시 css변화
  const PhoneImageOff="text-[#767676] after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[45px] after:h-[40px] after:left-[44%] after:ml-[-10px] after:top-[15px] after:bg-[85px_auto] after:bg-[right_0px_top_2px]"
  const PhoneImageOn="font-semibold after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[50px] after:h-[40px] after:left-[50%] after:ml-[-10px] after:bg-[85px_auto] after:top-[15px]"
  const CardImageOff="text-[#767676] after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[50px] after:h-[40px] after:left-[37%] after:ml-[-10px] after:bg-[85px_auto] after:top-[15px] after:bg-[left_50px_top_-46px]"
  const CardImageOn="font-semibold after:absolute after:bg-[url('https://m.shinsegaepoint.com/img/ico_find_tab.f8d8ffcf.png')] after:w-[50px] after:h-[40px] after:left-[47%] after:ml-[-10px] after:bg-[85px_auto] after:top-[15px] after:bg-[left_0px_top_-46px]"
  const certliOn="bg-linear_93"
  const certliOff="bg-slate-100"

  // radio형태 선택시 css변화
  const liOn="bg-black text-white"
  const liOff="bg-[#f5f5f5]"


  const  handleChecked= async (e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
    const target = e.currentTarget;
    const id = target.dataset.id;
    const value = target.getAttribute('value');

    if(id!==undefined && id==="cert" && value!==null){
      setCertData({
        ...certData,
        cert:value});
    }
    if(id!==undefined && id==="gender" && value!==null){
      setCertData({
        ...certData,
        gender:value});
    }
    if(id!==undefined && id==="foreigner" && value!==null){
      setCertData({
        ...certData,
        foreigner:value});
    }
    
  }



  return (
    <>
    {/* 카드인증 휴대폰인증 */}
      <div>
        <ul className='flex h-[88px] my-0 mx-5 relative'>
          <li value='phone' data-id="cert" className={`flex flex-1 z-[1px] h-full items-center justify-center p-[2px] rounded-lg  ${certData.cert==="phone"?certliOn:certliOff}`} onClick={handleChecked}>
            <p className={`relative block w-full h-full rounded-md bg-white pt-[53px] text-[13px] text-center  ${certData.cert==="phone"?PhoneImageOn:PhoneImageOff}`}>
              휴대폰인증
            </p>
          </li>
          <li value='card' data-id="cert" className={`flex flex-1 z-[1px] h-full items-center justify-center p-[2px] rounded-lg  ${certData.cert==="card"?certliOn:certliOff}`} onClick={handleChecked}>
            <p className={`relative block w-full h-full rounded-md bg-white pt-[53px] text-[13px] text-center ${certData.cert==="card"?CardImageOn:CardImageOff}`}>
              카드인증
            </p>
          </li>
        </ul>
      </div>
      {
        certData.cert==="phone"?
        <>
          {/* 이름 성별 외국인 생년월일 휴대폰 적는 폼 */}
          <div className='tab_box px-5 py-10'>
            {/* 이름 입력칸 */}
            {
              types==="/member/findpwresult"?
              <div className='form_box pb-[16px]'>
                <p className='pb-[8px] text-[13px] font-[550]'>아이디를 입력해 주세요.</p>
                <form>
                  <input type="text" placeholder='아이디 입력'
                  className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto text-[13px] font-semibold'/>
                </form>
              </div>
              :
              <div className='form_box pb-[16px]'>
                <p className='pb-[8px] text-[13px] font-[550]'>이름을 입력해 주세요.</p>
                <form>
                  <input name='userName' type="text" placeholder='이름 입력'
                  className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto text-[13px] font-semibold'/>
                </form>
              </div>
            }
            

            {/* 성별선택칸 */}
            <div>
              <p className='pb-[8px] text-[13px] font-[550]'>성별을 선택해주세요.</p>
              <div className='flex pb-[16px]'>
                <ul className='flex space-x-2'>
                  <li value='M' data-id="gender" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.gender==="M"?liOn:liOff}`}>남자</li>
                  <li value='W' data-id="gender" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.gender==="W"?liOn:liOff}`}>여자</li>
                </ul>
              </div>

            {/* 외국인 판별칸 */}
            <div>
              <p className='pb-[8px] text-[13px] font-[550]'>외국인 이신가요?</p>
              <div className='flex pb-[16px]'>
                <ul className='flex space-x-2'>
                  <li value="no" data-id="foreigner" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.foreigner==="no"?liOn:liOff}`}>내국인</li>
                  <li value='yes' data-id="foreigner" onClick={handleChecked} className={`basis-1/2 border h-[48px] w-[171px] rounded-[6px] p-[12px] text-center text-[13px] font-semibold ${certData.foreigner==="yes"?liOn:liOff}`}>외국인</li>
                </ul>
              </div>
            </div>

            {/* 생년월일 입력칸 */}
            <div className='pb-[16px]'>
              <p className='pb-[8px] text-[13px] font-[550]'>생년월일을 입력해주세요.(예:19990101)</p>
                <form>
                  <input type="text" placeholder='법정생년월일 8자리'
                  className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto text-[13px] font-semibold'/>
                </form>
            </div>

            {/* 휴대전화 입력칸 */}
            <div className='pb-[16px]'>
              <p className='pb-[8px] text-[13px] font-[550]'>본인명의의 휴대전화번호를 입력해주세요.</p>
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
                  <input name='phone' type="number" placeholder='-없이 휴대폰 번호 입력'
                  className='w-full h-[48px] border border-black-500 px-[16px] rounded-[8px] pointer-events-auto text-[13px] font-semibold'/>
                </form>
              </div>
            </div>
          </div>

        {/* 휴대전화 인증 약관 폼 */}
        <PhoneCert/>

        {/* 버튼 */}
          <div className='px-[20px] py-[40px]'>
          <Linearbutton contents='인증번호 요청' url={types}/>
          </div>
        </>
        :
        <>
          <div className='pb-[40px]'>
            <div className='pt-[40px] px-[30px] text-center'>
              <p className='pb-[40px] text-[16px] font-medium'>
                보유하신 <span className='font-bold'>신용/체크카드</span>로
                <br /> 본인인증이 가능합니다.
              </p>

              <Linearbutton contents='신용/체크카드 인증' url={types}/>
            </div>
          </div>
        </>
      }
    
    </>
  )
}

export default CertForm