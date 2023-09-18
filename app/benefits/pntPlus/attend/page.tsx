'use client'

import React from 'react'
import Image from 'next/image'
/* import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
 */
import AttendCalendar from '@/components/pages/benefits/Calendar'

function attend() {

  // const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <div>
        <Image
          src={`/images/benefits/9month.jpg`}
          alt='출석체크'
          width={390}
          height={447}>
        </Image>
      </div>
      <div role='chcheck_calendar_box'>
        <ul role='chcheck_calendar_space'>
        </ul>
      </div>
      <div>
      {/* <Calendar onChange={onChange} value={value} /> */}
      <AttendCalendar></AttendCalendar>
      </div>

      <div>
        <Image
          src={`/images/benefits/attendterms.png`}
          alt='출석체크 방법'
          width={390}
          height={423}>
        </Image>
      </div>
    </>
  )
}

export default attend