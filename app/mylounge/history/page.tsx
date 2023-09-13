import React from 'react'
import Linearbutton from '@/components/ui/button/Linearbutton'


function history() {

  const cardPointLogo="after:ml-[7px] after:w-[33px] after:h-[30px] after:bg-[url('https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png')] after:bg-no-repeat after:bg-cover"

  const noTxtLogo="after:absolute after:left-[50%] after:w-[48px] after:h-[48px] after:bg-[url('/images/mypoint/noTxtLogo.jpg')] after:bg-cover after:translate-x-[-50%] after:top-0"

  return (
    <>
    {/* 쇼핑히스 div1 */}
      <div className='mt-[105px] px-[20px] py-[40px]'>
        <p className='mb-[8px] text-[14px]'>
        <strong className='relative z-1 after:bg-[#fed6e8] after:content:"" after:inline-block after:absolute after:w-full after:h-[15px] after:z-[-1] after:top-2 after:left-0.5'>김진성</strong>
        님과 신세계포인트는
        <br />
        올해 이렇게 함께했어요.
        </p>
        <p className='pt-[8px] mb-[8px] text-[14px] text-[#767676]'>2023-01-01 ~ 2023-08-31</p>
      </div>
      {/* 포인트 wrap */}
      <div className='px-[20px] pb-[50px]'>
        <div className='flex justify-between h-[74px] border-t border-black items-center'>
          <div className='text-[13px]'>
            <p>
              신세계포인트
            </p>
            <p className='font-semibold'>
              (사용가능)
            </p>
          </div>
          <div>
            <div className={`flex items-center text-[24px] leading-7 font-bold ${cardPointLogo}`}> 6 </div>
          </div>
        </div>
    {/* TODO : 카드 모양 내부 리펙 필요 */}
        <div className='point_use_view w-[350px] h-[200px] bg-linear_93 rounded-3xl relative'>
          <div className='point_use_cont flex bg-white rounded-[25px] w-[346px] h-[196px] m-[2px] absolute box-border'>
          <div className='flex flex-col space-y-28 w-[191px] h-[200px] p-[16px] text-[13px] my-[2px] relative'>
              <p className='font-semibold'>신세계포인트 <br /> 이용</p>
              <p className='align-bottom'>2023년</p>
            </div>
            <div className='point_bar_wrap flex flex-1 items-center relative z-1'>
            <ul className='bar_accumulate mr-[55px] h-[210px]'>
              <li className='flex flex-col items-end h-full box-border pt-[45px] pb-[16px]'>
                <div className='bar_graph w-[24px] h-full rounded-[30px] mt-auto relative bg-[#ea035c]'>
                  <span className='after:absolute after:z-1 after:left-1/2 after:top-[-10px] after:ml-[-6px] after:border-t-[6px] after:border-[#ea035c] after:border-x-[6px] after:border-l-transparent after:border-r-transparent after:border-b-0'>
                    <span className='point_count ff_lato text-[12px] text-white absolute top-[-30px] left-[-8px] bg-[#ea035c]
                    h-[22px] z-1 rounded-[4px] leading-[21px] px-[7px] w-auto font-bold min-w-[39px]'>
                      6P
                    </span>
                  </span>
                </div>
                <p className='accumulate_txt text-[13px] leading-[21px] mt-[8px] font-semibold'> 적립 </p>
              </li>
            </ul>
            <ul className='bar_us h-[210px]'>
              <li className='flex flex-col h-full box-border pt-[45px] pb-[16px] etems-end'>
                <div className='bar_graph h-0 bg-[#5c1880] w-[24px] rounded-[30px] mt-auto relative'>
                  <span className='after:absolute after:z-1 after:left-1/2 after:top-[-10px] after:ml-[-6px] after:border-t-[6px] after:border-[#5c1880] after:border-x-[6px] after:border-l-transparent after:border-r-transparent after:border-b-0'>
                    <span className='point_count ff_lato text-[11px] text-white absolute top-[-30px] left-[-8px] block 
                    h-[22px] z-1 rounded-[4px] leading-[21px] px-[7px] w-auto font-bold min-w-[39px] bg-[#5c1880]'>0P</span>
                  </span>
                </div>
                <p className='accumulate_txt text-[13px] leading-[21px] mt-[8px] font-semibold'>사용</p>
              </li>
            </ul>
            </div>
          </div>
        </div>

        <div className='point_wrap flex justify-between font-semibold h-[74px] border-b items-center'>
          <div className='point_head pl-[16px] text-[13px]'>
            <p className='font-medium leading-[21px]'>신세계포인트</p>
            <p className='leading-[21px]'>방문 일수</p>
          </div>
          <p className='pr-[25px]  align-middle'>
            <span className='text-[20px] mr-[3px] font-medium'>0</span>
            <span className='text-[12px]'>일</span>
          </p>
        </div>

        <div className='point_wrap flex justify-between font-semibold h-[74px] border-b items-center'>
          <div className='point_head pl-[16px] text-[13px]'>
            <p className='font-medium leading-[21px]'>신세계포인트</p>
            <p className='leading-[21px]'>구매 금액</p>
          </div>
          <p className='pr-[25px]  align-middle'>
            <span className='text-[20px] mr-[3px] font-medium'>0</span>
            <span className='text-[12px]'>원</span>
          </p>
        </div>
    </div>

    <div className='brand_use_wrap01 pb-[20px] px-[20px]'>
        <p className='text-[20px]'>
      <strong className='txt_line0 pk relative z-1 align-top pl-[1px] pr-[4px] 
      after:bg-[#fed6e8] after:content:"" after:inline-block after:absolute after:w-full after:h-[15px] after:z-[-1] after:bottom-0 after:left-0'>김진성</strong>
      고객님이
      <br />
      자주 방문하는 브랜드
      </p>
    </div>

    <div className='brand_use_wrap02 px-[20px] pb-[40px]'>
    <div className='text-[#767676] align-middle text-center px-0 text-[12px] font-semibold break-keep py-[40px]'>
        <p className={`relative pt-16 ${noTxtLogo}`}>
        자주 방문하는 브랜드 정보가 없습니다.
        </p>
      </div>
    </div>

    <div className='brand_use_wrap01 pb-[20px] px-[20px]'>
        <p className='text-[20px]'>
      <strong className='txt_line0 pk relative z-1 align-top pl-[1px] pr-[4px] 
      after:bg-[#fed6e8] after:content:"" after:inline-block after:absolute after:w-full after:h-[15px] after:z-[-1] after:bottom-0 after:left-0'>김진성</strong>
      고객님이
      <br />
      많이 쇼핑하는 브랜드
      </p>
    </div>

      <div className='brand_use_wrap02 px-[20px] pb-[40px]'>
        <div className='text-[#767676] align-middle text-center px-0 text-[12px] font-semibold break-keep py-[40px]'>
          <p className={`relative pt-16 ${noTxtLogo}`}>
          많이 쇼핑하는 브랜드 정보가 없습니다.
          </p>
        </div>
      </div>

      <div className='px-[20px] pb-[25px]'>
      <Linearbutton contents='고객님을 위한 추천 서비스를 만나보세요!' url='/mylounge/recommend'/>
      </div>

      <div className='pt-[32px] pb-[80px] px-[20px] bg-[#FBFBFB]'>
        <h3 className='text-[13px] pb-[8px] font-bold'>[유의사항]</h3>
        <li className='text-[11px] pl-[7px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>매년 1월 1일 ~ 전일까지의 신세계포인트 적립/사용한 결제 건을 기준으로 집계되며 환불, 취소 등으로 인한 실제 결제 금액과 일부 차이가 있을 수 있습니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>결제 데이터는 결제한 다음 날 반영됩니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>'자주 방문하는 브랜드'는 구매 횟수가 많은 기준입니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none'>
        <span className='font-black pr-[4px]'>·</span>'많이 쇼핑하는 브랜드'는 구매 금액이 많은 기준입니다.
        </li>
      </div>
    </>
  )
}

export default history