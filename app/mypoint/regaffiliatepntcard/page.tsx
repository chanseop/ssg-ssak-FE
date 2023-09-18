import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <section>
      <div className='p-4'>
        <p>
          <Image 
          src={"/images/mypoint/samsunglogo.png"}
          alt={"삼성 로고"}
          width={120}
          height={80}></Image>
        </p>
        <dl className='flex gap-4 text-[13px] font-semibold py-4'>
          <dt className='min-w-[64px]'>적용상품</dt>
          <dd>삼성전자가 공급한 제품 <br />(이마트 내 삼성전자 매장)</dd>
        </dl>
        <dl className='flex gap-4 text-[13px] font-semibold'>
          <dt className='min-w-[64px]'>적립</dt>
          <dd>구매 금액의 0.2% 신세계포인트와 동시적립</dd>
        </dl>
      </div>
      
      <div className='p-4 '>
        <p className='text-[13px] font-semibold flex justify-between relative'>[필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의 <span className='text-[#767676] text-[17px] absolute top-[-4px] right-1'>{'>'}</span></p>
        <input 
              className='relative w-[22px] h-[22px] mt-2 rounded-full checked:bg-[url("/images/login/checkLogo.jpg")] checked:bg-[12px_] checked:bg-[top_5px_left_4px] checked:bg-black checked:bg-no-repeat appearance-none border border-black cursor-pointer'
              type="checkbox"
              name='accept'               
            />
            <label className='text-[13px] font-bold pl-3' htmlFor="accept">동의합니다</label>
      </div>

      <div className='p-4 mt-10 pt-10 border border-t-[#76767]'>
        <p className='text-[13px] font-semibold'>제휴 멤버십 선택 <span className='text-red-500'>*</span></p>
        <select name="제휴 멤버십 선택" id="membershipselect">
          <option>
            제휴사를 선택하세요.
          </option>
          <option>
            제휴사를 선택하세요.
          </option>
          <option>
            제휴사를 선택하세요.
          </option>
        </select>
      </div>
    </section>
    
  )
}

export default page