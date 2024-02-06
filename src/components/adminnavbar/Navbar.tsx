import { FC } from "react";
import NavbarBtns from "./NavbarBtns";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="w-[300px] min-h-full bg-nextPurple">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <Link href="./main">
            <h1 className="mt-20 text-lg bold">
              Main Link(이미지 or 로고 예정)
            </h1>
          </Link>
          <h1 className="mt-20 text-2xl bold">ㅁㅁㅁ님</h1>
          <div className="flex mt-6">
            <Link href="./infomation">
              <h3 className="px-4">내 정보</h3>
            </Link>
            <h3 className="border-l-2 px-4 border-black">로그아웃</h3>
          </div>
          <NavbarBtns /*role={"user"}*/></NavbarBtns>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
