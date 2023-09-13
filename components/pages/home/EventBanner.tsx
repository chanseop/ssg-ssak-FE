'use client'
import React, { useState } from 'react'
import EventBannerWrap from './EventBannerWrap'
import { eventBannerType } from '@/types/home/eventType'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';


export const EventBanner = ({data,h3_text}:{data:eventBannerType[], h3_text?:string}) => {
  const [swipernum, setSwiperNum]=useState<number>(1);

  const handleTransStart=(swiper:any)=>{
    setSwiperNum(swiper.realIndex+1)
  }

  return (
    <>
    <h3 className='hidden'>{h3_text??"title"}</h3>
    <div className='relative mb-[2px]'>
      <ul>
        <Swiper
            className='ssg-swiper'
            scrollbar={{
                draggable:true,
            }}
            modules={[Scrollbar]}
            onTransitionStart={handleTransStart}
            >
      {
        data.map((event:eventBannerType)=>(
            <SwiperSlide
                key={event.id}
                
            >
                <EventBannerWrap
                url={event.url}
                imgUrl={event.imgUrl}
                imgAlt={event.imgAlt}
            />
            </SwiperSlide>
            
        ))
      }
      <div className='absolute right-6 bottom-7 z-30 text-[14px] font-semibold'>
        {swipernum}/{data.length}
      </div>
        </Swiper>
      </ul>
    </div>
    </>
  )
}
