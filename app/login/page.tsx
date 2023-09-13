import LoginForm from '@/components/pages/login/loginForm'
import React from 'react'

function Login() {
  return (
    <section className='pt-[56px]'>
      <div className='p-10'>
        <h2 className='w-[89px] h-[56px] bg-[url("/images/Logo/Logo.gif")] bg-cover m-auto'></h2>
        {/* <Logo url={'/'} imgUrl={'https://m.shinsegaepoint.com/img/logo_header.840b502c.gif'} imgAlt={'신세계포인트 로고'}></Logo> */}
        
        <LoginForm />
      </div>
      
    </section>
  )
}

export default Login