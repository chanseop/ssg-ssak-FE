'use client'
import React, { useEffect, useState } from 'react'
import SortRadio from './SortRadio'
import { pointListType } from '@/types/mypoint/pointListType'
// import { pointList } from '@/datas/mypoint/pointListData'
import { useSession } from 'next-auth/react'
import SortSelect from './SortSelect'

export interface pointListType1{
  addTotalPoint:number,
  pointList:[
    pointListType
  ],
  totalRows: number,
  usedTotalPoint: number
}

function PointList() {
  const plusLogo='before:bg-[url("/images/mypoint/plusLogo.jpg")] before:bg-cover before:bg-center before:bg-[length:7px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const minusLogo='before:bg-[url("/images/mypoint/minusLogo.jpg")] before:bg-auto before:bg-center before:bg-[length:16px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  
  const token=useSession().data?.user["token"];
  
  const [fetchData,setFetchData]=useState<pointListType1>({
    addTotalPoint:0,
    pointList:[
      {
        createAt: [0, 0, 0, 0, 0, 0, 0],
        id: 0,
        isEvent:true,
        totalPoint: 0,
        type:"",
        updatePoint: 0,
        updatedAt: [0, 0, 0, 0, 0, 0, 0],
        used:true,
        userUUID:"",
      }
    ],
    totalRows: 0,
    usedTotalPoint: 0
  })
  console.log(fetchData);
  
  
  useEffect(()=>{
    
  },[token])

  return (
    <div className='point_list_box px-5 pt-[25px] pb-[60px]'>
        <SortRadio types={"mypoint"}/>

        <SortSelect setFetchData={setFetchData}/>
      
        <div className='point_wrap'>
          {/* 포인트 내역 총 적립과 사용 */}
          <div className='point_total flex items-center bg-[#f8f8f8] h-9 px-2'>
            <p className={`mr-4 text-[#ea035c] text-[13px] font-semibold align-top ${plusLogo}`}>
              <span>적립</span>
              <span>{fetchData?.addTotalPoint}P</span>
            </p>
            <p className={`mr-4 text-[13px] font-semibold align-top ${minusLogo}`}>
              <span>사용</span>
              <span>{fetchData?.usedTotalPoint}P</span>
            </p>
          </div>
          
          <ul className='point_history pr-[5px] pl-2'>
            {
              fetchData &&
              fetchData.pointList.map((p:pointListType,idx)=>(
                <li key={idx} className='flex border-b items-center relative flex-wrap min-h-[74px]'>
                  <p className={`w-[90px] text-[#ea035c] text-sm font-semibold ${plusLogo}`}>
                    {p.totalPoint}P
                    <span className='block text-[11px] font-normal pl-[23px] pt-[2px]'>{p.type==="STORE"?"결재적립":""}</span>
                  </p>
                  <p className='flex flex-1 flex-wrap items-center text-[14px] leading-6 px-2 font-semibold'>
                    {/* {p.store} <br/> */}
                    
                      {
                        p.isEvent?
                        null
                        :
                        <span className='text-[11px] pt-1 leading-3 text-[#767676] w-full'>
                          {/* {p.sub_type} */}
                        </span>
                      }
                    
                  </p>
                  <div className='absolute top-4 right-[5px]'>
                    <p className='text-[11px] leading-5 text-[#767676] min-w-[62px]'>{`${p.createAt[0]}-${p.createAt[1]}-${p.createAt[2]}`}</p>
                    {
                      p.type==="STORE"?
                      <button className='text-[12px] text-[#767676] mt-2'>영수증 보기 {">"}</button>
                      :null
                    }
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
  )
}

export default PointList