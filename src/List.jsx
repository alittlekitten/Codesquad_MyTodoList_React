import React, { useContext } from "react";
import { TodoContext } from "./TodoStore.js";
import Item from "./Item.jsx";

export const List = () => {
  const { todos, loading, changeTodoStatus } = useContext(TodoContext);

  let todoList = <div>loading...</div>;
  if (!loading)
    todoList = todos.map((todo) => (
      <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
    )); // 객체형태로 수정

  return <ul>{todoList}</ul>;
};
export default List;
