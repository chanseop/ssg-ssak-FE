import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sonlinecardListData } from '@/datas/spoint/SonlinecardListData'
import { sonlinecardType } from '@/types/spoint/SonlinecardType'
import { smobileListData } from '@/datas/spoint/SmobileListData'
import { smobileType } from '@/types/spoint/SmobileType'
import { smembercardListData } from '@/datas/spoint/SmembercardListData'
import { smembercardType } from '@/types/spoint/SmembercardType'
import { rsmembercardListData } from '@/datas/spoint/RSmembercardListData'
import { rsmembercardType } from '@/types/spoint/RSmembercardType'
import OnlineCardList from '@/components/pages/spoint/OnlineCardList'

function pointcard() {
  return (
    <>
      <main className='mt-[106px]'>
        <div className='px-[20px] py-[40px]'>
          <p className='text-[19px] font-semibold'>
            언제 어디에서라도 신세계포인트를 
          <br />
            만날 수 있는
            <strong className='font-550 text-[#a16c0c]'> 다양한 방법</strong>
          </p>

          <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
            카드마다 차별화된 서비스·혜택을 즐기세요!
          <br />
            신세계포인트 앱 하나면 나의 포인트 카드를
          <br />
            한 번에 확인할 수 있어요.
          </p>
        </div>

        <h3 className='text-[17px] font-semibold px-[20px] pb-[16px]'>온라인 카드</h3>

          <p className='text-[12px] leading-[20px] text-[#767676] pt-[24px] ml-[-10px] px-[30px] font-semibold  bg-[#fbfbfb]'>
            통합ID로 로그인하는 모바일 앱과 홈페이지에서 신세계포인트
          <br />
            회원가입이 가능하며, 신세계포인트 카드와 다양한 혜택을 만날 수 있어요.
          </p>

        <div className='point_info_list pt-[15px] pb-[40px] px-[10px] bg-[#fbfbfb]'>
          <OnlineCardList /> 
        </div>

        <div className='bg-[#fbfbfb]'>
          <p className='text-[12px] leading-[20px] text-[#767676] ml-[-10px] px-[30px] mt-[30px] font-semibold'>
          신세계 유니버스 클럽에 가입하시면 신세계포인트 모바일 카드가 발급됩니다.
          </p>
          <ul>
          <li className='inline-block align-top w-[80px] mb-[20px] mr-[40px] ml-[10px] mt-[15px]'>
                <Link href='https://m.shinsegaepoint.com/membership/combine' rel="noopener noreferrer" className='block relative w-[80px] h-[106px]' target="_blank">
                  <span>
                    <Image
                    src="/images/spoint/uniclub.png"
                    alt="유니버스 클럽"
                    width={80}
                    height={80}
                    className='border border-[#e8e8e8] rounded-[23px] bg-white mx-[20px]'>
                    </Image>
                  </span>
                  <span className='block text-center text-[12px] leading-[20px] pt-[8px] w-[114px] h-[28px] ml-[3px] font-semibold'>
                    신세계 유니버스 클럽
                  </span>
                </Link>
              </li>
          </ul>
        </div>

        <div className='bg-[#fbfbfb]'>
          <p className='text-[12px] leading-[20px] text-[#767676] ml-[-10px] px-[30px] mt-[30px] font-semibold'>
          모바일 월렛(지갑) 서비스에서 신세계포인트 카드 발급이 가능합니다.
          </p>
          <ul>
          {
            smobileListData.map((f:smobileType) => (
              <li key={f.id} className='inline-block align-top w-[80px] mb-[20px] mr-[40px] ml-[3px]'>
                <Link href={f.url} rel="noopener noreferrer" className='block relative w-[80px] h-[106px]' target="_blank">
                  <span>
                    <Image
                    src={f.imgUrl}
                    alt={f.imgAlt}
                    width={80}
                    height={80}
                    className='border border-[#e8e8e8] rounded-[23px] bg-white mx-[20px]'>
                    </Image>
                  </span>
                  <span className='block text-center text-[12px] leading-[20px] pt-[8px] w-[114px] h-[28px] ml-[3px] font-semibold'>
                    {f.name}
                  </span>
                </Link>
              </li>
            ))
          }
          </ul>
          <p className='text-[11px] text-[#767676] pt-[15px] pl-[20px] pb-[40px]'>· 앱 이미지 클릭 시 해당 앱 다운로드 페이지로 연결됩니다.</p>
        </div>

    {/* TODO : 정렬 똑바로 해야 */}
        <h3 className='text-[17px] font-semibold mt-[40px] px-[20px] pb-[16px]'>제휴 신용카드</h3>
        <div className='pt-[24px] pb-[40px] px-[30px] bg-[#fbfbfb]'>
          <p className='text-[12px] leading-[20px] text-[#767676] mb-[16px] ml-[-10px] font-semibold'>
          다양한 신세계포인트 제휴 신용카드를 확인하시고,
          <br />
          고객님의 라이프스타일에 따라 풍성한 혜택을 누리세요.
          </p>
          <ul>
          {
            smembercardListData.map((g:smembercardType) => (
              <li key={g.id} className='inline-block align-bottom mb-[20px] mr-[20px] ml-[10px]'>
                <Link href={g.url} rel="noopener noreferrer" className='block relative' target="_blank">
                  <span>
                    <Image
                    src={g.imgUrl}
                    alt={g.imgAlt}
                    width={91}
                    height={143}
                    className='border border-[#e8e8e8] rounded-[3px] bg-white mx-[20px]'>
                    </Image>
                  </span>
                  <span className='text-center text-[13px] leading-[20px] pt-[8px] w-[175px] h-[28px] ml-[15px] font-semibold'>
                    {g.name}
                  </span>
                  <br />
                  <span className='text-[11px] text-[#767676] font-semibold ml-[50px]'>바로가기 {'>'}</span>
                </Link>
              </li>
            ))
          }
          {
            rsmembercardListData.map((h:rsmembercardType) => (
              <li key={h.id} className='inline-block align-bottom mb-[20px] mr-[10px]'>
                <Link href={h.url} rel="noopener noreferrer" className='block relative' target="_blank">
                  <span>
                    <Image
                    src={h.imgUrl}
                    alt={h.imgAlt}
                    width={135}
                    height={84}
                    className='border border-[#e8e8e8] rounded-[3px] bg-white mx-[10px]'>
                    </Image>
                  </span>
                  <span className='text-center text-[13px] leading-[20px] pt-[8px] w-[114px] h-[28px] ml-[50px] font-semibold'>
                    {h.name}
                  </span>
                  <br />
                  <span className='text-[11px] text-[#767676] font-semibold ml-[50px]'>바로가기 {'>'}</span>
                </Link>
              </li>
            ))
          }
          </ul>
        </div>

        <div className='pt-[32px] pb-[80px] px-[20px] bg-[#FBFBFB]'>
        <h3 className='text-[13px] pb-[8px] font-bold'>[유의사항]</h3>
        <li className='text-[11px] pl-[7px] text-gray-500 list-none tracking-tighter'>
        <span className='font-black pr-[4px]'>·</span>온라인 카드는 가상카드로서 실물(플라스틱) 카드가 제공되지 않습니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none tracking-tighter'>
        <span className='font-black pr-[4px]'>·</span>신세계포인트 통합ID 서비스를 통해 발급된 온라인 카드는 해당 사이트를 탈퇴하실 경우 소멸됩니다.
        </li>
        <li className='text-[11px] pl-[7px] mt-[4px] text-gray-500 list-none tracking-tighter'>
        <span className='font-black pr-[4px]'>·</span>제휴 신용카드 발급 및 이용 등 자세한 사항은 해당 카드사에 문의해 주세요.
        </li>
      </div>
      </main>
    </>

  )
}

export default pointcard