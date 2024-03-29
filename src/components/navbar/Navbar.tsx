import { FC, useEffect, useState } from "react";
import NavbarBtns from "./NavbarBtns";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import { jwtDecode } from "jwt-decode";
import { useSelector , useDispatch} from "react-redux";
import { useRouter } from "next/navigation";
import { setAccessToken, setAddress, setIsConnected, setIsLogin, setWorkState } from "@/lib/features/auth/authSlice";

const Navbar: FC = () => {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<Array<any>>([]);
  const [color, setColor] = useState<string>("");
  const Auth: any = useSelector<any>((state) => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!Auth.isLogin){
      handleLogout()
    }
    if (Auth.accessToken) {
      const claim: any = jwtDecode(Auth.accessToken);
      setName(claim.name);
      setRole(claim.authorities);
      switch (claim.authorities[0].Role) {
        case "ROLE_WOKRER":
          setColor("bg-lightGreen");
          break;
        case "ROLE_PRIME":
          setColor("bg-nextBlue");
          break;
        case "ROLE_ADMIN":
          setColor("bg-nextPurple");
          break;

        default:
          setColor("bg-lightGreen");
          break;
      }
    }
  }, []);

  const handleLogout = () => {
    dispatch(setIsConnected(false));
      dispatch(setAddress(""));
      dispatch(setAccessToken(""));
      dispatch(setWorkState(""));
      router.replace('/login')
  }

  return (
    <div className={`w-1/4 min-w-[300px] h-full ${color}`}>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <Link className="mt-8" href="./main">
            <Image src={Logo} alt="logo" width={150} height={150} />
          </Link>
          <h1 className="mt-2 text-2xl bold">{name}님</h1>
          <div className="flex mt-2">
            <Link href="./infomation">
              <h3 className="px-4">내 정보</h3>
            </Link>
            <h3 className="border-l-2 px-4 border-black cursor-pointer" onClick={handleLogout}>로그아웃</h3>
          </div>
          <NavbarBtns role={role} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
