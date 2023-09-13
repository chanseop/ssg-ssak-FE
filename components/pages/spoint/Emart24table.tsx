import React from 'react'
import Image from 'next/image'

function Emart24table() {
  return (
    <div className='pt-[32px] mx-[-10px] px-[30px]'>
    <h4 className='border-b border-black pb-[8px] block font-semibold text-[13px] leading-[21px]'>
      이마트24
    </h4>

    <div>
      <table className='text-[13px]'>
        <colgroup>
        <col />
        <col />
        </colgroup>
        <tr className='border-b'>
          <th className='w-[262px] pt-[17px] pb-[12px]'>
            <Image
              src={`/images/spoint/emartintable.png`}
              alt='이마트24'
              width={60}
              height={42}
              className='mx-[101px]'>
            </Image>
            <p className='text-[11px] pt-[8px] font-[normal]'>이마트24</p>
            </th>
          <td  className='border-b border-l text-[13px] w-[87px] text-center'>
            <strong>5</strong>포인트</td>
        </tr>
      </table>
    </div>
  </div>
  )
}

export default Emart24table