import React from 'react'

function leavepassword() {
  return (
    <div className='mt-[109px]'>

      <div className='px-[20px] py-[40px]'>
        <p className='text-[18px] font-semibold'>
          개인정보 보호를 위해
          <br />
        <strong className='text-[#ea035c]'>비밀번호를 확인</strong>
        하고 있습니다.
        </p>
        <p className='pt-[8px] text-[13px] text-gray-500'>현재 사용 중인 비밀번호를 입력해주세요.</p>
      </div>

      <div className='px-[20px] pb-[40px]'>
        <div className='pb-[25px]'>
          <p className='text-gray-500 text-[12px] pb-[8px] font-semibold'>비밀번호</p>
          <form>
            <input type="text" id='leavepassword' placeholder='비밀번호를 입력해주세요.'
            className='w-full h-10 border border-black-500 px-[16px] rounded-[8px] focus:border-none'/>
          </form>
        </div>
        <div  className='btn_box'>
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

export default leavepassword