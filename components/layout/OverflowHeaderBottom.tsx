'use client'
import { HeaderBottomType } from '@/types/HeaderBottomType'
import { log } from 'console'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { start } from 'repl'



function MypointHeaderBottom({data}:{data:HeaderBottomType[]}) {
  const pathname=usePathname();
  // console.log(pathname);
  
  // props로 던져주기
  return (
    <div className=' m-0'>
      <nav>
        <ul className='flex gap-4 pl-[15px] whitespace-nowrap text-sm justify-start overflow-x-auto scrollbar-hide'>
          {
            data.map((event:HeaderBottomType)=>(
              pathname.startsWith(`${event.url}`)
              ?
              // url과 pathname이 같을때 버튼에 색을 입힌다.
              <li className='py-5  text-center text-[#eb0000] font-bold relative' key={event.id}>
                <Link className='tab_menu_li ' href={event.url}>{event.layout_name} </Link>
              </li>
              :
              <li className='py-5 text-center' key={event.id}>
                <Link className=' '  href={event.url}>{event.layout_name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default MypointHeaderBottom

