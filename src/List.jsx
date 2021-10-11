import React from 'react'

export const List = ({todos, loading}) => {
    let todoList = <div>loading...</div>;
    if(!loading) todoList = todos.map((todo) => <li key={todo.id}>{todo.title}</li>) // 객체형태로 수정
    return (
        <ul>
            {todoList}
        </ul>
    )
}
export default List