import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function WinEventImageWrap(props:{ linkurl:string, src:string,  alt:string, title:string, regdate:string}) {
  const { linkurl, src, alt, title, regdate}=props
  const  before="before:absolute before:top-[50$] before:left-[50%] before:translate-y-[0%] before:translate-x-[-50%] before:w-[120px] before:h-[120px] before:bg-[url('https://m.shinsegaepoint.com/img/event_info_bg.fad5b98b.png')] before:bg-cover"
  return (
      <>
        <Link href={linkurl}>
          <div className={`flex items-center absolute w-full h-[70%] bg-black bg-opacity-50 left ${before}`}>
            <span 
            className='flex justify-center items-center font-bold text-xl 
            bg-linear_106 bg-clip-text text-transparent w-[120px] h-[120px] bg-cover
            my-0 mx-[auto] z-10'>
              당첨발표</span>
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

export default WinEventImageWrap