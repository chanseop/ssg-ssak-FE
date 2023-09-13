import { PointserviceLayoutData } from "@/datas/spoint/PointserviceLayoutData";
import Link from "next/link"
import Image from "next/image";



function PointserviceLayout(params:{param:string}) {
  const param=params.param;
  // console.log(param);
  
  
  const offClick="inline-block w-1/6 align-top border h-[58px] bg-white"
  const onClick="inline-block w-1/6 align-top border h-[58px] bg-orange-50 border-b-black"

  return (
    <section>
      <div className='mt-[106px] px-[20px] py-[40px]'>
        <p className='text-[19px] tracking-tighter'>
          포인트 적립·사용부터
          <br />
          <strong className='text-[#a16c0c]'>나의 라이프스타일에 딱 맞는 서비스까지</strong>
        </p>
          <p className='text-[13px] text-[#767676] font-semibold pt-[8px] leading-[24px]'>
          신세계포인트는 일상에서 특별한 경험까지 
          <br />
          고객과 함께 합니다.
          </p>
        </div>

        <div className='point_txt flex-row space-x-24 px-[20px] pb-[16px]'>
          <strong>포인트 적립/사용/소멸</strong>
          <button className='text-[12px] font-semibold text-[#767676]'>유의사항보기 {'>'}</button>
        </div>

        <div className='pt-[24px] px-[30px] pb-[40px] bg-[#fbfbfb]'>
          <strong className='font-semibold ml-[-10px] leading-[26px] '>적립안내</strong>
          <p className='text-[12px] leading-[21px] text-[#767676] font-semibold mb-[16px] ml-[-10px] tracking-tighter'>결제수단별 결제금액에 따라 1천원당 기본 포인트가 적립되며, 결제 제휴 브랜드 또는 결제수단에 따라 적립 포인트가 달라 집니다.</p>

          <ul className='relative box-border h-[60px] mx-[-30px]'>
          {
            PointserviceLayoutData.map((tab) => (

            <li className={`${param===tab.contents?onClick:offClick}`} key={tab.id} >
            <Link href={tab.link}>
            <button>
            <Image
              src={tab.imgUrl}
              alt={tab.imgArt}
              width={66}
              height={58}>
            </Image>
            </button>
            </Link>
            </li>
          ))
        }
        </ul>
      </div>
    </section>
  )
}
// className={`${param===member.link? onClick:offClick}`}
export default PointserviceLayout