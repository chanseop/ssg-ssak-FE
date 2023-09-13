'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';
import { SideMenuListType } from '@/types/sidemenu/SideMenuListType';

function DropDownMenu({innerData}: {innerData:SideMenuListType}) {
    const router=useRouter();
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
  
    return (
      <div >
        <div className='flex justify-between border border-white border-b-[#cccbcb] items-center text-[13px] font-semibold h-[48px] ' onClick={()=>setIsOpen(!isOpen)}>{innerData.title}
        { isOpen?<p>▲</p>:<p>▼</p>}
        </div>
        { isOpen ?
          <ul className='flex flex-wrap pb-4'>
            {innerData.contents.map((item)=>(
              <li className='align-top pt-[20px] inline-block min-w-[40%]' key={item.id}>
                <div className='flex pr-[5px] items-center h-[20px] text-[12px] align-top whitespace-nowrap' onClick={()=>router.push(`${item.url}`)}>
                  <Image
                  className='mr-1'
                  src={item.imgUrl}
                  alt={item.title}
                  width={20}
                  height={20}
                  ></Image>
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
          : null
        }
      </div>
    );
}

export default DropDownMenu