'use client'
import React from 'react'
import Tabmemberstore from '@/components/pages/spoint/Tabmemberstore';
import { usePathname } from 'next/navigation'

function pointstoretab() {
  const params=usePathname().split('/')[3];
  console.log(params);
  
  return (
    <Tabmemberstore types={params}/>

    
  )
}

export default pointstoretab
