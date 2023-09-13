import React from 'react'
import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'

function MemberShipCard(props:{types:string}) {
  const types=props.types;
  console.log(types);
  
  
  return (
    <section>
      {
      types==="samsung"?
      <>
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
        <select className='border w-full h-[40px] mt-2 bg-slate-100 rounded-lg pl-2 text-[14px] font-semibold' name="제휴 멤버십 선택" id="membershipselect">
          <option>
            삼성전자
          </option>
        </select>
        <p className='text-[13px] font-semibold pt-4'>카드번호 <span className='text-red-500'>*</span></p>
        <div className='flex border border-[#e8e8e8] rounded-lg w-full h-12 justify-center items-center mb-10'>
          <div className='relative flex-1 m-0 p-0'>
            <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
          </div>
          <div>-</div>
          <div className='relative flex-1 m-0 p-0'>
            <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
          </div>
          <div>-</div>
          <div className='relative flex-1 m-0 p-0'>
            <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
          </div>
          <div>-</div>
          <div className='relative flex-1 m-0 p-0'>
            <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
          </div>
        </div>
        <Linearbutton contents='등록하기' url='/mypoint/regaffiliatepntcard/samsung' />
      </div>
      </>
      :types==="koreanair"?
      <>
        <div className='p-4'>
          <p>
            <Image 
            src={"/images/mypoint/koreanair.png"}
            alt={"대한항공"}
            width={120}
            height={80}></Image>
          </p>
          <dl className='flex gap-4 text-[13px] font-semibold mt-4'>
            <dt className='min-w-[64px]'>적립</dt>
            <dd>최종 7만원 이상 결제 시 3,000원당 <br />1마일 신세계포인트와 동시 적립</dd>
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
          <select className='border w-full h-[40px] mt-2 bg-slate-100 rounded-lg pl-2 text-[14px] font-semibold' name="제휴 멤버십 선택" id="membershipselect">
            <option>
              대한항공
            </option>
          </select>
          <p className='text-[13px] font-semibold pt-4'>카드번호 <span className='text-red-500'>*</span></p>
          <div className='flex border border-[#e8e8e8] rounded-lg w-full h-12 justify-center items-center mb-10'>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
            <div>-</div>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
            <div>-</div>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
            <div>-</div>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
          </div>
          <Linearbutton contents='등록하기' url='/mypoint/regaffiliatepntcard/koreanair' />
        </div>
      </>
      :types==="asiana"?
      <>
        <div className='p-4'>
          <p>
            <Image 
            src={"/images/mypoint/asianalogo.png"}
            alt={"아시아나"}
            width={120}
            height={80}></Image>
          </p>
          <dl className='flex gap-4 text-[13px] font-semibold mt-4'>
            <dt className='min-w-[64px]'>적립</dt>
            <dd>최종 7만원 이상 결제 시 3,000원당 <br />1마일 신세계포인트와 동시 적립</dd>
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
          <select className='border w-full h-[40px] mt-2 bg-slate-100 rounded-lg pl-2 text-[14px] font-semibold' name="제휴 멤버십 선택" id="membershipselect">
            <option>
              아시아나항공
            </option>
          </select>
          <p className='text-[13px] font-semibold pt-4'>카드번호 <span className='text-red-500'>*</span></p>
          <div className='flex border border-[#e8e8e8] rounded-lg w-full h-12 justify-center items-center mb-10'>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
            <div>-</div>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
            <div>-</div>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
            <div>-</div>
            <div className='relative flex-1 m-0 p-0'>
              <input className='bg-white border border-white rounded-lg w-full h-[45px]' type="tel" maxLength={4} />
            </div>
          </div>
          <Linearbutton contents='등록하기' url='/mypoint/regaffiliatepntcard/asiana' />
        </div>
      </>
      :null
      }
      
    </section>
  )
}

export default MemberShipCard