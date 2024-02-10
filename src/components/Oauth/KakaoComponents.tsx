import React, { FC } from 'react'
import kakao from '../../../public/images/kakao_login_large_wide.png'
import Image from 'next/image';

const KakaoOauthComponents:FC = () => {

  const handleLogin = () => {
    const client_id = `b1408601031a21452f37b4ad7e4009db`;
    const redirect_id = "http://localhost:3000/login";
    const response_type = "code";
    const KakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_id}`
    sessionStorage.setItem("kakao","kakao");
    window.location.href = KakaoURL;
  }

  return (
    <>
      <Image className='mt-8 cursor-pointer' src={kakao} alt='kakao_icon' width={400} height={100} onClick={handleLogin}/>
    </>
  )
    
    
}

export default KakaoOauthComponents