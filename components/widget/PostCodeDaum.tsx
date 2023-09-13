'use client'
import React from 'react'
import DaumPostcode from "react-daum-postcode";

function PostCodeDaum({isView, setIsView, setAddress}: {isView: boolean, setIsView: React.Dispatch<React.SetStateAction<boolean>>, setAddress: React.Dispatch<React.SetStateAction<any>>}) {

    const handleComplete = (data : any) =>{
        
        setAddress(data)
        setIsView(false)
        
    }

  return (
    <>
        {
            isView &&
            <div>
                <DaumPostcode
                    className="postmodal"
                    autoClose
                    onComplete={handleComplete}
                />
            </div>
        }
    </>
  )
}

export default PostCodeDaum