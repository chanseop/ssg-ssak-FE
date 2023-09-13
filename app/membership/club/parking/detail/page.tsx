import React from 'react'
import Image from 'next/image'
import Linearbutton from '@/components/ui/button/Linearbutton'

function detail() {
  return (
    <>
    <main className='mt-[106px]'>
    <li className='text-[#623f00] w-full h-[130px] mb-[8px] bg-[#f6f1e7] pt-[30px] pb-[24px] px-[30px] relative list-none'>
          <span>
            <span className='tit text-[13px] font-semibold pb-[4px] leading-[26px] w-[240px]'>차량 서비스</span>
            <span className='txt text-[18px] font-semibold leading-[21px] pt-[6px] block w-[240px] tracking-tighter'>
              편리한 주차비 자동 정산
            </span>
            <span className='txt text-[11px] font-semibold leading-[19px] pt-[8px] block w-[240px] tracking-tighter'>
              *구매 내역에 따라 자동으로 정산됩니다.
            </span>
          </span>
          <span className=''>
            <Image
            src={"/images/spoint/clubcar.png"}
            alt={"차량서비스 클럽"}
            width={90}
            height={90}
            className='border border-[#e8e8e8] rounded-full bg-white absolute top-5 left-[268px]'>
            </Image>
          </span>
      </li>

      <div>
        <div className='px-[20px] pb-[10px] h-[86px] border-b'>
          <ul className='agree_list_bnt h-10'>
            <li className='agree_form relative mb-[10px]'>
              <div className='check_box'>
                <input id='checkbox1' className='align-middle w-[22px] h-[22px] appearance-none border rounded-full
                checked:bg-[url("/images/login/checkLogo.jpg")] checked:bg-[12px_] checked:bg-[top_5px_left_4px] checked:bg-black checked:bg-no-repeat'
                type ="checkbox" />
                <label className='pl-[10px] align-top'>
                  <span className='text-[11px] font-semibold'>[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의</span>
                </label>
              </div>
                <button className='absolute right-0 bottom-1/2 w-[6px] h-[6px]'>
                <span className='relative box-border opacity-50'>
                  <Image
                    src={`/images/mylounge/vector.png`}
                    alt='내용보기'
                    width={6}
                    height={6}>
                  </Image>
                </span>
              </button>
            </li>

            <li className='agree_form relative'>
              <div className='check_box'>
                <input id='checkbox1' className='align-middle w-[22px] h-[22px] appearance-none border rounded-full
                checked:bg-[url("/images/login/checkLogo.jpg")] checked:bg-[12px_] checked:bg-[top_5px_left_4px] checked:bg-black checked:bg-no-repeat'
                type ="checkbox" />
                <label className='pl-[10px] align-top'>
                  <span className='text-[11px] font-semibold leading-[15px]'>[선택] 차량서비스 제공을 위한 이마트, 신세계 공동 부가 정보 수집 및 이용 동의</span>
                </label>
              </div>
                <button className='absolute right-0 bottom-1/2 w-[6px] h-[6px]'>
                <span className='relative box-border opacity-50'>
                  <Image
                    src={`/images/mylounge/vector.png`}
                    alt='내용보기'
                    width={6}
                    height={6}>
                  </Image>
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div className='pt-[25px] pb-[60px] px-[20px]'>
          <div className='select_box'>
            <select name="휴대전화 통신사 선택" className='w-full h-[48px] border border-[#e8e8e8] rounded-[8px] text-[14px] font-semibold pr-[32px] pl-[15px]'>
              <option value="01">지역번호 없음</option>
              <option value="02">서울</option>
              <option value="03">부산</option>
              <option value="04">경기</option>
              <option value="05">강원</option>
              <option value="06">충북</option>
              <option value="06">충남</option>
              <option value="06">전북</option>
              <option value="06">전남</option>
              <option value="06">경북</option>
              <option value="06">경남</option>
              <option value="06">제주</option>
              <option value="06">대구</option>
              <option value="06">인천</option>
              <option value="06">광주</option>
              <option value="06">대전</option>
            </select>
          </div>
          <div className='flex space-x-1'>
            <form className='mt-2'>
              <input name='phone' type="number" placeholder='차량 앞자리 번호'
              className='w-[114px] h-[48px] border border-black-500 px-[10px] rounded-[8px] text-[11px] tracking-tighter font-semibold'/>
            </form>
            <form className='mt-2'>
              <input name='phone' type="number" placeholder='차량 중간 글자'
              className='w-[114px] h-[48px] border border-black-500 px-[10px] rounded-[8px] text-[11px] tracking-tighter font-semibold'/>
            </form>
            <form className='mt-2'>
              <input name='phone' type="number" placeholder='차량 마지막 번호'
              className='w-[114px] h-[48px] border border-black-500 px-[10px] rounded-[8px] text-[11px] tracking-tighter font-semibold'/>
            </form>
          </div>

          <ul className='text-[12px] text-[#767676] font-semibold pt-[16px] pb-[24px]'>
          <li>· 이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가 자동으로 정산됩니다.
          <ul>
          <li>- 이마트 : 일부 점포 제외 (이마트앱 {'>'} 주차 {'>'} 무료주차 가능점포)</li>
          <li>- 백화점 : 경기점, 타임스퀘어점 제외</li>
          </ul>
          </li>
          <li className='text-black'>· 차량번호는 최대 1대까지 입력이 가능하며, 임시번호 및 외교차량 등 일부 차량번호는 등록되지 않습니다.</li>
        </ul>

        <Linearbutton contents='저장하기' url='null'/>

        </div>


      </div>


    </main>
    </>
  )
}

export default detail