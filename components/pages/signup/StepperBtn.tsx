'use client'
import SignUpErrModal from '@/components/ui/modal/LoginCheckModal'
import { SignupType } from '@/types/signup/SignupType'
import { error } from 'console'
import { useRouter } from 'next/navigation'
import React, { SetStateAction, useState } from 'react'

function StepperBtn({btnText, stepId, setStepId,signUpData,setSignUpData} : {btnText:string, stepId:number, setStepId:React.Dispatch<SetStateAction<number>> ,signUpData: SignupType, setSignUpData: React.Dispatch<React.SetStateAction<SignupType>>}) {
  const router=useRouter()

  // console.log(stepId);
  
  interface ErrorSignupType{
    userId : string, 
    userName : string,
    birth:string,
    email:string,
    userPassword : string,
    checkPassword :string,
    phoneNumber : string,
    zonecode:string,
    address : string,
    detailaddress:string,
  }

  interface postSingupType{
    userId : string, 
    userName : string,
    birth:string,
    email:string,
    userPassword : string,
    phoneNumber : string,
    address:string
  }

  const handleSignupFetch= async ()=>{
    let errText:ErrorSignupType={
      userId : "", 
      userName : "",
      birth:"",
      email:"",
      userPassword : "",
      checkPassword :"",
      phoneNumber : "",
      zonecode:"",
      address : "",
      detailaddress:"",
    }
    //주소 통합
    const addressdata=`${signUpData.zonecode},${signUpData.address},${signUpData.detailaddress}`
    // postdata 만들기
    
    

    if (stepId===2){
        // 본인인증 error
      if(signUpData.userName === "" || signUpData.userName === undefined) errText.userName="이름을 입력해주세요"
      if(signUpData.birth === "" || signUpData.birth === undefined) errText.birth="생년월일을 입력해주세요"
      if(signUpData.phoneNumber === "" || signUpData.phoneNumber === undefined) errText.phoneNumber="핸드폰번호를 입력해주세요"
      if(errText.userName !== "" || errText.birth !== "" || errText.phoneNumber !==""){
        if(errText.userName !== ""){
          alert(errText.userName)
        }else if(errText.birth !== ""){
          alert(errText.birth)
        }else {
          alert(errText.phoneNumber)
        }
      }else{
        setStepId(stepId + 1)
      }
    }else if(stepId===4){
      if(signUpData.userId === "" || signUpData.userId === undefined) errText.userId="아이디를 입력해주세요"
      if(signUpData.userPassword === "" || signUpData.userPassword === undefined) errText.userPassword="비밀번호를 입력해주세요"
      if(signUpData.checkPassword !== signUpData.userPassword) errText.checkPassword="비밀번호가 다릅니다"
      if(signUpData.zonecode === "" || signUpData.zonecode === undefined) errText.zonecode="주소를 입력해주세요"
      if(signUpData.detailaddress === "" || signUpData.detailaddress === undefined) errText.detailaddress="상세주소를 입력해주세요"
      if(errText.userId !== "" || errText.userPassword !== "" || errText.checkPassword !=="" || errText.zonecode !=="" || errText.detailaddress !==""){
        if(errText.userId !== ""){
          alert(errText.userId)
        }else if(errText.userPassword !== ""){
          alert(errText.userPassword)
        }else if(errText.checkPassword !== "") {
          alert(errText.checkPassword)
        }else if(errText.zonecode){
          alert(errText.zonecode)
        }else if(errText.detailaddress){
          alert(errText.detailaddress)
        }else{
          
        }
      }else{
        // fetch를 해야함 여기서
        // console.log('!!!!!!!!!!!!!!!!!!');
        console.log(signUpData)
        fetch(`http://10.10.10.185:8000/api/v1/auth/sign-up`, {
          method: "POST", // *GET, POST, PUT, DELETE 등
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId:signUpData.userId,
            userName:signUpData.userName,
            userPassword:signUpData.userPassword,
            phoneNumber:signUpData.phoneNumber,
            address:addressdata,
            email:signUpData.email,
          }) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
        }).then(
          res => console.log(res)
        ).catch(
          error => console.log(error)
        )
        setStepId(stepId + 1)
      }
        
      }
    }



  return (
    <div className='px-4'>
      <div
        className='bg-linear_110 border-[1px] border-[#bcbcbc] block rounded-lg w-full text-center h-[48px] font-semibold p-3 text-[14px] leading-6 mb-[15px]' 
        onClick={
          stepId===5 ? ()=>router.push('/login')
          :
          stepId===2 ? handleSignupFetch
          :
          stepId===4 ? handleSignupFetch
          :
          ()=>setStepId(stepId + 1)}
      >
        {btnText}
      </div>
    </div>
  )
}

export default StepperBtn