import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function EventImageWrap(props:{ linkurl:string, src:string,  alt:string, title:string, regdate:string, leaveData:string}) {
  const { linkurl, src, alt, title, regdate, leaveData}=props
  return (
      <>
        <Link href={linkurl}>
          <Image
            src={src}
            alt={alt}
            width={750}
            height={450}
          >
          </Image>
          {leaveData!=='null' ?
            <div className="flex justify-center top-[10px] right-[5px] absolute bg-event_end_date w-[82px] h-[56px] bg-cover">
              <p className='text-[14px] font-bold pt-[17px] bg-linear_106 bg-clip-text text-transparent'>{leaveData}</p>
            </div>
            :null
          }
          
        </Link>
        <div className='pt-[20px] px-[20px] pb-[35px]'>
          <p className='text-base font-semibold text-left leading-6'>{title}</p>
          <p className='text-[13px] font-normal leading-5 text-left pt-1'>{regdate}</p>
        </div>
      </>
    
  )
}

export default EventImageWrap