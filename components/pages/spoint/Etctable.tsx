import React from 'react'
import Image from 'next/image'

function Etctable() {
  return (
    <div className='pt-[32px] mx-[-10px] px-[30px]'>
    <h4 className='border-b border-black pb-[8px] block font-semibold text-[13px] leading-[21px]'>
      기타 제휴사
    </h4>

    <div>
      <table className='text-[13px]'>
        <colgroup>
        <col />
        <col />
        <col />
        </colgroup>
        <tr className='border-b'>
          <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]' scope='row'>
            <Image
              src={`/images/spoint/tstarbucks.png`}
              alt='이마트24'
              width={60}
              height={42}
              className='mx-[35px]'>
            </Image>
            <p className='text-[10px] pt-[8px] font-[normal]'>스타벅스</p>
          </th>
          <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l' scope='row'>
              <Image
              src={`/images/spoint/tshinse.png`}
              alt='이마트24'
              width={60}
              height={42}
              className='mx-[35px]'>
            </Image>
            <p className='text-[10px] pt-[8px] font-[normal]'>프리미엄 아울렛</p>
          </th>
          <td  className='border-b border-l text-[13px] w-[87px] text-center' rowSpan={7}>
            <strong>1</strong>포인트
          </td>
        </tr>
        <tr className='border-b'>
          <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]' scope='row'>
            <Image
                src={`/images/spoint/tdutyfree.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] font-[normal]'>신세계면세점
              <br />(신세계온라인면세점)</p>
            </th>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l' scope='row'>
                <Image
                src={`/images/spoint/tfactorystore.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>신세계팩토리스토어</p>
            </th>
          </tr>
          <tr className='border-b'>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]' scope='row'>
                <Image
                src={`/images/spoint/tstarfeild.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>스타필드</p>
            </th>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l'>
                <Image
                src={`/images/spoint/tshopping.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>신세계TV쇼핑</p>
            </th>
          </tr>
          <tr className='border-b'>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]'>
                <Image
                src={`/images/spoint/tjosun.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>조선호텔</p>
            </th>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l'>
                <Image
                src={`/images/spoint/tyoungrang.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>신세계 영랑호리조트</p>
            </th>
          </tr>
          <tr className='border-b'>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]'>
                <Image
                src={`/images/spoint/tfood.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>신세계푸드</p>
            </th>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l'>
                <Image
                src={`/images/spoint/tcasa.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>CASAMIA</p>
            </th>
          </tr>
          <tr className='border-b'>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]'>
                <Image
                src={`/images/spoint/tsmooth.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>스무디킹</p>
            </th>
                      <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l'>
                <Image
                src={`/images/spoint/tchicor.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>시코르</p>
            </th>
          </tr>
          <tr className='border-b'>
            <th className='w-[131px] h-[93px] pt-[17px] pb-[12px]'>
                <Image
                src={`/images/spoint/tgmarket.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>G마켓</p>
            </th>
                      <th className='w-[131px] h-[93px] pt-[17px] pb-[12px] border-l'>
                <Image
                src={`/images/spoint/tauction.png`}
                alt='이마트24'
                width={60}
                height={42}
                className='mx-[35px]'>
              </Image>
              <p className='text-[10px] pt-[8px] font-[normal]'>옥션</p>
            </th>
          </tr>
      </table>
    </div>

      <dl className='px-[10px] py-[16px] border-b text-[12px] leading-[24px] tracking-tighter'>
        <dt className='pb-[4px] font-semibold'>신세계푸드 브랜드</dt>
        <dd>
        그래머시홀, 데블스도어, 데블스도어 다이너, 딘앤델루카,
        <br />
        베키아에누보, 보노보노스시, 보노보노플러스, 셀렉더테이블,
        <br />
        셰프투고, 오슬로, 올반, 쟈니로켓
        </dd>
      </dl>
    </div>
  )
}

export default Etctable