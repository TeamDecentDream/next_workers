import axios from "axios";
import React , {FC, useState} from "react";
import { useSelector } from "react-redux"

interface OauthDetailComponentsProps {
  list: Array<any>;
  loadMember:any;
}

const GinServerBaseURL = "http://localhost:8080";

const OauthDetailComponents: FC<OauthDetailComponentsProps> = ({ list,loadMember }) => {
    const [roleValue, setRoleValue] = useState<string[]>(list.map(member => member.authorities[0].Role));
    const Auth: any = useSelector<any>((state) => state.authReducer);

  const handleMember = (index:number, id: any, state:number, address:string, memberId:number) => {
    axios
      .put(GinServerBaseURL + `/member/confirm`,{
        id:id,
        authority:roleValue[index],
        state:state,
        address:address,
        memberId:memberId
    } ,{
        headers: { Authorization: Auth.accessToken },
      })
      .then((resp) => {
        loadMember();
        alert("변경 성공");
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const updatedRoleValue = [...roleValue];
    updatedRoleValue[index] = e.target.value;
    setRoleValue(updatedRoleValue);
  };

  return (
    <>
      {list &&
        list.map((member, index) => (
          <tr key={member.id}>
            <td className="border border-gray-500 px-4 py-2">{member.name}</td>
            <td className="border border-gray-500 px-4 py-2">{member.email}</td>
            <td className="border border-gray-500 px-4 py-2">
              <select
                value={member.authorities[0].Role}
                className="w-full h-full border-none bg-transparent outline-none"
                onChange={(e) => {
                    handleRoleChange(e, index)}}
              >
                <option value="ROLE_GUEST">게스트</option>
                <option value="ROLE_WORKER">일반 농부</option>
                <option value="ROLE_PRIME">헤드 농부</option>
                <option value="ROLE_ADMIN">관리자</option>
              </select>
            </td>
            <td className="border border-gray-500 px-4 py-2">{member.address}</td>
            <td className="border border-gray-500 px-4 py-2">{member.regDate}</td>
            <td className="border border-gray-500 px-4 py-2">{member.confirmDate}</td>
            <td className="border border-gray-500 px-4 py-2">{member.state===0?"대기":member.state===1?"확인":"반려"}</td>
            <td className="border border-gray-500 px-4 py-2">
              {member.state===0?<><button
                className="w-full h-full text-lg p-1 border-[1px] border-solid border-green-400 text-green-400 rounded-lg hover:text-white hover:bg-green-400"
                onClick={()=>{handleMember(index,member.id,1,member.address,member.memberId)}}
              >
                승인
              </button>
              <button
                className="mt-1 w-full h-full text-lg p-1 border-[1px] border-solid border-red-400 text-red-400 rounded-lg hover:text-white hover:bg-red-400"
                onClick={()=>{handleMember(index,member.id,2,member.address,member.memberId)}}
              >
                반려
              </button></>:<>
              <button
                className="mt-1 w-full h-full text-lg p-1 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg hover:text-white hover:bg-blue-400"
                onClick={()=>{handleMember(index,member.id,1,member.address,member.memberId)}}
              >
                권한변경
              </button></>}
            </td>
          </tr>
        ))}
    </>
  );
};

export default OauthDetailComponents;
