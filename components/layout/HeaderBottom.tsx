'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderBottom() {
  const pathname=usePathname()

  return (
    
    <div className='header_bottom p-4 '>
      <nav>
        <ul className='flex gap-7 justify-center item-center'>
          <li className={pathname==='/coupon' ?`text-base font-semibold active` : `text-base font-semibold`}>
            <Link href="/couponpage">쿠폰</Link>
          </li>
          <li className={pathname ==="/" ? `text-base font-semibold active` : `text-base font-semibold`}>
            <Link href="/">홈</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderBottom