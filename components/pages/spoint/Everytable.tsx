import React from 'react'

function Everytable() {
  return (
    <div className='pt-[32px] mx-[-10px] px-[30px]'>
    <h4 className='border-b border-black pb-[8px] block font-semibold text-[13px] leading-[21px]'>
      이마트 에브리데이
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
            <td  className='border-b border-l text-[13px] w-[87px] text-center' rowSpan={7}>
              <strong>1</strong>포인트</td>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              [이마트] 삼성카드/e카드/SC카드
            </th>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              [신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드
            </th>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              [신세계/트레이더스] 삼성카드
            </th>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              [SSG.COM] SSG.COM카드
            </th>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              [SSGPAY] SSG카드
            </th>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            현금 IC카드
            </th>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              직불카드 (일반/우리제휴카드)
            </th>
            <td className='border-b border-l text-[13px] text-center'><strong>5</strong>포인트</td>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            [이마트] 우리체크카드
            </th>
            <td className='border-b border-l text-[13px] text-center'><strong>6</strong>포인트</td>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
              [이마트] 신한카드
            </th>
          <td className='border-b border-l text-[13px] text-center'>
            <strong>7</strong>포인트</td>
          </tr>
          <tr className='border-b'>
            <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            직불카드 (신한제휴카드)</th>
          <td className='border-b border-l text-[13px] text-center'><strong>10</strong>포인트</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Everytable