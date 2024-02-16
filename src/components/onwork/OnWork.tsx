import { setWorkState } from "@/lib/features/auth/authSlice";
import { getWorkState } from "@/lib/features/auth/authThunk";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080"

const OnWork: FC = () => {
  const auth: any = useSelector<any>((state) => state.authReducer);
  const dispatch: any = useDispatch();

  const [color, setColor] = useState<string>("");

  const handleWorkState = () => {
    if(auth.workState){
      axios.post(GinServerBaseURL+'/attendance/leave',{},{headers:{Authorization:auth.accessToken}})
      .then((resp)=>{
        dispatch(setWorkState(""))
      })
      .catch((err)=>{console.log(err)})
    } else {
      axios.post(GinServerBaseURL+'/attendance/enter',{},{headers:{Authorization:auth.accessToken}})
      .then((resp)=>{
        dispatch(setWorkState(resp.data.state))
      })
      .catch((err)=>{console.log(err)})
    }
  }

  useEffect(() => {
    dispatch(getWorkState({ token: auth.accessToken }));
    if (auth.accessToken) {
      const claim: any = jwtDecode(auth.accessToken);

      switch (claim.authorities[0].Role) {
        case "ROLE_WOKRER":
          setColor("lightGreen");
          break;
        case "ROLE_PRIME":
          setColor("nextBlue");
          break;
        case "ROLE_ADMIN":
          setColor("nextPurple");
          break;
        default:
          setColor("lightGreen");
          break;
      }
    }
  }, []);

  return (
    <div
      className={`w-24 h-10 pt-[6px] text-lg text-center font-semibold text-${color} border-2 border-${color} rounded-lg cursor-pointer`}
      onClick={handleWorkState}
    >
      {auth.workState ? "퇴 근" : "출 근"}
    </div>
  );
};

export default OnWork;