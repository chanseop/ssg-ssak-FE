'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { staticsidebarmenu } from '@/datas/sidebar/staticSideMenuData';

interface dataType {
  title: string;
  contents: { // contents를 배열로 정의
    id: number;
    title: string;
    imgUrl: string;
    url: string;
  }[];
}
function StaticSideMenu() {
  // const [data,setData]=useState<dataType[]>([]);

  const router=useRouter();
  
  // useEffect(() => {
  //   const getMyData = () => fetch('http://localhost:9000/staticsidebarmenu')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data)
  //   })
  //   getMyData()
    
  // }, [])
  // console.log(data);
  
  
  
  

  return (
    <div className=' px-[20px] pb-0'>
      {
        staticsidebarmenu.map((e:dataType,idx)=>(
          <div key={idx} className='pb-10'>
            <h3 className='pb-2 text-[15px] font-semibold border border-white border-b-black'>{e.title}</h3>
            <ul className='flex flex-wrap'>
              {e.contents.map((item)=>(
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
          </div>
        ))
      }
    </div>

  )
}

export default StaticSideMenu