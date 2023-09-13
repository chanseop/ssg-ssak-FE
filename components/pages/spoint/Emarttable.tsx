import React from 'react'

function Emarttable() {
  return (
    <div className='pt-[32px] mx-[-10px] px-[30px]'>
    <h4 className='border-b border-black pb-[8px] block font-semibold text-[13px] leading-[21px]'>
      이마트/이마트 트레이더스
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
          <td  className='border-b border-l text-[13px] w-[87px] text-center' rowSpan={10}>
            <strong>1</strong>포인트</td>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            [이마트] 삼성카드/e카드/SC카드/KB국민카드
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
            일반 직불카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            현금 IC카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            우리제휴직불카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            신한제휴직불카드
          </th>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
            [이마트] 우리체크카드
          </th>
        <td className='border-b border-l text-[13px] text-center'>
          <strong>6</strong>포인트</td>
        </tr>
        <tr className='border-b'>
          <th className='px-[8px] py-[15px] text-left tracking-tighter text-[12px] font-medium'>
          [이마트] 신한카드</th>
        <td className='border-b border-l text-[13px] text-center'><strong>7</strong>포인트</td>
        </tr>
      </table>
    </div>

            <dl className='px-[10px] py-[16px] border-b text-[11px] leading-[24px] '>
              <dt className='pb-[4px] font-semibold'>이마트 전문점에서도 동일하게 적용됩니다.</dt>
              <dd>
              노브랜드, 데이즈, 몰리스, 베이비서클, 쇼앤탤, PK마켓,
              <br />
              이마트 문화센터, 일렉트로마트, 토이킹덤, 하우디 
              </dd>
            </dl>
          </div>
  )
}

export default Emarttable