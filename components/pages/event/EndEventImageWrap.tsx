import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function EndEventImageWrap(props:{ linkurl:string, src:string,  alt:string, title:string, regdate:string}) {
  const { linkurl, src, alt, title, regdate}=props
  return (
      <>
        <Link href={linkurl}>
          <div className='flex items-center absolute w-full h-[70%] bg-black bg-opacity-50'>
            <span 
            className='flex justify-center items-center text-[#fff] font-medium text-xl 
            bg-[url("https://m.shinsegaepoint.com/img/event_info_bg.fad5b98b.png")] w-[120px] h-[120px] bg-cover
            my-0 mx-[auto] bg-bottom'>
              종료</span>
          </div>
          <Image
            src={src}
            alt={alt}
            width={750}
            height={450}
            >
          </Image>
        </Link>
        <div className='pt-[20px] px-[20px] pb-[35px]'>
          <p className='text-base font-semibold text-left leading-6'>{title}</p>
          <p className='text-[13px] font-normal leading-5 text-left pt-1'>{regdate}</p>
        </div>
      </>
    
  )
}

export default EndEventImageWrap