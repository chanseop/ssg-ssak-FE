'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function EventBannerWrap(props:{url:string, imgUrl:string, imgAlt:string}) {
    const {url,imgUrl,imgAlt}=props

  return (
    <li >
        <Link href={url}>
            <Image
            src={imgUrl}
            alt={imgAlt}
            width={30000}
            height={362}
            >
            </Image>
        </Link>
    </li>
  )
}

export default EventBannerWrap