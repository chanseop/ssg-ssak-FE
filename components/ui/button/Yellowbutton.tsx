import Link from 'next/link'
import React from 'react'

function Yellowbutton(props:{contents:string, url:string}) {
  const {contents,url}=props;

  return (
    <Link className=' bg-[#f8b404] border-[1px] block rounded-lg w-full text-center h-[40px] font-semibold text-[12px] leading-10 px-[12px] mt-[5px] mb-[15px]' 
      href={url}>
      {contents}
    </Link>
  )
}

export default Yellowbutton