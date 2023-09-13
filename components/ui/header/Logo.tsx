import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Logo(props :{url:string, imgUrl:string, imgAlt:string}) {
  const {url, imgUrl, imgAlt}=props


  return (
    <div className='header_logo w-14 h-8 object-cover'>
      <Link href={url}>
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={200}
          height={100}
          priority
        ></Image>
      </Link>
      </div>
  )
}

export default Logo