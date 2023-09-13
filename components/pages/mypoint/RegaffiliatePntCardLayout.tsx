import { RegaffiliateLayoutData } from "@/datas/mypoint/RegaffiliateLayoutData"
import Link from "next/link"



function RegaffiliatePntCardLayout(params:{param:string}) {
  const param=params.param;
  // console.log(param);
  
  
  const offClick="h-[60px] w-full text-center bg-[#fbfbfb] border border-y-white border-x-white border-b-[#fbfbfb] text-[#767676] pt-4"
  const onClick="h-[60px] w-full text-center bg-[#fff3f8] border border-y-white border-x-white border-b-[#d9044b] text-[#d9044b] pt-4"

  return (
    <section className='pt-[106px]'>
      <div className='p-4 py-10'>
        <p className='text-[19px] font-medium pb-3'>신세계포인트에 <strong className='text-red-500'>제휴사 포인트</strong> 더하기!</p>
        <p className='text-[13px] font-semibold text-slate-500'> 이마트 제휴 멤버십 포인트 카드를 등록하면 <br />신세계포인트와 제휴사 포인트를 <br />모두 적립할 수 있어요. </p>
      </div>
      <div >
        <ul className='flex justify-around items-center text-[14px] w-full h-full'>
          {
            RegaffiliateLayoutData.map((member) => (
              <li className={`${param===member.contents?onClick:offClick}`} key={member.id} >
                <Link href={member.link} >{member.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
// className={`${param===member.link? onClick:offClick}`}
export default RegaffiliatePntCardLayout