import { getWorkState } from "@/lib/features/auth/authThunk";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { jwtDecode } from "jwt-decode";

const OnWork: FC = () => {
  const auth: any = useSelector<any>((state) => state.authReducer);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getWorkState({ token: auth.accessToken }));
  }, []);

  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      const claim: any = jwtDecode(token);
      console.log(claim.authorities);

      switch (claim.authorities[0].Role) {
        case "ROLE_WORKER":
          setColor("darkGreen");
          break;
        case "ROLE_PRIME":
          setColor("nextBlue");
          break;
        case "ROLE_ADMIN":
          setColor("nextPurple");
          break;
        default:
          setColor("darkGreen");
          break;
      }
    }
  }, []);

  return (
    // <div className="w-24 h-10 pt-[6px] text-lg text-center font-semibold text-darkGreen border-2 border-darkGreen">
    <div className="w-24 h-10 pt-[6px] text-lg text-center font-semibold text-${color} border-2 border-${color}">
      {auth.workState ? "퇴 근" : "출 근"}
    </div>
  );
};

export default OnWork;
