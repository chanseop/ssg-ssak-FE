import EndEventImageWrap from '@/components/pages/event/EndEventImageWrap'
import { EventImageType } from '@/types/event/EventImageDataType'
import { EndEventData} from '@/datas/event/EndEventData'
import React from 'react'

function EndEvent() {
  return (
    <section className='pt-[120px]'>
      
      {/* 이벤튼 li list */}
      <div className='pb-[60px]'>
        <ul>
            {
              EndEventData.map((e:EventImageType)=>(
                <li className='text-center relative' key={e.id} >
                  <EndEventImageWrap
                  linkurl={e.url}
                  src={e.imgUrl}
                  alt={e.alt}
                  title={e.title}
                  regdate={e.regdate}
                  />
                </li>
              ))
            }

        </ul>
      </div>
      
    </section>
  )
}

export default EndEvent