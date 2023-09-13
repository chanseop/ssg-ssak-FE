import Linearbutton from '@/components/ui/button/Linearbutton'
import CertForm from '@/components/ui/cert/CertForm'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal'
import React from 'react'

function page() {
  return (
    <section className='pt-[106px]'>
      <LoginRedirectModal/>
      <div className='p-4 py-10'>
        <p className='text-[19px] font-semibold pb-3'> 포인트 적립을 깜빡하셧나요? <br /><strong className='text-[#ea035c]'>영수증 정보만 입력해 주세요.</strong> </p>
        <p className='text-[13px] font-semibold text-slate-500'> 이마트, 신세계백화점, 이마트 에브리데이에서<br />구매하신 영수증 정보로 포인트 적립이 가능합니다.</p>
      </div>


      <div className='p-4'>
        <p className='text-[16px] font-bold'>영수증 정보 등록</p>

        <div className='pt-4'>
          <p className='text-[13px] font-semibold'>제휴사</p>
          <div className='w-full pt-3'>
            <select className='w-full border rounded-lg text-[13px] font-semibold h-[48px] px-2' name="brand" id="brand">
              <option value="emart">이마트</option>
              <option value="department">신세계 백화점</option>
              <option value="emart_every">이마트 에브리데이</option>
            </select>
          </div>
        </div>

        <div className='pt-4'>
          <p className='text-[13px] font-semibold'>브랜드</p>
          <div className='w-full pt-3'>
            <select className='w-full border rounded-lg text-[13px] font-semibold h-[48px] px-2' name="brand" id="brand">
              <option value="emart">이마트</option>
              <option value="department">신세계 백화점</option>
              <option value="emart_every">이마트 에브리데이</option>
            </select>
          </div>
        </div>

        <div className='pt-4'>
          <p className='text-[13px] font-semibold'>매장명</p>
          <div className='w-full pt-3'>
            <select className='w-full border rounded-lg text-[13px] font-semibold h-[48px] px-2' name="brand" id="brand">
              <option value="emart">이마트</option>
              <option value="department">신세계 백화점</option>
              <option value="emart_every">이마트 에브리데이</option>
            </select>
          </div>
        </div>

        {/* TODO:버튼추가 */}
        <div className='pt-4'>
          <p className='text-[13px] font-semibold pb-2'>영수증 일련번호</p>
          <input className='border h-[48px] w-full rounded-lg px-4' type="text" />
        </div>
      </div>

      <div className='p-4'>
        <Linearbutton contents='등록하기' url='/mypoint/savepoint'/>
      </div>
    </section>
  )
}

export default page