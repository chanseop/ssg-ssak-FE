'use client'

import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import moment from "moment";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


function AttendCalendar() {

  const [value, onChange] = useState<Value>(new Date());


  return (
      <div className='px-[17px] pb-[20px]'>
        <div className='aaa'>
          <Calendar
            onChange={onChange} value={value}
            formatDay={(locale, date) => moment(date).format('DD')}// 날'일' 제외하고 숫자만 보이도록 설정
            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
            calendarType={"gregory"} // 주의 첫날이 일요일로 변경
            showNavigation={false} // 상단 월 네비게이션 바 삭제
            formatShortWeekday={(locale, date) => ["","","","","","",""][date.getDay()]} // 요일 섹션 보이지 않게 함
          />
        </div>
        
      </div>
  )
}

export default AttendCalendar