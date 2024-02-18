"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false); 
  const [color, setColor] = useState("#ff0000"); // 초기 색상 설정
  const [color1, setColor1] = useState("#ff0000");

  useEffect(() => {
    // 0.5초마다 색상 변경
    const interval = setInterval(() => {
      // 랜덤한 색상 생성
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      const randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
      setColor(randomColor);
      setColor1(randomColor1);
    }, 50);

    // 컴포넌트가 unmount 될 때 interval 제거
    return () => clearInterval(interval);
  }, []); // useEffect가 처음 한 번만 실행되도록 빈 배열 전달// 마우스 호버 상태를 저장할 상태

  // 마우스가 요소 위에 올라가면 호출되는 함수
  const handleMouseEnter = () => {
    setHovered(true);
  };

  // 마우스가 요소에서 벗어나면 호출되는 함수
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <div className="cursor-pointer">
        <h1 className="text-[128px] " style={{ color: color }}>404 Page Not Found</h1>
        <p className="text-[64px] text-center"
        style={{ transform: hovered ? 'scale(1.5)' : 'scale(1)',color: color1  }} // 요소의 크기를 조절
        onMouseEnter={handleMouseEnter} // 마우스 호버 이벤트 핸들러 연결
        onMouseLeave={handleMouseLeave} // 마우스 벗어나기 이벤트 핸들러 연결
        onClick={() => { router.replace('/login'); }}
        >홈으로</p>
      </div>
    </div>
  );
}
