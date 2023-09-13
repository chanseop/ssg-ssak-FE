import React from 'react'
import CertForm from '@/components/ui/cert/CertForm'

function tempcardcert() {
  return (
    <>
    <main className='mt-[106px]'>
      <div className='px-[20px] py-[40px]'>
        <p className='text-[19px] font-semibold'>
        <strong className='font-550 text-[#a16c0c] font-semibold'>임시 발급 카드</strong>
          를 인증하고
        <br />
          다양한 서비스를 이용해보세요.
        </p>
        
        <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
          본인 인증 없이 발급받은 카드를 한 번만 본인 인증하면
        <br />
          온/오프라인 통합 관리, 제휴 신용카드 연동 등
        <br />
          더욱 편리한 서비스 이용이 가능합니다.
        </p>
      </div>

        <div 
      className=' relative 
      before:absolute before:top-[50px] before:w-[18px] before:h-[14px] before:bg-[url("/images/spoint/Yarrow.png")] before:bg-no-repeat before:bg-[100%_auto] before:left-[120px] 
      after:absolute after:top-[50px] after:w-[18px] after:h-[14px] after:bg-[url("/images/spoint/Yarrow.png")] after:bg-no-repeat after:bg-[100%_auto] after:right-[120px] pb-[40px]
      '>
        <ol className='flex p-4 px-8 justify-between'>
          <li className='w-20 h-[103px] before:bg-[url("https://m.shinsegaepoint.com/img/issuecard_step.214ba125.png")] before:mb-2 before:w-[80px] before:h-[80px] before:block before:bg-[80px_auto] before:bg-middle before:bg-no-repeat'>
            <span className='text-[12px] text-[#a16c0c] font-semibold block text-center'>STEP 1</span>
            <span className='text-[12px] text-[#a16c0c] font-semibold block text-center'>본인인증</span>
          </li>
          <li className='w-20 h-[103px] before:bg-[url("https://m.shinsegaepoint.com/img/issuecard_step.214ba125.png")] before:mb-2 before:w-[80px] before:h-[80px] before:block before:bg-[80px_auto] before:bg-center before:bg-no-repeat'>
            <span className='text-[12px] text-[#a16c0c] font-semibold block text-center'>STEP 2</span>
            <span className='text-[12px] text-[#a16c0c] font-semibold block text-center'>카드정보 입력</span>

          </li>
          <li className='w-20 h-[103px] before:bg-[url("https://m.shinsegaepoint.com/img/issuecard_step.214ba125.png")] before:mb-2 before:w-[80px] before:h-[80px] before:block before:bg-[80px_auto] before:bg-bottom before:bg-no-repeat'>
            <span className='text-[12px] text-[#a16c0c] font-semibold block text-center'>STEP 3</span>
            <span className='text-[12px] text-[#a16c0c] font-semibold block text-center'>인증요청 클릭</span>

          </li>
        </ol>
      </div>
      <div>
        <CertForm types={'tempcardcert'}/>
      </div>

      <div role='notice box' className='px-[20px] pt-[32px] pb-[80px]'>
        <h3 className='text-[14px] font-semibold pb-[8px]'>[유의사항]</h3>
        <li className='text-[12px] text-[#767676] list-none tracking-tighter'>
          <span className='font-black pr-[4px]'>·</span>본인 명의의 인증 수단 정보를 정확히 입력해 주세요.
        </li>
        <li className='text-[12px] text-[#767676] mt-[4px] list-none tracking-tighter'>
          <span className='font-black pr-[4px]'>·</span>법인명의 휴대전화(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.
        </li>
        <li className='text-[12px] text-[#767676] mt-[4px] list-none tracking-tighter'>
          <span className='font-black pr-[4px]'>·</span>인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.
        </li>
      </div>
    </main>
    </>
  )
}

export default tempcardcert