"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/navbar/Navbar";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";

const Evaluation: FC = () => {
  const [workJournals, setWorkJournals] = useState<Array<number>>([0,0,0,0,0,0]);
  const [textValue, setTextValue] = useState<string>("");

  const handleSubmit = () => {
    
    // axios.post()
    setWorkJournals([0,0,0,0,0,0])
    setTextValue("");
  }

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  }

  const handleRadioChange = (index: number, score: number) => {
    setWorkJournals(prevWorkJournals => {
      const updatedWorkJournals = [...prevWorkJournals];
      updatedWorkJournals[index] = score;
      return updatedWorkJournals;
    });
  };

  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />

      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">농부평가</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        <div>
          <div className="ml-16 mb-4 flex items-start flex-col">
            <p className="text-xl font-semibold">평가 대상 : ㅁㅁㅁ님</p>
          </div>
          <div className="flex ml-24 gap-4 mb-6">
            <div>날짜</div>
            <div>작성자</div>
          </div>
          <div className="mx-32 h-96 overflow-y-auto bg-slate-100 p-4 rounded-[20px] flex">
            <div className="h-full w-1/2">
              <div className="w-full h-1/3">
                <p className="font-semibold">
                  작업 일지를 정확하게 작성하고 일정을 지키는 데 신경 쓰고 있나?
                </p>
                <div className="flex justify-between p-4">
                <label>
                  <input
                    type="radio"
                    name="work_journal_0"
                    value="부족함"
                    onChange={()=>{handleRadioChange(0,1)}}
                    checked={workJournals[0] === 1}
                  />
                  부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_0"
                    value="조금 부족함"
                    onChange={()=>{handleRadioChange(0,2)}}
                    checked={workJournals[0] === 2}
                  />
                  조금 부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_0"
                    value="보통"
                    onChange={()=>{handleRadioChange(0,3)}}
                    checked={workJournals[0] === 3}
                  />
                  보통
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_0"
                    value="조금 잘함"
                    onChange={()=>{handleRadioChange(0,4)}}
                    checked={workJournals[0] === 4}
                  />
                  조금 잘함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_0"
                    value="잘함"
                    onChange={()=>{handleRadioChange(0,5)}}
                    checked={workJournals[0] === 5}
                  />
                  잘함
                </label>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className="font-semibold">농부는 농작물을 관리하고 유지보수하는 데 꼼꼼한가?</p>
                <div className="flex justify-between p-4">
                <label>
                  <input
                    type="radio"
                    name="work_journal_1"
                    value="부족함"
                    onChange={()=>{handleRadioChange(1,1)}}
                    checked={workJournals[1] === 1}
                  />
                  부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_1"
                    value="조금 부족함"
                    onChange={()=>{handleRadioChange(1,2)}}
                    checked={workJournals[1] === 2}
                  />
                  조금 부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_1"
                    value="보통"
                    onChange={()=>{handleRadioChange(1,3)}}
                    checked={workJournals[1] === 3}
                  />
                  보통
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_1"
                    value="조금 잘함"
                    onChange={()=>{handleRadioChange(1,4)}}
                    checked={workJournals[1] === 4}
                  />
                  조금 잘함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_1"
                    value="잘함"
                    onChange={()=>{handleRadioChange(1,5)}}
                    checked={workJournals[1] === 5}
                  />
                  잘함
                </label>
                </div>
                
              </div>
              <div className="w-full h-1/3">
                <p className="font-semibold">새로운 농업 기술 및 방법을 학습하고 적용하는 데 적극적인가?</p>
                <div className="flex justify-between p-4">
                <label>
                  <input
                    type="radio"
                    name="work_journal_2"
                    value="부족함"
                    onChange={()=>{handleRadioChange(2,1)}}
                    checked={workJournals[2] === 1}
                  />
                  부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_2"
                    value="조금 부족함"
                    onChange={()=>{handleRadioChange(2,2)}}
                    checked={workJournals[2] === 2}
                  />
                  조금 부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_2"
                    value="보통"
                    onChange={()=>{handleRadioChange(2,3)}}
                    checked={workJournals[2] === 3}
                  />
                  보통
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_2"
                    value="조금 잘함"
                    onChange={()=>{handleRadioChange(2,4)}}
                    checked={workJournals[2] === 4}
                  />
                  조금 잘함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_2"
                    value="잘함"
                    onChange={()=>{handleRadioChange(2,5)}}
                    checked={workJournals[2] === 5}
                  />
                  잘함
                </label>
                </div>
              </div>
            </div>
            <div className="h-full w-1/2 ">
              <div className="w-full h-1/3">
                <p className="font-semibold">특이사항이 발생 할 때의 대처가 적절한가?</p>
                <div className="flex justify-between p-4">
                <label>
                  <input
                    type="radio"
                    name="work_journal_3"
                    value="부족함"
                    onChange={()=>{handleRadioChange(3,1)}}
                    checked={workJournals[3] === 1}
                  />
                  부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_3"
                    value="조금 부족함"
                    onChange={()=>{handleRadioChange(3,2)}}
                    checked={workJournals[3] === 2}
                  />
                  조금 부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_3"
                    value="보통"
                    onChange={()=>{handleRadioChange(3,3)}}
                    checked={workJournals[3] === 3}
                  />
                  보통
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_3"
                    value="조금 잘함"
                    onChange={()=>{handleRadioChange(3,4)}}
                    checked={workJournals[3] === 4}
                  />
                  조금 잘함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_3"
                    value="잘함"
                    onChange={()=>{handleRadioChange(3,5)}}
                    checked={workJournals[3] === 5}
                  />
                  잘함
                </label>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className="font-semibold">출/퇴근 시간이 정확한가?</p>
                <div className="flex justify-between p-4">
                <label>
                  <input
                    type="radio"
                    name="work_journal_4"
                    value="부족함"
                    onChange={()=>{handleRadioChange(4,1)}}
                    checked={workJournals[4] === 1}
                  />
                  부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_4"
                    value="조금 부족함"
                    onChange={()=>{handleRadioChange(4,2)}}
                    checked={workJournals[4] === 2}
                  />
                  조금 부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_4"
                    value="보통"
                    onChange={()=>{handleRadioChange(4,3)}}
                    checked={workJournals[4] === 3}
                  />
                  보통
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_4"
                    value="조금 잘함"
                    onChange={()=>{handleRadioChange(4,4)}}
                    checked={workJournals[4] === 4}
                  />
                  조금 잘함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_4"
                    value="잘함"
                    onChange={()=>{handleRadioChange(4,5)}}
                    checked={workJournals[4] === 5}
                  />
                  잘함
                </label>
                </div>
                </div>
              <div className="w-full h-1/3">
                <p className="font-semibold">다른 농부와의 관계가 우호적인가?</p>
                <div className="flex justify-between p-4">
                <label>
                  <input
                    type="radio"
                    name="work_journal_5"
                    value="부족함"
                    onChange={()=>{handleRadioChange(5,1)}}
                    checked={workJournals[5] === 1}
                  />
                  부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_5"
                    value="조금 부족함"
                    onChange={()=>{handleRadioChange(5,2)}}
                    checked={workJournals[5] === 2}
                  />
                  조금 부족함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_5"
                    value="보통"
                    onChange={()=>{handleRadioChange(5,3)}}
                    checked={workJournals[5] === 3}
                  />
                  보통
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_5"
                    value="조금 잘함"
                    onChange={()=>{handleRadioChange(5,4)}}
                    checked={workJournals[5] === 4}
                  />
                  조금 잘함
                </label>
                <label>
                  <input
                    type="radio"
                    name="work_journal_5"
                    value="잘함"
                    onChange={()=>{handleRadioChange(5,5)}}
                    checked={workJournals[5] === 5}
                  />
                  잘함
                </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-1 border-gray-300 border-solid" />
        <div>
          <div className="relative mx-32 h-64 mt-6 flex flex-col">
            <h1 className="text-xl font-bold">비고</h1>
            <textarea className="grow border-2 border-gray-300 border-solid resize-none p-4 focus:outline-gray-300  rounded-[20px]"
            onChange={handleTextChange} value={textValue}></textarea>
            <button className="w-full border-2 border-gray-500 border-solid rounded-md" onClick={handleSubmit}>제출하기</button>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Evaluation;
