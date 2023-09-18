'use client'
import React, { useEffect, useState } from 'react'
import { pointListType1 } from './PointList'
import { useSession } from 'next-auth/react'

export function dateFormat({formatdate}:{formatdate : Date}){
  let result = `${formatdate.getFullYear()}-${formatdate.getMonth() <9 ? "0"+(formatdate.getMonth()+1) : (formatdate.getMonth()+1)}-${formatdate.getDate() <9 ? "0"+(formatdate.getDate()) : (formatdate.getDate())}`
  return result
}
function SortSelect({setFetchData}:{setFetchData: React.Dispatch<React.SetStateAction<pointListType1>>}) {
  const filterImage="after:w-[20px] after:h-[19px] after:bg-[url('/images/mypoint/filterImage.png')] after:bg-cover after:bg-no-repeat after:inline-block"

  const token=useSession().data?.user["token"];

  const nowdate = new Date(); // 현재 날짜 조회 
  const endDt = dateFormat({formatdate:nowdate}); // 조회 종료 날짜 (미래 데이터는 조회 불가능)

  const defultdate = new Date();
  defultdate.setDate(nowdate.getDate()-7); // 기본 설정 날짜 설정 
  const defaultDate=dateFormat({formatdate:defultdate})

  const [startDate,setStartDate]=useState<string>(defaultDate);

  const handleSortType = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const start = new Date(); // 조회 시작날짜 설정
    // 일주일인 경우 : 현재 날짜의 date에서 -7일
    // 그외의 경우 : 개월 계산 
    {e.target.value === "7" ? 
    start.setDate(nowdate.getDate() - Number(e.target.value)) :
    start.setMonth(nowdate.getMonth() - Number(e.target.value))
    }
    // console.log(start);
    
    setStartDate(dateFormat({formatdate:start}))
    return 
  }

  useEffect(()=>{
    const getFetch = async () => {
      try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/point/list?startDay=${startDate}T00:00:00&endDay=${endDt}T23:59:59`,{
            method:'GET',
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response=>response.json())
          .then(data=>setFetchData(data))
          
      } catch (error) {
          // console.log(error);
      }
    }
    getFetch()
  },[startDate,token])

  return (
    <div className='class_sch flex py-[14px] pr-[6px] items-center justify-between'>
      <div className='sort_select mr-[5px]'>
        <select onChange={handleSortType} className='z-[2px] h-[30px] pr-8 pl-[6px] text-[13px]' title="영수증 조회 기간 선택">
          <option value="7">1주일</option>
          <option value="1">1개월</option>
          <option value="3">3개월</option>
          <option value="6">6개월</option>
        </select>
      </div>
      <div className='term text-[12px] from-neutral-400 pr-10'>
        <p>{startDate} ~ {endDt}</p>
      </div>
      <button className='relative'>
        <span className={`top-0 h-0 font-[1px] left-[-999rem] indent-[-999em] overflow-hidden ${filterImage}`}></span>
      </button>
    </div>
  )
}

export default SortSelect