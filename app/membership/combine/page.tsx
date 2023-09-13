'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import YouTube, { YouTubeProps } from 'react-youtube';

function combine() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
    <main className='membership_imgTop mt-[106px]'>
      <div className='bg-video'>
        <div className='movImg'>
          <Image
            src={"/images/membership/bguniverse.png"}
            alt={"유니버스배경"}
            width={390}
            height={158}>
          </Image>
        </div>
      </div>
      <div className='w-[390px] h-[250px] bg-black relative'>
        <div className='vodArea  w-[324px] h-[266px] absolute left-8'>
        <YouTube videoId="hJY2WL7Q_b8" opts={opts} onReady={onPlayerReady} />
        </div>
        <p className='text-[#878787] font-semibold absolute bottom-10 left-16'>한 곳만 가입해도 모든 혜택을 함께!</p>
      </div>

      <div className='px-[20px] pb-[40px]'>
        <h3 className='text-[20px] text-center pt-[20px]'>
          <strong>최초 가입 시, 1개얼 무료 체험</strong>
          <br />
          지금 바로 가입해 보세요!
        </h3>
        <ul className='flex flex-wrap my-[15px]'>
        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px]'>
          <Link href={'https://app.ds.shinsegae.com/wallet/eventShareRandMainView?r=Er89S'}>
            <Image
              src={"/images/membership/shin.png"}
              alt={"신세계 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>연 500만원</p>
          <strong className='text-[14px] tracking-tighter'>최대 5%할인</strong>
        </li>

        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px] '>
          <Link href={'https://universeclub.emart.com/membership/membershipGuide'}>
            <Image
              src={"/images/membership/emart.png"}
              alt={"이마트 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>매월 4장</p>
          <strong className='text-[14px] tracking-tighter'>5% 할인쿠폰</strong>
        </li>

        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px] '>
          <Link href={'https://m.ssg.com/membership/gate.ssg?gateYn=Y&mobilAppSvcNo=3&store=N'}>
            <Image
              src={"/images/membership/SSG.png"}
              alt={"쓱 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>매월 5장</p>
          <strong className='text-[14px] tracking-tighter'>최대7% 할인쿠폰</strong>
        </li>

        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px] space-x-0'>
          <Link href={'https://club.gmarket.co.kr/?appgate_guid=0bc65d4c-70d4-490c-a275-5b891b36054b'}>
            <Image
              src={"/images/membership/Gmarket.png"}
              alt={"G마켓 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>무제한</p>
          <strong className='text-[14px] tracking-tighter'>5% 할인쿠폰</strong>
        </li>

        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px] '>
          <Link href={'https://club.auction.co.kr/?appGatePopupA=true&appgate_guid=804a98e2-20a2-460f-9737-e603332f4bf0'}>
            <Image
              src={"/images/membership/auction.png"}
              alt={"옥션 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>무제한</p>
          <strong className='text-[14px] tracking-tighter'>5% 할인쿠폰</strong>
        </li>

        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px] '>
          <Link href={'https://www.ssgdfs.com/kr/event/initEventDetail?event_no=E230621001'}>
            <Image
              src={"/images/membership/dutyfree.png"}
              alt={"면세점 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>매월 최대</p>
          <strong className='text-[14px] tracking-tighter'>3만원 즉시할인</strong>
        </li>
        
        <li className='w-[109px] text-center border rounded-[10px] py-[15px] px-[2px] min-h-[122px] '>
          <Link href={'https://www.starbucks.co.kr/index.do'}>
            <Image
              src={"/images/membership/starbucks.png"}
              alt={"스벅 로고"}
              width={40}
              height={40}
              className='block mx-auto'>
            </Image>
          </Link>
          <p className='text-[11px] text-[#767676] block pt-[10px] tracking-tighter'>매월 최대 5회</p>
          <strong className='text-[14px] tracking-tighter'>별 추가 적립</strong>
        </li>
        </ul>
        <dl className='absolute right-8 top-[1400px]'>
          <dt className='text-[12px] text-[#767676] mb-[9px] font-semibold '>
            <Image
              src={"/images/membership/logotxt.png"}
              alt={"텍스트 로고"}
              width={180}
              height={30}>
            </Image>
            특별혜택
            </dt>
          <dt className='relative mb-[4px] text-[11px] leading-4 text-left font-semibold'>· 스타벅스에서 별과 중복 적립</dt>
          <dt className='relative mb-[4px] text-[11px] leading-4 text-left font-semibold'>· G마켓 옥션에서도 적립 <span className='text-[10px] font-medium'>(스마일페이 결제 시)</span></dt>
        </dl>

        <ul>
          <li className='relative text-[12px] leading-[20px] text-[#767676] font-semibold'>
          · 각 로고 클릭 시 해당 APP 또는 홈페이지로 이동합니다.
          </li>
          <li className='relative text-[12px] leading-[20px] text-[#767676] font-semibold'>
          · G마켓·옥션의 스마일클럽을 이제 신세계 유니버스 클럽으로 만나실 수 있습니다.
          </li>
        </ul>

      </div>

{/* TODO : 클럽위크 이벤트 LINK걸어줄것 */}
      <div className='pb-[40px]'>
        <Image
        src={"/images/membership/brn.jpg"}
        alt={"클럽위크 링크"}
        width={390}
        height={312}>
        </Image>
      </div>

      <div className='pt-[40px] px-[20px]'>
        <p className='mb-[12px]'>
          <span className='inline-block px-[20px] py-[11px] rounded-full text-[14px] font-semibold bg-[#082341] text-white text-center leading-2 tracking-tighter h-[36px]'>유니버스 클럽 혜택</span>
        </p>
          <h4 className='text-[20px] mb-[16px]'>
            <span className='text-[#5674b9]'>01</span>
            <br />
            연회비 3만원만큼
            <br />
            받을 수 있는
            <strong className='text-[#5674b9]'>가입혜택</strong>
          </h4>

        <ul className='flex flex-wrap w-full gap-2 justify-center'>

          <li className='flex w-[160px]'>
            <Image
            src={"/images/membership/3만R.png"}
            alt={"리워드 3만R"}
            width={41}
            height={42}
            >
            </Image>
            <span className='left-0 pl-2'>
              <strong className='text-[13px] font-semibold left-0'>신세계백화점</strong>
              <p className='text-[11px] text-[#767676]'>
                신백리워드 쿠폰 3만R
              </p>
            </span>
          </li>

          <li className='flex w-[160px]'>
            <Image
            src={"/images/membership/e머니.png"}
            alt={"e머니 3만점"}
            width={41}
            height={42}
            className='float-left'>
            </Image>
            <span className='left-0 pl-2'>
              <strong className='text-[13px] font-semibold left-0'>이마트</strong>
              <p className='text-[11px] text-[#767676]'>
                e머니 3만점
              </p>
            </span>
          </li>

          <li className='flex w-[160px]'>
            <Image
            src={"/images/membership/SSG머니.png"}
            alt={"SSG머니 3만원"}
            width={41}
            height={42}
            className='float-left'>
            </Image>
            <span className='left-0 pl-2'>
              <strong className='text-[13px] font-semibold left-0'>SSG.COM</strong>
              <p className='text-[11px] text-[#767676]'>
                SSG머니 3만원
              </p>
            </span>
          </li>

          <li className='flex w-[160px]'>
            <Image
            src={"/images/membership/smile머니.png"}
            alt={"스마일캐시 3만원"}
            width={41}
            height={42}
            className='float-left'>
            </Image>
            <span className='left-0 pl-2'>
              <strong className='text-[13px] font-semibold left-0'>G마켓/옥션</strong>
              <p className='text-[11px] text-[#767676]'>
                스마일캐시 3만원
              </p>
            </span>
          </li>

          <li className='flex w-[160px]'>
            <Image
            src={"/images/membership/shin머니.png"}
            alt={"면세포인트 3만점"}
            width={41}
            height={42}
            className='float-left'>
            </Image>
            <span className='left-0 pl-2'>
              <strong className='text-[13px] font-semibold left-0'>신세계면세점</strong>
              <p className='text-[11px] text-[#767676]'>
                면세포인트 3만점
              </p>
            </span>
          </li>

          <li className='flex w-[160px]'>
            <Image
            src={"/images/membership/star머니.png"}
            alt={"스마일캐시 3만원"}
            width={41}
            height={42}
            className='float-left'>
            </Image>
            <span className='left-0 pl-2'>
              <strong className='text-[13px] font-semibold left-0'>스타벅스</strong>
              <p className='text-[11px] text-[#767676]'>
                제조음료쿠폰 5매
              </p>
            </span>
          </li>

        </ul>

          <ul className='text-[11px] text-[#767676] font-semibold mt-[24px]'>
            <li>신세계 유니버스 클럽 가입은 1개의 브랜드에서만 가능합니다. 원하시는 브랜드에서 가입해주세요.</li>
            <li>가입혜택은 연회비를 낸 가입처의 리워드가 제공되며, 리워드는 가입처에 따라 상이합니다.</li>
            <li>가입혜택은 정기 유료결제가 될 때마다 제공되는 혜택입니다. (무료 체험기간에는 제공되지 않습니다.)</li>
          </ul>

      </div>

      <div className='pt-[40px] px-[20px]'>
        <h4 className='text-[20px] mb-[30px]'>
          <span className='text-[#5674b9]'>03</span>
          <br />
          별 추가 적립에서 사이즈업 쿠폰까지
          <br />
          <strong className='text-[#5674b9]'>스타벅스 혜택</strong>
        </h4>

        <div className='flex'>
          <div className='flex-1 text-center pt-30px'>
            <p>
              <span>
              <Image
              src={"/images/membership/03star.png"}
              alt={"스타벅스 별 적립"}
              width={87}
              height={73}
              className='mx-11'>
              </Image>
              </span>
            </p>
            <p className='mt-[15px] text-[12px] tracking-tighter font-semibold'>
              매월 최대 5회
              <br />별 ★ 추가 적립​
              <br />(일 1회, 월 최대 5회)
            </p>
          </div>

        <div className='flex-1 text-center pt-30px'>
          <p>
            <span>
            <Image
            src={"/images/membership/03sizeup.png"}
            alt={"스타벅스 별 적립"}
            width={87}
            height={73}
            className='mx-11'>
            </Image>
            </span>
          </p>
          <p className='mt-[15px] text-[12px] tracking-tighter font-semibold'>
            스타벅스 카드로
            <br />제조음료 6회차 주문 시​
            <br />사이즈업 쿠폰 제공
            <br />(월 1매, 별 5회 적립 충족 시)
          </p>
        </div>
      </div>

        <ul className='block w-full mb-10'>
          <li className='relative border-2 border-green-600 w-full h-[76px] box-border rounded-[10px]'>
            <a href="https://www.starbucks.co.kr/index.do" className='flex-col rounded-[10px]'>
              <Image
                src={"/images/membership/starbucks.png"}
                alt={"스벅 로고"}
                width={40}
                height={40}
                className='block float-left absolute left-3 top-4'>
              </Image>
              <span className='font-semibold leading-[76px]'>
                <p className='text-[14px] absolute left-16'>혜택 상세 확인하기</p>
                <p className='text-[20px] absolute right-3'>{'>'}</p>
              </span>
            </a>
          </li>
        </ul>

        <ul>
          <li className='text-[12px] text-[#767676] font-semibold'>· 스타벅스 외 브랜드에서 유니버스 클럽에 가입하셨을 경우, 스타벅스 APP에서 최초 1회 인증하셔야 혜택이 제공 됩니다.</li>
          <li className='text-[12px] text-[#767676] mt-[4px] font-semibold'>
          (제휴사 회원 인증 전 내역 소급 적용 불가, 스타벅스 카드 등록 회원만 제휴사 회원 인증 가능) 
          </li>
          <li className='text-[12px] text-[#767676] mt-[4px] font-semibold'>
          · 제조 음료 주문, 스타벅스 카드로 1천원 이상 결제에 한합니다.
          </li>
        </ul>

        </div>

        <div className='pt-[40px] px-[20px]'>
          <h4 className='text-[20px] font-semibold tracking-tighter pt-[40px] border-t'>
            각 브랜드 APP에서 브랜드별로 준비한
            <br />
            더 많은 혜택을 확인하세요!
          </h4>
          <p className='text-[14px] text-[#767676] tracking-tighter pt-[8px] leading-[24px]'>
          브랜드 사정에 따라 사전고지 없이 브랜드별 혜택의​
          <br />
          진행기간 및 상세내용은 변경 또는 조기 종료될 수 있습니다. 
          </p>
        </div>

        <div className='mx-[20px]'>
          <p className='mt-[40px] mb-[12px]'>
            <span className='inline-block px-[20px] py-[11px] rounded-full text-[14px] font-semibold bg-[#082341] text-white text-center leading-2 tracking-tighter h-[36px] mb-[12px]'>포인트 특별 혜택</span>
          </p>
          <h4 className='text-[20px] mb-[16px] font-semibold'>
            클럽 회원만 누릴 수 있는 특별 혜택
          <br />
          <strong className='text-[#5674b9]'>
            이제 신세계포인트 적립은 기본!
          </strong>
          </h4>

        <div className='flex'>
          <div className='flex-1 text-center pt-30px'>
            <p>
              <span>
              <Image
              src={"/images/membership/starbucks.png"}
              alt={"스타벅스 별 적립"}
              width={87}
              height={73}
              className='mx-11 rounded-full'>
              </Image>
              </span>
            </p>
            <p className='mt-[15px] text-[12px] tracking-tighter font-semibold leading-5'>
            별과 중복 적립,
              <br />온라인에서 적립·사용
            </p>
          </div>

          <div className='flex-1 text-center pt-30px'>
            <p>
              <span>
              <Image
              src={"/images/membership/botGmarket.png"}
              alt={"봇 Gmarket"}
              width={114}
              height={30}
              className='mx-9'>
              </Image>
              </span>
            </p>
            <p>
              <span>
              <Image
              src={"/images/membership/botAuction.png"}
              alt={"봇 Auction"}
              width={114}
              height={18}
              className='mx-9 pt-[20px]'>
              </Image>
              </span>
            </p>
            <p className='mt-[15px] text-[12px] tracking-tighter font-semibold'>
              스마일페이
              <br />결제 시 적립
            </p>
          </div>
        </div>

        </div>

        <ul className='px-[20px] py-[32px] leading-[20px]'>
        <h3 className='text-[12px] font-semibold pb-[8px]'>[스타벅스]</h3>
        <li className='text-[12px] text-[#767676] font-semibold'>· 스타벅스 매장에서 스타벅스 카드로 결제 시, 별을 적립하셔도 할인을 제외한 최종 결제 금액에 대해 신세계포인트가 자동 적립됩니다. (1,000원당 1포인트 적립)</li>
        <li className='text-[12px] text-[#767676] mt-[4px] font-semibold'>
        · 스타벅스 매장에서 스타벅스 카드로 결제 시, 별을 적립하셔도 할인을 제외한 최종 결제 금액에 대해 신세계포인트가 자동 적립됩니다. (1,000원당 1포인트 적립)
          <br />
          : (사이렌 오더) 주문 완료 다음날 적립​
          <br />
          : (온라인 스토어) 배송 완료일로부터 10일차 적립​
          <br />
          : (딜리버스/홀케이크 주문) 수령/배달 완료 후 다음날 적립
          </li>
          <li className='text-[12px] text-[#767676] mt-[4px] font-semibold'>
        · 단, 아래의 경우에는 적립 대상에 포함되지 않습니다.
          <br />
          :: 스타벅스 카드 금액 충전 / e-Gift item & card 구매 / 신세계포인트 사용 금액 / 온라인스토어 배송비 / 딜리버스 배달비 결제 금액 / 일회용컵 보증금 / 리유저블컵 결제 금액 등
          </li>
          <li className='text-[12px] text-[#767676] mt-[4px] font-semibold'>
          · 사이렌 오더 이용 시 신세계포인트 사용 가능하며, 사용 시 포인트 사용 비밀번호를 확인합니다.
          </li>
          <li className='text-[12px] text-[#767676] mt-[4px] font-semibold'>
          ※ 자세한 내용은 스타벅스 APP에서 확인해주세요.
          </li>
      </ul>

        <div className='px-[20px] pb-[20px] leading-[20px] border-b'>
          <h3 className='text-[12px] font-semibold'>[G마켓/옥션]</h3>
          <ul>
          <li className='text-[12px] text-[#767676] font-semibold'>· G마켓/옥션에서 구매 시, 스마일페이로 결제한 건에 한하여 신세계포인트 적립이 가능합니다. (1,000원당 1포인트 적립 / 결제 건당 최대 1,000포인트 적립으로 제한됩니다.)
          </li>
          <li className='text-[12px] text-[#767676] font-semibold'>· 결제일로부터 4일 후에 적립되어 그 다음날부터 사용 가능 포인트로 전환됩니다. (단, 렌탈/여행 상품 구매 시, 결제일로부터 30일 후에 적립되어 그 다음날부터 사용 가능 포인트로 전환됩니다.)
          </li>
          <li className='text-[12px] text-[#767676] font-semibold'>· 적립 서비스만 제공되며, 사용 서비스는 제공되지 않습니다.
          </li>
          </ul>
        </div>

        <div>
          <Link  href="/event/ingevents">
            <Image
            src={"/images/membership/banneruniverse.png"}
            alt={"배너"}
            width={390}
            height={312}
            >
            </Image>
          </Link>
        </div>

{/*         <ul className='block w-full mb-10'>
        <li className='relative border border-black w-full h-[86px] box-border rounded-[10px]'>
          <a href="https://app.ds.shinsegae.com/wallet/eventShareRandMainView?r=Er89S" className='flex-col rounded-[10px]'>
            <Image
              src={"/images/membership/shin.png"}
              alt={"신세계 로고"}
              width={40}
              height={40}
              className='block float-left mt-2 mr-[10px]'>
            </Image>
            <span className='leading-tight font-semibold top'>
              <p className='text-[11px]'>· 패션, 잡화 최대 5% 할인 세일리지</p>
              <p className='text-[9px] text-[#767676] block tracking-tighter leading-1'> (연간 500만원 한도, 할인금액 최대 25만원)</p>
              <p className='text-[11px]'>· 매월 멤버스바 무료 음료쿠폰 2장</p>
              <p className='text-[9px] text-[#767676] block tracking-tighter'> S(동반 1인 포함 월 최대 4잔)</p>
            </span>
          </a>
        </li>
        </ul> */}

    </main>
    </>
  )
}

export default combine