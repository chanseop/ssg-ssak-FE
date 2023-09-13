import React from 'react'
import Yellowbutton from '@/components/ui/button/Yellowbutton'
import ClubService from '@/components/pages/spoint/ClubService'
import OnlineCardList from '@/components/pages/spoint/OnlineCardList'

function PointServicebottom() {
  return (
    <>
  <div className='pt-[24px] px-[30px] pb-[40px] ml-[-10px]'>
    <strong className='font-semibold leading-[26px]'>사용안내</strong>
    <p className='text-[12px] leading-[21px] text-[#767676] font-semibold mb-[16px] tracking-tighter'>포인트 결제에서 신세계상품권까지, 편리하게 사용하실 수 있습니다.
    </p>
    <ul>
    <li>
      <strong className='border-b border-black pb-[8px] mb-[8px] block font-semibold text-[13px] leading-[21px]'>
        구매 시 포인트로 결제
      </strong>
      <ul className='tracking-tighter'>
        <li className='text-[12px] font-semibold '>
        <span className='font-black pr-[4px]'>·</span>결제 시 보유하신 사용가능 포인트를 사용하실 수 있습니다.
          <ul className='text-[11px] text-[#767676] pl-[7px] mt-[4px] leading-[21px] font-medium'>
            <li>
            -오프라인 가맹점 : 10포인트 이상 보유 시 10포인트 단위
            </li>
            <li>
            -온라인 가맹점 : 1포인트 이상 보유 시 1포인트 단위(※ G마켓/옥션 제외)
            </li>
          </ul>
        </li>
        <li className='text-[12px] font-semibold'>
        <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>포인트 사용 시에는 포인트 비밀번호를 확인하니 미리 등록해 주세요.
        </li>
      </ul>
      <Yellowbutton contents='포인트 사용 비밀번호 등록/수정하기' url='/mypoint/chgpntpwdcert' />
      <ul>
        <li className='text-[12px] font-semibold'>
        <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>각 가맹점별로 포인트 사용 제한 품목이 있을 수 있으니 결제 전 계산대에 문의 하시기 바랍니다. 
        </li>
        <li className='text-[12px] font-semibold'>Ex. 주류, 담배, 종량제봉투, 대여용 장바구니, 리유저블 컵, 의약외품 등 </li>
      </ul>
    </li>


    <li className='mt-[24px]'>
      <strong className='border-b border-black pb-[8px] mb-[8px] block font-semibold text-[13px] leading-[21px]'>
        신세계상품권으로 교환
      </strong>

      <p className='text-[12px] font-semibold'>
        <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>가까운 이마트/트레이더스/신세계백화점 상품권샵 또는 키오스크에서 5,000포인트 단위로 교환 가능 합니다.
      </p>
    </li>

    <li className='mt-[24px]'>
      <strong className='border-b border-black pb-[8px] mb-[8px] block font-semibold text-[13px] leading-[21px]'>
        소중한 사람에게 포인트 선물
      </strong>

      <p className='text-[12px] font-semibold'>
        <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>신세계포인트 회원끼리 선물이 가능합니다.
      </p>
      <Yellowbutton contents='포인트 선물하기' url='/mypoint/pntgiftmain' />
    </li>

    <li className='mt-[24px]'>
      <strong className='border-b border-black pb-[8px] mb-[8px] block font-semibold text-[13px] leading-[21px]'>
        다양한 포인트/마일리지 전환
      </strong>

      <p className='text-[12px] font-semibold'>
        <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>제휴되어 있는 다른 포인트/마일리지로 전환하거나 신세계포인트로 전환하실 수 있습니다. 
      </p>
      <Yellowbutton contents='포인트 전환하기' url='/mypoint/convertpntlist' />
    </li>
  </ul>
  </div>

  <div className='px-[30px] mb-[4px] ml-[-10px]'>
    <strong className='font-semibold leading-[26px]'>소멸안내</strong>
    <p className='text-[12px] leading-[21px] text-[#767676] font-semibold mb-[16px] tracking-[-0.4px]'>신세계포인트의 유효기간은, 적립일로부터 2년(24개월)이며, 유효기간이 경과된 신세계포인트는 월 단위 선입선출방식에 의하여 자동 소멸됩니다.
    </p>

    <strong className='border-b border-black pb-[8px] mb-[8px] block font-semibold text-[12px] leading-[21px]'>
      소멸포인트 확인
    </strong>

    <p className='text-[12px] font-semibold'>
      <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>소멸포인트는 신세계포인트APP에서 조회 가능합니다.
    </p>

    <li className='mt-[24px] list-none'>
    <strong className='border-b border-black pb-[8px] mb-[8px] block font-semibold text-[12px] leading-[21px]'>
      소멸포인트 안내
    </strong>

    <p className='text-[12px] font-semibold'>
      <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>익월 소멸예정포인트가 있을 경우, 이메일로 사전 안내 드리고 있습니다.
      <br />
      <span className='font-black pr-[4px] mb-[2px] leading-[21px]'>·</span>익월 소멸예정포인트가 5,000점 이상인 경우, 문자(LMS)로 추가 안내 드립니다.
    </p>
    </li>

  </div>

  <h3 className='text-[17px] font-semibold pt-[40px] px-[20px] pb-[16px]'>신세계포인트 통합ID 서비스</h3>

  <p className='text-[12px] leading-[20px] text-[#767676] pt-[24px] ml-[-10px] px-[30px] font-semibold  bg-[#fbfbfb]'>
  하나의 ID로 이마트, 신세계백화점, SSG.COM 등 다양한
  <br />
  제휴사의 혜택과 온라인 서비스를 간편하게 이용하실 수
  <br />
  있습니다.
  </p>

  <div className='point_info_list pt-[15px] pb-[40px] px-[10px] bg-[#fbfbfb]'>

  <OnlineCardList />

  </div>

  <h3 className='text-[17px] font-semibold pt-[40px] px-[20px] pb-[16px]'>클럽 서비스</h3>

  <ClubService />
  
  </>
  )
}

export default PointServicebottom