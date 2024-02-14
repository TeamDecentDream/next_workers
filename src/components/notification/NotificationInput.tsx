import axios from "axios";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import {useState, ChangeEvent} from "react";
import React from "react";
import { useSelector } from "react-redux";

const GinServerBaseURL = "http://localhost:8080"

interface Notification {
    title: string;
    contents: string;
  }

const NotificationInput = () => {
    const [notification, setNotification] = useState<Notification>({
        title:"",
        contents:""
    });
    const Auth:any = useSelector<any>(state => state.authReducer)
    const router = useRouter();

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNotification(prevState => ({
          ...prevState,
          title: e.target.value
        }));
      };
      const handleContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNotification(prevState => ({
          ...prevState,
          contents: e.target.value
        }));
      };


      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        if (Auth.accessToken && notification.contents.length>2 && notification.title.length>2) {
          try {
            const response = await axios.post(
              GinServerBaseURL + "/notification",
              { title: notification.title, contents:notification.contents },
              {
                headers: {
                  Authorization: Auth.accessToken
                }
              }
            );
            console.log(response.data);
            setNotification({
              title:"",
              contents:""
          })
          alert("공지사항 작성되었습니다.")
          router.replace("/worker/notice")
          } catch (error) {
            console.log("공지사항 제출 중 오류");
            
          }
        }
      };
  return (
    <>
      <form className="min-h-[720px] h-full flex-col flex" onSubmit={handleSubmit}>
        <fieldset className="w-full min-w-[940px] h-full" >
          <legend className="font-bold">공지사항 제목</legend>
          <input
            className="w-full h-10 px-2 py-0.5  border-2 border-solid border-nextPurple focus:outline-nextPurple rounded-l"
            type="text"
            value={notification.title}
            onChange={handleTitle}
          ></input>
          <legend className="font-bold mt-4">내용</legend>
          <textarea
            className="w-full min-h-[560px] px-4 py-2 border-2 border-solid border-nextPurple focus:outline-nextPurple  rounded-[20px]"
            value={notification.contents}
            onChange={handleContents}
          ></textarea>
          <button className="w-full border-nextPurple text-nextPurple border-solid border-2 bg-white text-xl px-4 py-2 rounded-2xl" type="submit">작성하기</button>
        </fieldset>
      </form>
    </>
  );
};

export default NotificationInput;
