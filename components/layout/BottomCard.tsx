import React from 'react'
import Image from 'next/image'
import Barcode from '../ui/barcode/Barcode'
import Link from 'next/link'


function BottomCard(props:{bottomCard:string, setBottomCard:React.Dispatch<React.SetStateAction<string>> ,barcodenumber:string}) {
  const {bottomCard,setBottomCard}=props
  const barcodenumber=props.barcodenumber

  return (
    <div className={`bg-linear_110 w-full h-[12rem] absolute bottom-[-742px] transform transition-transform duration-300 rounded-t-lg ${bottomCard} p-4`}>
      <div onClick={()=>setBottomCard("hidden")} className='w-[50px] h-[40px] bg-[#f8ae04] absolute left-[47%] top-[-20px] text-center rounded-full'>
        <div className='bg-[url("/images/home/downallow.png")] bg-no-repeat bg-[length:15px_8px] bg-[right_19px_bottom_11px] w-[100%] h-[100%] '></div>
      </div>
      <div className='flex justify-between relative'>
        <h3 className='bg-[url("/images/mypoint/cardSinsegaeLogo.png")] w-[113px] h-[20px] bg-cover indent-[-999rem] mt-[1px]'/>
        <div className='flex absolute right-0 gap-1 text-[17px] font-bold'>
          53
          <div className='bg-[url("/images/home/pointlogo.png")] w-[9px] h-[16px] bg-cover mt-1'></div>
        </div>
      </div>
      <div className='w-full py-4'>
        <div className='w-full bg-white h-[90px] rounded-lg'>
          <Barcode barcodenumber={barcodenumber}/>
        </div>
        <div className='flex justify-center mt-2 text-[12px] gap-4 font-semibold'>
          <Link onClick={()=>setBottomCard("hidden")} href={'/mypoint/chgpntpwdcert'}>포인트 비밀번호 변경 {">"}</Link>
          <Link onClick={()=>setBottomCard("hidden")} href={'/mylounge/receipt'} >스마트 영수증 {">"}</Link>
        </div>
      </div>
    </div>
  )
}

export default BottomCard