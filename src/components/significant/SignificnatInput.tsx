import axios from "axios";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import {useState, ChangeEvent} from "react";
import React from "react";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080"

interface Significant {
    contents: string;
  }

const SignificantInput = () => {
    const [significant, setSignificant] = useState<Significant>({
        contents:""
    });
    const Auth:any = useSelector<any>(state => state.authReducer)
    const router = useRouter();

    const handleContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSignificant(prevState => ({
        ...prevState,
        contents: e.target.value
      }));
    };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        if (Auth.accessToken && significant.contents.length>2 ) {
          try {
            const response = await axios.post(
              GinServerBaseURL + "/significant",
              { contents:significant.contents },
              {
                headers: {
                  Authorization: Auth.accessToken
                }
              }
            );
            setSignificant({
              contents:""
          })
          alert("특이사항 보고 완료")
          router.replace("/worker/significant")
          } catch (error) {
            console.log("특이사항 보고 오류");
            
          }
        }
      };
  return (
    <>
      <form className="min-h-[720px] h-full flex-col flex" onSubmit={handleSubmit}>
        <fieldset className="w-full min-w-[940px] h-full" >
          <legend className="font-bold mt-4">내용</legend>
          <textarea
            className="w-full min-h-[560px] px-4 py-2 border-2 border-solid border-gray-500 focus:outline-gray-500  rounded-[20px]"
            value={significant.contents}
            onChange={handleContents}
          ></textarea>
          <button className="w-full border-gray-500 text-gray-500 border-solid border-2 bg-white text-xl px-4 py-2 rounded-2xl" type="submit">작성하기</button>
        </fieldset>
      </form>
    </>
  );
};

export default SignificantInput;