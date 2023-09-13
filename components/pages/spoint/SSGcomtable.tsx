import React from 'react'

function SSGcomtable() {
  return (
    <div className='pt-[32px] mx-[-10px] px-[30px]'>
    <h4 className='border-b border-black pb-[8px] block font-semibold text-[13px] leading-[21px]'>
      SSG.COM
    </h4>

    <div>
      <table className='text-[13px]'>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            현금, 상품권, 일반 신용카드</th>
          <td  className='border-b border-l text-[13px] w-[87px] text-center' rowSpan={5}>
            <strong>1</strong>포인트</td>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            [이마트] SC카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [SSG.COM] SSG.COM카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [SSGPAY] SSG카드</th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [신세계] 씨티(체크,신용)카드</th>
          <td  className='border-b border-l text-[13px] w-[87px] text-center'>
            <strong>2</strong>포인트</td>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [이마트] 우리체크카드</th>
          <td  className='border-b border-l text-[13px] w-[87px] text-center'>
            <strong>6</strong>포인트</td>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [신세계/트레이더스] 삼성카드</th>
          <td  className='border-b border-l text-[13px] w-[87px] text-center' rowSpan={2}>
            <strong>7</strong>포인트</td>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [이마트] 신한카드/삼성카드/e카드</th>
        </tr>
      </table>
    </div>
  </div>
  )
}

export default SSGcomtable