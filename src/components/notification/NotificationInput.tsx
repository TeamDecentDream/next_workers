import axios from "axios";
import { headers } from "next/headers";
import {useState, ChangeEvent} from "react";
import React from "react";

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

        const rawToken: string | null = sessionStorage.getItem("accessToken");
        if (rawToken && notification.contents.length>10 && notification.title.length>5) {
          const accessToken: string = rawToken.substring(16, rawToken.length - 4);
          try {
            const response = await axios.post(
              GinServerBaseURL + "/significant",
              { notification },
              {
                headers: {
                  Authorization: accessToken
                }
              }
            );
            console.log(response.data);
          
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
