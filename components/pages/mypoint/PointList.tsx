import React from 'react'
import SortRadio from './SortRadio'
import { pointListType } from '@/types/mypoint/pointListType'
import { pointList } from '@/datas/mypoint/pointListData'

function PointList() {
  
  const filterImage="after:w-[20px] after:h-[19px] after:bg-[url('/images/mypoint/filterImage.png')] after:bg-cover after:bg-no-repeat after:inline-block"
  const plusLogo='before:bg-[url("/images/mypoint/plusLogo.jpg")] before:bg-cover before:bg-center before:bg-[length:7px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  const minusLogo='before:bg-[url("/images/mypoint/minusLogo.jpg")] before:bg-auto before:bg-center before:bg-[length:16px] before:bg-no-repeat  before:inline-block before:w-4 before:h-4 before:bg-[#ea035c] before:rounded-[50%] before:mt-[2px] before:mr-2 '
  
  return (
    <div className='point_list_box px-5 pt-[25px] pb-[60px]'>
        <SortRadio types={"mypoint"}/>

        <div className='class_sch flex py-[14px] pr-[6px] items-center justify-between'>
          <div className='sort_select mr-[5px]'>
            <select className='z-[2px] h-[30px] pr-8 pl-[6px] text-[13px]' title="영수증 조회 기간 선택">
              <option value="7">1주일</option>
              <option value="1">1개월</option>
              <option value="3">3개월</option>
              <option value="6">6개월</option>
            </select>
          </div>
          <div className='term text-[12px] from-neutral-400 pr-10'>
            <p>2023-07-25 ~ 2023-08-25</p>
          </div>
          <button className='relative'>
            <span className={`top-0 h-0 font-[1px] left-[-999rem] indent-[-999em] overflow-hidden ${filterImage}`}></span>
          </button>
        </div>
      
        <div className='point_wrap'>
          {/* 포인트 내역 총 적립과 사용 */}
          <div className='point_total flex items-center bg-[#f8f8f8] h-9 px-2'>
            <p className={`mr-4 text-[#ea035c] text-[13px] font-semibold align-top ${plusLogo}`}>
              <span>적립</span>
              <span>32P</span>
            </p>
            <p className={`mr-4 text-[13px] font-semibold align-top ${minusLogo}`}>
              <span>사용</span>
              <span>0P</span>
            </p>
          </div>
          
          <ul className='point_history pr-[5px] pl-2'>
            {
              pointList.map((p:pointListType)=>(
                <li key={p.id} className='flex border-b items-center relative flex-wrap min-h-[74px]'>
                  <p className={`w-[90px] text-[#ea035c] text-sm font-semibold ${plusLogo}` }>
                    {p.point}P
                    <span className='block text-[11px] font-normal pl-[23px] pt-[2px]'>{p.type}</span>
                  </p>
                  <p className='flex flex-1 flex-wrap items-center text-[14px] leading-6 px-2 font-semibold'>
                    {p.store} <br/>
                    
                      {
                        p.sub_type &&
                        <span className='text-[11px] pt-1 leading-3 text-[#767676] w-full'>
                          {p.sub_type}
                        </span>
                      }
                    
                  </p>
                  <div className='absolute top-4 right-[5px]'>
                    <p className='text-[11px] leading-5 text-[#767676] min-w-[62px]'>{p.date}</p>
                    {
                      p.type==="결재적립"?
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