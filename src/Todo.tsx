import React, { useEffect, useState } from "react";
import Input from "./Input";

const Todo = () => {
  // 配列でデータを格納する際には最後に空の配列を書くルール
  type TodoProps = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
  }[];

  const [todos, setTodos] = useState<TodoProps>([]);
  // 関数の戻り値は必要なく、ステートの更新のみなので型はvoidでOK
  const fetchTodos = async (): Promise<void> => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) {
        throw new Error("エラーです");
      }
      const data = await res.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo, index) => (
        <Input
          key={index}
          id={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default Todo;
