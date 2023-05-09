import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

// npm create vite@latest
// y
// プロジェクト名
// React
// TypeScript
// npm install
// npm run dev

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
