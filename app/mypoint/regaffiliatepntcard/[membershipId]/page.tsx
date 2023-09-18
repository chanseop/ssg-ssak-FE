'use client'
import React from 'react'
import MemberShipCard from '@/components/pages/mypoint/MemberShipCard'
import { usePathname } from 'next/navigation'
import LoginRedirectModal from '@/components/ui/modal/LoginRedirectModal';

function MembershipCard() {
  const params=usePathname().split('/')[3];
  console.log(params);
  
  return (
    <>
      <LoginRedirectModal/>
      <MemberShipCard types={params}/>
    </>
    
  )
}

export default MembershipCard
