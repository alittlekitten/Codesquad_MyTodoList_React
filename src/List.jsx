import React from "react";
import Item from "./Item.jsx";

export const List = ({ todos, loading, changeTodoStatus }) => {
  let todoList = <div>loading...</div>;
  if (!loading)
    todoList = todos.map((todo) => (
      <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
    )); // 객체형태로 수정

  return <ul>{todoList}</ul>;
};
export default List;
