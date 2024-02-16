"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // next/navigation 대신에 next/router를 가져와야 합니다.

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <div className="cursor-pointer" onClick={()=>{router.replace('/login');}}>
        <h1 className="text-[256px]">404</h1>
        <p className="text-[128px] text-center">홈으로</p>
    </div>
    </div>
  );
}
