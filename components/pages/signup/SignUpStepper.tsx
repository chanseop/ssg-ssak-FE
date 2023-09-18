'use client'
import { SignupType } from '@/types/signup/SignupType';
// import SignupAgree from '@/components/pages/signup/SignupAgree';
// import SignupCert from '@/components/pages/signup/SignupCert';
import SignupForm from '@/components/pages/signup/SignupForm';
import SignupLoadMap from '@/components/pages/signup/SignupLoadMap';
import React, { useEffect, useState } from 'react'
import ShinsegaePointCert from '@/components/ui/cert/ShinsegaePointCert';
import StepperBtn from './StepperBtn';
import SignupCertForm from './SignupCertForm';
import { StepperNumber } from './StepperNumber';
import { StepperNumberData } from '@/datas/signup/StepperData'
import SignupSuccess from '@/components/pages/signup/SignupSuccess';
import { useRouter } from 'next/navigation';


function 
SignUpStepper() {
  const router=useRouter();

  const [signUpData,setSignUpData]=useState<SignupType>({
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
  })

  const [stepId, setStepId] = useState<number>(1);
  
  const stepperComponent : any = [ 
    { 1 : <SignupLoadMap />, btnTxt : '회원가입' }, //배열의 0번째 index
    { 2 : <SignupCertForm signUpData={signUpData} setSignUpData={setSignUpData} /> , btnTxt : '인증하기'},
    { 3 : <ShinsegaePointCert signUpData={signUpData} setSignUpData={setSignUpData} /> , btnTxt : '다음'},
    { 4 : <SignupForm signUpData={signUpData} setSignUpData={setSignUpData} /> , btnTxt : '다음'},
    { 5 : <SignupSuccess signUpData={signUpData} setSignUpData={setSignUpData} /> , btnTxt : '신세계포인트 로그인하기'},
    
  ]

  useEffect(() => {
    
  },[signUpData])

  return (
    <>
    { stepId > 1 ? <StepperNumber stepId={stepId-1} StepperNumberData={StepperNumberData}/> : null }
    {
      stepperComponent[stepId-1][stepId]
    }
      <StepperBtn 
        signUpData={signUpData} 
        setSignUpData={setSignUpData}
        btnText={stepperComponent[stepId-1]['btnTxt']}
        stepId={stepId}
        setStepId={setStepId} 
      />
    </>
  )
}

export default SignUpStepper
