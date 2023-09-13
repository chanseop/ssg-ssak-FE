import Link from 'next/link'
import React from 'react'

function Linearbutton(props:{contents:string,url:string}) {
  const {contents,url}=props;
  return (
    <div className='pt-4'>
      <Link className=' bg-linear_110 border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' href={url}>{contents}</Link>
    </div>
  )
}

export default Linearbutton