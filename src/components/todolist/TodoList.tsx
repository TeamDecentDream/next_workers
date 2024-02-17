import { FC, useState } from "react";

interface Todo {
    id: number;
    text: string;
    date: string;
  }

const TodoList : FC = () => {
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

    return(
        
            
        
        <div className="bg-blue-200 h-full pt-8">
          <div>
          <div className="flex items-center justify-center mb-4">
          <input
              className="w-96 h-16"
              placeholder="할 일을 입력하세요."
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          <button className="ml-8 w-16 h-16 rounded-2xl bg-darkGreen" onClick={addTodo}>ADD</button>
          </div>
          {todos.map((todo) => (
        <div className="flex items-center mb-4">
          <span className="mr-4 w-24 text-sm">{todo.date}</span>
          <ul className="w-96 h-16 bg-yellow-300 flex items-center">
            <li>
              {todo.text}
            
              </li>
          </ul>
          <button className="min-w-16 min-h-16 bg-blue-400 rounded-2xl ml-2" onClick={() => editTodo(todo.id)}>
            수정
            </button>
          <button className="min-w-16 min-h-16 bg-red-400 rounded-2xl ml-2" onClick={() => removeTodo(todo.id)}>
            삭제
            </button>
        </div>
            ))}
        </div>
      </div>
      
    


    );
}

export default TodoList;