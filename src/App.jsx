import React from "react";
import TodoStore from "./TodoStore.js";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import List from "./List.jsx";
import "./App.css";

// TodoStore를 쓰기 위해서 여기서 선언
const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
};

export default App;
