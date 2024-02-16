"use client"

import { useState } from "react";
import { NextPage } from "next";
import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Navbar from "@/src/components/adminnavbar/Navbar";

interface Todo {
  id: number;
  text: string;
}

const Todo: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    if (inputText.trim() == "") {
      alert("내용을 입력해주세요.")
    }
    else {
      setTodos([...todos, { text: inputText, id: Date.now() }]);
      setInputText("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
            <div className="h-full w-1/2 bg-red-100">
            
              <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>할 일 추가</button>
      
            </div>
            <div className="bg-blue-200 w-1/2">
              <div></div>
            <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
            </div>
          </div>
          
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Todo;
