'use client'
import React, { useState } from 'react'
import { SortRadioType } from '@/types/mypoint/SortRadioType'
import { useRouter } from 'next/navigation';


function SortRadioWrap(props:{props:SortRadioType[]}) {
  const [checked, setChecked]=useState<String>(props.props[0].id);
  // const router=useRouter();
  // console.log(props);
  
  
  const myPointAfterCheck=" text-[#d9044b] after:absolute after:b-[-1px] after:z-1 after:h-[1px] after:bg-[#d9044b] after:left-0 after:w-full after:block"
  const myPointAfterUncheck="after:absolute after:b-[-1px] after:z-1 after:h-[1px] after:bg-[#767676] after:left-0 after:w-full after:block  after:text-[#767676] "

  const handleOnChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    // console.log(e.target);
    
    if (name==='sortPointList'){
      setChecked(e.target.id)
      // router.push(`/mypoint/pnthistory?sorttype=${checked} && point1=save && point2=normal`)
      // console.log(name,value);
      
    }
  }
  return (
    <>
    <div className='sort_radio_box flex text-center '>
    {
      props.props.map((data:SortRadioType, idx)=>(
        <div key={idx}  className='flex-1 relative'>
          <input
            className={`absolute left-0 top-0 w-full h-full appearance-none`}
            type="radio" 
            id={data.id} 
            name={data.name}
            onChange={handleOnChange}/>
          <label className={`font-semibold relative text-[14px] h-[42px] leading-10 block ${ checked===data.id ? myPointAfterCheck:myPointAfterUncheck}`} htmlFor={data.id}>{data.contents}</label>
        </div>
      ))
      
    }
    </div>
    </>
  )
}

export default SortRadioWrap