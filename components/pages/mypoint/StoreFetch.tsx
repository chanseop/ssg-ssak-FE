'use client'
import React, { useEffect, useState } from 'react'

function StoreFetch({id,token}:{id:number,token:string}) {
  
  const [storeName,setStoreName]=useState<string>();
  // console.log(id);
  // console.log(storeName);
  
  useEffect(()=>{
    const getFetch = async () => {
      try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/store/id?storeId=${id}`,{
            method:'GET',
            headers:{
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response=>response.json())
          .then(data=>setStoreName(data["storeDto"]["storeName"])
          )
          
      } catch (error) {
          // console.log(error);
      }
    }
    getFetch()
  },[storeName])
  
  // async function getData() {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/store/?${id}`)
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.
  
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }
  //   return res.json()
  // }

  // const data=await getData()

  return (
    <div>{storeName}</div>
  )
}

export default StoreFetch