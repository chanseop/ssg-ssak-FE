import React from 'react'
import Linearbutton from '@/components/ui/button/Linearbutton'

function newletter() {
  return (
    <>
    <main className='mt-[106px]'>
      <div className='px-[20px] py-[40px]'>
        <p className='text-[19px] font-semibold'>
          NEWS를 보면
          <strong className='text-[#a16c0c]'>신세계가 보인다!</strong>
        </p>

        <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
          유튜브, 칼럼, 신세계그룹의 다양한 정보와
        <br />
          컨텐츠를 즐겨보세요.
          </p>
      </div>

      <div className='px-[20px] pb-[40px]'>
        <Linearbutton contents='보러가기' url="https://www.shinsegaegroupnewsroom.com/category/newsletter/"/>
      </div>
    </main>
    </>
  )
}

export default newletter