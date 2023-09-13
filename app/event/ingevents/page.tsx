import React from 'react'
import {IngEventData} from '@/datas/event/ingEventData'
import { EventImageType } from '@/types/event/EventImageDataType'
import EventImageWrap from '@/components/pages/event/EventImageWrap'

function IngEvent() {

  return (
    <section className='pt-[120px]'>
      <div className='flex h-[52px] items-center justify-start'>
        <div className='w-[95px] ml-[10px]'>
          <select className='h-[38px] pr-[30px] pl-[10px] text-sm font-semibold' name="이벤트 정렬순서" id="event_sort_list">
            <option value="latest">최신순</option>
            <option value="deadline" >마감임박</option>
          </select>
        </div>
      </div>


      {/* 이벤트 li list */}
      <div className='pb-[60px]'>
        <ul>
            {
              IngEventData.map((e:EventImageType)=>(
                <li className='text-center relative' key={e.id} >
                  <EventImageWrap
                    linkurl={e.url}
                    src={e.imgUrl}
                    alt={e.alt}
                    title={e.title}
                    regdate={e.regdate}
                    leaveData={e.leaveData}
                  />
                </li>
              ))
            }

        </ul>
      </div>

    </section>
    
  )
}

export default IngEvent

{/* <Link href={e.url}>
  <Image
    src={e.imgUrl}
    alt={e.alt}
    width={750}
    height={450}
  >
  </Image>
  <div className="flex justify-center top-[10px] right-[5px] absolute bg-event_end_date w-[82px] h-[56px] bg-cover">
    <p className='text-[14px] font-bold pt-[17px] bg-linear_106 bg-clip-text text-transparent'>9일 남음</p>
  </div>
</Link>
<div className='pt-[20px] px-[20px] pb-[35px]'>
  <p className='text-base font-semibold text-left leading-6'>{e.title}</p>
  <p className='text-[13px] font-normal leading-5 text-left pt-1'>{e.regdate}</p>
</div> */}