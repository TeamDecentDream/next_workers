"use client"

import { useState } from "react";
import { NextPage } from "next";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/adminnavbar/Navbar";

interface Todo {
  id: number;
  text: string;
  date: string;
}

const Todo: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");


  const addTodo = () => {
    if (inputText.trim() == "") {
      alert("내용을 입력해주세요.")
    }
    else {
      const currentDate = new Date().toISOString().slice(0, 10);
      setTodos([...todos, { text: inputText, id: Date.now(), date:currentDate }]);
      setInputText("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    const editedText = prompt("수정할 내용을 입력하세요.", todos.find(todo => todo.id === id)?.text || "");
    if (editedText !== null) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, text: editedText } : todo));
    }
  };

  return (
    <div className="min-w-[1440px] w-full min-h-[800px] flex h-screen">
      <Navbar />
      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">할 일 관리</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>
        <div className="bg-gray-200 w-full h-full p-12">
          <div className="bg-gray-400 w-full h-full flex">
            <div></div>
            <div className="w-1/2 bg-red-100 px-24 pt-8">            
              <input
                  className="w-96 h-32"
                  placeholder="할 일을 입력하세요."
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              <button className="ml-8 w-32 h-32 rounded-3xl bg-darkGreen" onClick={addTodo}>할 일 추가</button>      
            </div>
            <div className="bg-blue-200 w-1/2 px-12 pt-8">
              {todos.map((todo) => (
            <div className="flex items-center mb-4">
              <span className="mr-8 w-24">{todo.date}</span>
              <ul className="w-96 h-16 bg-yellow-300 flex items-center">
                <li>
                  {todo.text}
                
                  </li>
              </ul>
              <button className="w-16 h-16 bg-blue-400 rounded-2xl ml-8" onClick={() => editTodo(todo.id)}>
                수정
                </button>
              <button className="w-16 h-16 bg-red-400 rounded-2xl ml-8" onClick={() => removeTodo(todo.id)}>
                삭제
                </button>
            </div>
                ))}
            </div>
          </div>
          
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Todo;
