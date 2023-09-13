'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HomeMiddleMenusWrap(props:{url:string,src:string,alt:string,width:number,height:number,contents:string}) {
    const {url,src,alt,width,height,contents}=props

    return (
    <li>
        <Link href={url}>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
            ></Image>
            {contents}
        </Link>
    </li>
  )
}

export default HomeMiddleMenusWrap