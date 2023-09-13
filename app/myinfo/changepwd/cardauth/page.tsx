import React from 'react'

function cardauth() {
  return (
    <div className='pb-[40px]'>
      <div className='pt-[40px] px-[30px] text-center'>
        <p className='pb-[40px]'>
          보유하신 <span className='font-semibold'>신용/체크카드로</span>
          <br /> 본인인증이 가능합니다.
        </p>

        <div className='px-[16px] py-[12px] text-center text-[14px] font-bold rounded-lg bg-linear_110'>
          <button>
            신용/체크카드 인증
          </button>
        </div>

      </div>

    </div>
  )
}

export default cardauth