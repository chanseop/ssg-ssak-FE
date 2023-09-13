import React from 'react'

function modify() {
  return (
    <div className='mt-[105px]'>

      <div className='px-[20px] py-[40px]'>
        <p className='text-[22px] font-semibold'>회원정보 수정</p>
        <p className='text-[13px] text-[#767676] pt-[8px] font-semibold'>정확한 회원정보를 입력해주세요.</p>
      </div>

      <div className='px-[20px] pb-[40px]'>

        <div className='pb-[16px]'>
            <p className='pb-[8px] text-[12px] font-[550]'>아이디 <span className='text-[#eb0000]'>*</span></p>
          <form>
            <input type="text" placeholder=''
            className='w-full h-[48px] border border-black-500 px-[16px] bg-[#fbfbfb] rounded-[8px]'/>
          </form>
        </div>

        <div className='pb-[16px]'>
            <p className='pb-[8px] text-[12px] font-[550]'>이름 <span className='text-[#eb0000]'>*</span></p>
          <form>
            <input type="text" placeholder=''
            className='w-full h-[48px] border border-black-500 px-[16px] bg-[#fbfbfb] rounded-[8px]'/>
          </form>
        </div>

        <div className='pb-[16px]'>
            <p className='pb-[8px] text-[12px] font-[550]'>휴대폰번호 <span className='text-[#eb0000]'>*</span></p>
          <form>
            <input type="text" placeholder=''
            className='w-full h-[48px] border border-black-500 px-[16px] bg-[#fbfbfb] rounded-[8px]'/>
          </form>
        </div>

      <div className='pb-[16px]'>
        <p className='pb-[8px] text-[12px] font-[550]'>자택주소 <span className='text-[#eb0000]'>*</span></p>
        <div className='w-[350px] h-[48px] flex space-x-1.5'>
          <form>
            <input type="text" placeholder=''
            className='w-[239px] h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
          </form>
          <span>
            <button className='text-[13px] border w-[105px] h-[48px] p-[10px] font-semibold'>우편번호 찾기</button>
          </span>
        </div>
        <form>
            <input type="text" placeholder=''
            className='mt-2 w-full h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
        </form>
        <form>
            <input type="text" placeholder=''
            className='mt-2 w-full h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
        </form>
      </div>

      <div>
        <p className='pb-[8px] text-[12px] font-[550]'>이메일</p>
        <label className='inline-block mr-1'>
            <input type="text" placeholder=''
            className='w-[163px] h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
            <span className='text-[13px] ml-1'>@</span>
        </label>
        <div className='inline-block'>
          <label>
            <input type="text" placeholder=''
            className='w-[164px] h-[48px] border border-black-500 px-[16px] rounded-[8px]'/>
          </label>
        </div>

          <div className='select_box mt-2'>
            <select name="이메일 선택" className='w-full h-[48px] border border-[#e8e8e8] rounded-[8px] text-[14px] font-semibold pr-[32px] pl-[15px]'>
              <option value="01">직접입력</option>
              <option value="02">naver.com</option>
              <option value="03">daum.net</option>
              <option value="04">gmail.com</option>
              <option value="05">kakao.com</option>
            </select>
          </div>
      </div>

      <div className='pt-[40px] mt-[40px]'>
        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            확인
          </button>
        </div>
      </div>

      </div>


    </div>
  )
}

export default modify