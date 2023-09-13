'use client'
import { log } from 'console';
import React, { useState } from 'react'
import SortRadioWrap from './SortRadioWrap';
import { MypointSortList } from '@/datas/mypoint/MypointSortList';
// import { RegaffiliateLayoutData } from '@/datas/mypoint/RegaffiliateLayoutData';

function SortRadio(props:{types:String}) {
  const {types}=props;
  
  

  return (
    <>
      {
        // sortradio 타입이 mypoint에서 사용될때
        types==="mypoint"
        ?
        // TODO:COMPONENT화 시켜야 되는데 STATUS관리를 어떻게 해야할지 생각해봐야 한다. onChange안에 함수가 어떻게 보여야 되는지 생각
        <SortRadioWrap props={MypointSortList}/>
        :null
        // types==="regaffiliate"
        // ?
        // <SortRadioWrap props={RegaffiliateLayoutData}/>
        // :null
      }
    </>
    
    
  )
}

export default SortRadio