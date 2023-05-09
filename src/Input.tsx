import React, { useState } from "react";
// 単一のデータのため空の配列は書かない
type InputProps = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const Input = ({ id, title, userId, completed }: InputProps) => {
  const [inputText, setInputText] = useState<string>("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputText("aaa");
    setInputText(e.target.value);
  };
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{userId}</p>
      <p>{completed}</p>
      <input type="text" value={inputText} onChange={inputChange} />
    </div>
  );
};

export default Input;
