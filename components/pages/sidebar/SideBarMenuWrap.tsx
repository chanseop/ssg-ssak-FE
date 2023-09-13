import React from 'react'
import StaticSideMenu from './StaticSideMenu'
import LoginSideMenu from './LoginSideMenu';

function SideBarMenuWrap(props:{isLogin:Boolean}) {
  const isLogin=props.isLogin;
  // console.log(isLogin);
  
  return (
    <>
    {
      isLogin
      ?
      <>
        <LoginSideMenu/>
        <StaticSideMenu />
      </>
      :
      <StaticSideMenu />
    }
    </>
  )
}

export default SideBarMenuWrap

