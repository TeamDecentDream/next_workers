"use client";

import KakaoOauthComponents from "@/src/components/Oauth/KakaoComponents";
import Footer from "@/src/components/footer/Footer";
import axios from "axios";
import Image from "next/image";
import farmMain from "../../public/images/free-icon-farm-house-1188022.png"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { snsLogin } from "@/lib/features/auth/authTunk";


const GinServerBaseURL = "http://localhost:8080"


export default function Login() {
  const router = useRouter();
  const dispatch:any = useDispatch();
  const Auth:any = useSelector<any>(state => state.authReducer)
  
  useEffect(() => {
    if(sessionStorage.getItem('kakao')){
      const searchParams = new URLSearchParams(window.location.search);
      const credentailcode:any = searchParams.get("code");
      sessionStorage.removeItem("kakao");
      dispatch(snsLogin({code:credentailcode}));
      // axios
      //   .post(GinServerBaseURL + `/member/login`, {
      //     provider: "kakao",
      //     Code: credentailcode,
      //   })
      //   .then((resp) => {
      //     sessionStorage.setItem("accessToken", resp.data);
      //     router.replace('/login/metamask')
      //   }) 
      //   .catch((err) => {
      //     console.log(err);
      //     alert('Login 실패ㅠㅠ')
      
      //   });
    }
  }, [])
  
  useEffect(()=>{
    console.log(Auth)
    if(Auth.accessToken)
    router.replace('/login/metamask')
  },[Auth.accessToken])

  return (
    
    <div className="min-w-[1024px] w-full">
      <div className="flex flex-col justify-center items-center min-h-[768px] h-[96vh]">
        <h1 className="font-bold text-6xl" style={{ color: "rgb(0,176,80)" }}>
          NEXT FARM
        </h1>
        <h3 className="text-3xl font-extrabold">for Workers</h3>

        <Image
          src={farmMain}
          alt="Main"
          width={300}
          height={300}
        />
        {/* <form className="mt-5">
          <fieldset className="w-[336px]">
            <legend className="font-bold">아이디</legend>
            <input
              className="w-full h-9 px-2 py-0.5 font-semibold focus:outline-[#00B050]"
              style={{ background: "rgba(180,229,87,0.44)" }}
              type="text"
            ></input>
            <legend className="font-bold mt-1">비밀번호</legend>
            <input
              className="w-full h-9 px-2 py-0.5 font-semibold focus:outline-[#00B050]"
              style={{ background: "rgba(180,229,87,0.44)" }}
              type="password"
            ></input>
          </fieldset>
        </form>
        <button
          className="mt-4 font-bold text-xl py-1.5 px-3"
          style={{
            border: "solid 2px rgb(0,176,80)",
            borderRadius: "4px",
            color: "rgb(0,176,80)"
          }}
        >
          로 그 인
          
        </button> */}
        <KakaoOauthComponents></KakaoOauthComponents>
      </div>
      <Footer />
    </div>
  );
}
