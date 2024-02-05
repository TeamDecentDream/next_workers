import { FC } from "react";
import NavbarBtns from "./NavbarBtns";

const Navbar: FC = () => {
  return (
    <div className="w-[300px] min-h-full bg-lightGreen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="mt-20 text-2xl bold">ㅁㅁㅁ님</h1>
          <div className="flex mt-6">
            <h3 className="px-4">내 정보</h3>
            <h3 className="border-l-2 px-4 border-black">로그아웃</h3>
          </div>
          <NavbarBtns /*role={"user"}*/></NavbarBtns>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
