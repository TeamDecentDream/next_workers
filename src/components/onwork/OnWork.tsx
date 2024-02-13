import { FC, useEffect, useState } from "react";

// import { jwtDecode } from "jwt-decode";

const OnWork: FC = () => {
  //   const [color, setColor] = useState<string>("");

  //   useEffect(() => {
  //     const token = sessionStorage.getItem("accessToken");
  //     if (token) {
  //       const claim: any = jwtDecode(token);
  //       console.log(claim.authorities);

  //       switch (claim.authorities[0].Role) {
  //         case "ROLE_WORKER":
  //           setColor("darkGreen");
  //           break;
  //         case "ROLE_PRIME":
  //           setColor("nextBlue");
  //           break;
  //         case "ROLE_ADMIN":
  //           setColor("nextPurple");
  //           break;
  //         default:
  //           setColor("darkGreen");
  //           break;
  //       }
  //     }
  //   }, []);

  return (
    // <div className="w-24 h-10 pt-[6px] text-lg text-center font-semibold text-${color} border-2 border-${color}">
    <div className="w-24 h-10 pt-[6px] text-lg text-center font-semibold text-darkGreen border-2 border-darkGreen">
      출 근
    </div>
  );
};

export default OnWork;
